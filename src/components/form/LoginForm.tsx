import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FloatingLabelInput from 'components/ui/input/FloatingInputLabel';

function LoginForm() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };
  return (
    <div className="login__form__wrapper">
      <div className="password__input__wrap">
        <FloatingLabelInput
          className="register__password"
          id="password"
          hasType={isPasswordVisible ? 'text' : 'password'} // Set input type based on isPasswordVisible state
          label="Password"
          icon={
            isPasswordVisible ? (
              // If password is visible, show 'visibility off' icon
              <VisibilityOffIcon fontSize="small" />
            ) : (
              // If password is hidden, show 'remove red eye' icon
              <RemoveRedEyeIcon fontSize="small" />
            )
          }
          onIconClick={togglePasswordVisibility} // Set icon click handler to togglePasswordVisibility function
        />
      </div>
      <div className="navigation__login__wrapper">
        <div className="checkout__staySignIn">
          <label htmlFor="staySigned">
            {/* Stay Signed In checkbox */}
            <input name="staySigned" type="checkbox" id="staySigned" />
            Stay Signed In
          </label>
        </div>
        {/* Link to reset password page */}
        <Link to="/" className="login__forgotPassword__text">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}

export default LoginForm; // Export LoginForm as default
