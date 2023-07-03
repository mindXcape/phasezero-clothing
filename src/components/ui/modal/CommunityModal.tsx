import { MouseEvent } from 'react';
import ModalRightItems from 'components/CommunityModal/ModalRightItems';
import Modal from '@mui/material/Modal';

interface Props {
  selectedImage: string;
  isOpen: boolean;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
  goToNextImage: (e: MouseEvent<HTMLButtonElement>) => void;
  goToPrevImage: (e: MouseEvent<HTMLButtonElement>) => void;
}

function CommunityModal({
  selectedImage,
  isOpen,
  onClose,
  goToNextImage,
  goToPrevImage,
}: Props) {
  if (!isOpen || !selectedImage) {
    return null;
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal__wrapper">
          <div className="modal__image__wrapper">
            <img src={selectedImage} alt="" />
          </div>
          <div className="modal__right__item__wrapper">
            <ModalRightItems
              goToNextImage={goToNextImage}
              goToPrevImage={goToPrevImage}
              onClose={onClose}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CommunityModal;
