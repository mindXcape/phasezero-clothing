import { MouseEvent } from 'react';
import { AccountFormInput } from 'components/ui/input';
import { Button } from 'components/button';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const handleRegisterSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className="registerForm__wrapper">
      <div className="registerForm__box__margin">
        <div className="register__label__wrapper">
          <div className="register__label__first__row">
            <AccountFormInput
              className="register__label__firstName"
              type="text"
              name=""
              placeholder="Enter your first name"
              hasId="register__label__firstName"
              labelName="First name*"
            />
            <AccountFormInput
              className="register__label__lastName"
              type="text"
              name=""
              placeholder="Enter your last name"
              hasId="register__label__lastName"
              labelName="Last name*"
            />
          </div>
          <AccountFormInput
            className="register__label__email"
            type="email"
            name=""
            placeholder="Enter your email address"
            hasId="register__label__email"
            labelName="E-mail*"
          />
          <AccountFormInput
            className="register__label__password"
            type="password"
            name=""
            placeholder="Enter your password"
            hasId="login__label__email"
            labelName="Password*"
          />
          <AccountFormInput
            className="register__label__birthday"
            type="date"
            name=""
            placeholder="MM/DD/YYYY"
            hasId="register__label__birthday"
            labelName="Birthday*"
          />
          <label htmlFor="gender__select" className="account__form__label">
            <h3>Gender*</h3>
            <select id="gender__select">
              <option value="">Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </label>
          <label
            htmlFor="register__input__checkbox"
            className="register__label__checkbox"
          >
            <input
              type="checkbox"
              id="register__input__checkbox"
              className="register__input__checkbox"
            />
            <h3 className="register__checkbox__label">
              Subscribe to receive email updates about Phase Zero product
              launches, promotions and exclusive discounts.
            </h3>
          </label>
        </div>
        <p>
          By submitting this form, you accept the{' '}
          <Link to="/">Terms & Conditions</Link>
        </p>
        <Button
          className="account__btn__submit"
          eventHandler={handleRegisterSubmit}
          disabled={false}
          title="REGISTER"
        />
      </div>
    </div>
  );
}

export default RegisterForm;
