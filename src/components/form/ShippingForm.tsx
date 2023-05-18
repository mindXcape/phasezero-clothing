import React from 'react';
import '../../scss/main.scss';
import InputRhude from '../ui/input/InputRhude';

function ShippingForm() {
  return (
    <div className="form__Wrapper">
      <form action="">
        <h3>Shipping Address</h3>
        <div className="form__main">
          <select id="countries" name="countries">
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
          </select>
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
          <InputRhude
            className="form__input__column"
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            required
          />
          <InputRhude
            className="form__input__column"
            type="text"
            id="firstname"
            name=""
            placeholder="Apartment, suite, etc. (optional)"
          />
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
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Postal code (optional)"
            />
          </div>
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
