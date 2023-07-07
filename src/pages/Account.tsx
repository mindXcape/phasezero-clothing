import { MouseEvent } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AccountProviderButtons, Button } from 'components/button';

function Account() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/account');
  };

  const handleRegisterClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/account/register');
  };

  return (
    <div className="account__wrapper">
      <div className="account__box__container">
        <div className="account__logo__title__wrapper">
          <h5>STARTING FROM PHASE 0</h5>
        </div>
        <div className="account__buttons__wrapper">
          <Button
            title="LOGIN"
            className={`account__login__btn ${
              location.pathname === '/account' ? 'active' : ''
            }`}
            eventHandler={handleLoginClick}
          />
          <Button
            title="REGISTER"
            className={`account__register__btn ${
              location.pathname === '/account/register' ? 'active' : ''
            }`}
            eventHandler={handleRegisterClick}
          />
        </div>
        <Outlet />
        <AccountProviderButtons />
      </div>
    </div>
  );
}

export default Account;
