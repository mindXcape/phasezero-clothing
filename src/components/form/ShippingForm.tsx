import React from 'react';
import InputRhude from 'components/ui/input/InputRhude';

function ShippingForm() {
  return (
    <div className="form__Wrapper">
      {/* form for shipping information */}
      <form action="">
        <h3>Information</h3>
        <div className="form__main">
          {/* first and last name input */}
          <div className="form-group">
            <InputRhude
              className="form__input__column"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              required
            />
            <InputRhude
              className="form__input__column"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              required
            />
          </div>
          {/* address input */}
          <InputRhude
            className="form__input__column"
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            required
          />
          {/* Apartment input */}
          <InputRhude
            className="form__input__column"
            type="text"
            id="landmark"
            name="landmark"
            placeholder="Landmark (School, Hospital etc)"
          />
          {/* city and postal code */}
          <div className="form-group">
            <InputRhude
              className="form__input__column"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="City"
              required
            />
            <InputRhude
              className="form__input__column"
              type="tel"
              id="number"
              name="number"
              placeholder="Contact Number"
              pattern="\+977-98\d{8}"
              required
            />
          </div>
          {/* checkbox input */}
          <div className="checkbox__wrapper__form">
            <label htmlFor="checkboxFormInput">
              <input
                className="checkbox__input"
                type="checkbox"
                id="checkboxFormInput"
              />
              <span>Text me with news and offer</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShippingForm;
