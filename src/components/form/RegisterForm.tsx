/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FloatingLabelInput from '../ui/input/FloatingInputLabel';
import '../../scss/main.scss';

function RegisterForm() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const startEditing = () => {
    // Add the logic for starting the editing process here
  };

  return (
    <div className="register__form__wrapper">
      <div className="createPassword__wrapper">
        <FloatingLabelInput
          className="register__password"
          id="password"
          hasType={isPasswordVisible ? 'text' : 'password'}
          label="Password"
          icon={
            isPasswordVisible ? (
              <VisibilityOffIcon fontSize="small" />
            ) : (
              <RemoveRedEyeIcon fontSize="small" />
            )
          }
          onIconClick={togglePasswordVisibility}
          onIconSecondaryClick={startEditing}
        />
        <div className="password__validation">
          <span>- Please enter at least 8 characters</span>
          <span>- Please enter at least one number</span>
          <span>{'- Please enter one special character (!+,-./:;<=>?@)'}</span>
        </div>
      </div>
      <FloatingLabelInput
        id="number"
        hasType="password"
        label="Phone Number *"
        isRequired
      />
      <FloatingLabelInput
        id="password"
        hasType="password"
        label="First Name *"
        isRequired
      />
      <FloatingLabelInput
        id="password"
        hasType="password"
        label="Last Name *"
        isRequired
      />
      <div className="mainDOB__wrapper__register">
        <p>Date of Birth *</p>
        <div className="dob__wrapper">
          <FloatingLabelInput
            id="password"
            hasType="password"
            label="MM *"
            isRequired
          />
          <FloatingLabelInput
            id="password"
            hasType="password"
            label="DD *"
            hasPlaceholder=""
          />
          <FloatingLabelInput
            id="password"
            hasType="password"
            label="YYYY *"
            hasPlaceholder=""
          />
        </div>
      </div>
      <span>
        By choosing "Create my profile", you acknowledge the terms of our{' '}
        <Link to="/policies" className="privacy__policy__register">
          privacy policy
        </Link>{' '}
        you confirm that you want to create your <b>PHASE</b> profile.
      </span>
    </div>
  );
}

export default RegisterForm;
