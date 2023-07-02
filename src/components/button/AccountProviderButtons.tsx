import { GoogleIcon, AppleIcon, FacebookIcon } from 'assets/icons';
import { IconButton } from '@mui/material';

function AccountProviderButtons() {
  return (
    <div className="account__provider__wrapper">
      <h4>or continue with</h4>
      <div className="provider__buttons__container">
        <IconButton>
          <GoogleIcon
            fontSize="large"
            sx={{
              color: 'black',
            }}
          />
        </IconButton>
        <IconButton>
          <AppleIcon
            fontSize="large"
            sx={{
              color: 'black',
            }}
          />
        </IconButton>
        <IconButton>
          <FacebookIcon
            fontSize="large"
            sx={{
              color: 'black',
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default AccountProviderButtons;
