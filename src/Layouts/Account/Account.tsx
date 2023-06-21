import { MouseEventHandler, useState } from 'react';
import { AppleIcon, FacebookIcon, GoogleIcon } from 'assets/ProviderLogo/index';
import {
  ProviderBtn,
  FloatingLabelInput,
  RegisterForm,
  Button,
  LoginForm,
} from 'components/index';

function Account() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleClick: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (
    event
  ) => {
    // your click handler logic
  };
  const handleContinueClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="account__main__wrapper">
      <div className="account__sub__wrapper">
        <span className="phasezero__account__title">My Phasezero Account</span>
        <div className="btns__register__wrapper">
          <ProviderBtn
            title="SIGN IN WITH APPLE"
            className="apple__btn"
            eventHandler={handleClick}
            disabled={false}
            providerIcon={<AppleIcon />}
          />
          <ProviderBtn
            title="SIGN IN WITH FACEBOOK"
            className="facebook__btn"
            eventHandler={handleClick}
            disabled={false}
            providerIcon={<FacebookIcon />}
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
          <span className="continue__email__text">
            Continue with your email address
          </span>
          <span>
            Sign in with your Phasezero email and password or create a profile
            you are new
          </span>
          <FloatingLabelInput
            id="email"
            hasType="email"
            label="Email"
            isRequired
          />
        </div>
        {!showForm ? (
          <Button
            className="continue__btn__register"
            disabled={false}
            eventHandler={handleContinueClick}
            title="Continue"
          />
        ) : (
          <>
            <LoginForm />
            <Button
              className="create__btn__register"
              disabled={false}
              eventHandler={handleContinueClick}
              title="Create My Profile"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Account;
