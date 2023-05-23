import React, { useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ProviderBtn from '../../components/button/ProviderBtn';
import FloatingLabelInput from '../../components/ui/input/FloatingInputLabel';
import Button from '../../components/button/Button';
import '../../scss/main.scss';
import RegisterForm from '../../components/form/RegisterForm';

function Register() {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    // your click handler logic
  };

  const handleContinueClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="register__main__wrapper">
      <div className="register__sub__wrapper">
        <span className="phasezero__account__title">My Phasezero Account</span>
        <div className="btns__register__wrapper">
          <ProviderBtn
            title="SIGN IN WITH FACEBOOK"
            className="facebook__btn"
            eventHandler={handleClick}
            disabled={false}
            providerIcon={<FacebookIcon />}
          />
          <ProviderBtn
            title="SIGN IN WITH APPLE"
            className="apple__btn"
            eventHandler={handleClick}
            disabled={false}
            providerIcon={<AppleIcon />}
          />
          <ProviderBtn
            title="SIGN IN WITH GOOGLE"
            className="google__btn"
            eventHandler={handleClick}
            disabled={false}
            providerIcon={<GoogleIcon />}
          />
        </div>
        <div className="register__texts__wrapper">
          <span>OR</span>
          <span>Continue with your email address</span>
          <span>
            Sign in with your Phasezero email and password or create a profile
            if you are new
          </span>
          <FloatingLabelInput
            id="email"
            hasType="email"
            label="Email"
            isRequired
          />
        </div>
        {showForm && <RegisterForm />}
        {!showForm ? (
          <Button
            className="continue__btn__register"
            disabled={false}
            eventHandler={handleContinueClick}
            title="Continue"
          />
        ) : (
          <Button
            className="create__btn__regsiter"
            disabled={false}
            eventHandler={handleContinueClick}
            title="Create My Profile"
          />
        )}
      </div>
    </div>
  );
}

export default Register;
