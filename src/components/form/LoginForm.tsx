import { MouseEvent } from 'react';
import { AccountFormInput } from 'components/ui/input';
import { Link } from 'react-router-dom';
import { Button } from 'components/button';

function LoginForm() {
  const handleLoginSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className="loginForm__wrapper">
      <div className="loginForm__box__margin">
        <div className="login__label__wrapper">
          <AccountFormInput
            className="login__label__email"
            type="email"
            name=""
            placeholder="Enter your email address"
            hasId="login__label__email"
            labelName="E-mail*"
          />
          <AccountFormInput
            className="login__label__password"
            type="password"
            name=""
            placeholder="Enter your password"
            hasId="login__label__password"
            labelName="Password*"
          />
          <Link to="/">Forgot your password?</Link>
        </div>
        <Button
          className="account__btn__submit"
          eventHandler={handleLoginSubmit}
          disabled={false}
          title="SIGN IN"
        />
      </div>
    </div>
  );
}

export default LoginForm;
