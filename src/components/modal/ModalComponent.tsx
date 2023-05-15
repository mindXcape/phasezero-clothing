import React, { useState, useEffect } from 'react';
import '../../scss/main.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { CountryType, countries } from '../../data/country';

// defining props
type Props = {
  description: string;
};

interface LocationType {
  city: string;
  region: string;
  country: string;
}

// funcational component
function ModalComponent({ description }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initialLocation, setInitialLocation] = useState<LocationType>({
    city: '',
    region: '',
    country: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType>({
    city: '',
    region: '',
    country: '',
  });
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    border: 'none',
    outline: 'none',
    boxShadow: 24,
    p: 1,
  };

  // fetching data from static ts file to render all the country data in select tag
  const countryOptions = countries.map((country: CountryType) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  // fetching data from static ts file to render all the currency data in select tag
  const currencyOptions = countries.map((country: CountryType) => (
    <option key={country.name} value={country.currency}>
      {country.currency}
    </option>
  ));

  // useEffect hook
  useEffect(() => {
    // saving modelshown data in localstorage to render it only once
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
      setTimeout(() => {
        setModalOpen(true);
        localStorage.setItem('modalShown', 'true');
      }, 3000);
    }

    // fetching end user's location using api
    const fetchLocation = async () => {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_LOCATION_API);
        if (!response.ok) {
          throw new Error('Unable to fetch location');
        }
        const data = await response.json();
        setInitialLocation({
          city: data.city,
          region: data.region,
          country: data.country_name,
        });
        setSelectedLocation({
          city: data.city,
          region: data.region,
          country: data.country_name,
        });

        // Update currency based on the location if needed
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  // closing the modal logic
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* this will render if the model hasn't run in user's end */}
      {modalOpen && (
        <Modal
          open={modalOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal_box">
            <div className="box">
              <div className="modal_item_top">
                <IconButton onClick={closeModal}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div className="modal_container">
                {/* this checks the state is not in editMode and div which shows their location and description */}
                {!editMode && (
                  <>
                    <div className="country_info">
                      <p className="modal_text">
                        WE SHOP TO{' '}
                        {selectedLocation.country || initialLocation.country}
                      </p>
                    </div>
                    <div className="shipping_offer">
                      <p className="modal_text">{description}</p>
                    </div>
                  </>
                )}
                {/* if its in edit mode, user will have another div render where they can change their location and currecny */}
                {editMode && (
                  <>
                    <div className="change__country">
                      <p>Change your Shipping country</p>
                      <select
                        value={selectedLocation.country}
                        onChange={(e) =>
                          setSelectedLocation({
                            ...selectedLocation,
                            country: e.target.value,
                          })
                        }
                      >
                        {countryOptions}
                      </select>
                    </div>
                    <div className="change__currency">
                      <p>Change your Currency</p>
                      <select
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                      >
                        {currencyOptions}
                      </select>
                    </div>
                  </>
                )}
              </div>
              <div className="modal_container_btn">
                <button
                  type="button"
                  className="modal_btn"
                  style={{
                    color: 'white',
                  }}
                >
                  SHOP NOW
                </button>
                <button
                  type="button"
                  className="modal_btn"
                  style={{ color: 'black', backgroundColor: 'white' }}
                  onClick={() => setEditMode(!editMode)}
                >
                  {/* below logic is to toggle button from 'Change location' to 'Go back' for better UX */}
                  {!editMode && 'CHANGE YOUR SHIPPING COUNTRY'}
                  {editMode && 'Go Back'}
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default ModalComponent;
