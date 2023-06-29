import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SearchIcon, LocalMallIcon } from 'assets/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { logo } from 'assets/Images/index';
import Rightdrawers from 'components/drawers/Rightdrawers';
import DrawerProvider from 'utils/Drawer/DrawerProvider';

const menuItems = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }];

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="header__wrapper">
      {/* Left side items */}
      <div className="left__items">
        <p>
          <NavLink to="/shop">Shop</NavLink>{' '}
        </p>
        <p>
          <NavLink to="/collections">Collection</NavLink>{' '}
        </p>
        <p>
          <NavLink to="/community">Community</NavLink>{' '}
        </p>
      </div>
      {/* Logo Image. Middle section of navbar */}
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      {/* Right section of navbar */}
      <div className="right__section">
        <div className="big__screen__item">
          <p>
            <NavLink to="/register">Account</NavLink>{' '}
          </p>
          {/* <SearchIcon onClick={() => handleSearch()} /> */}
          <DrawerProvider anchor="top" icon={<SearchIcon />}>
            <SearchBar />
          </DrawerProvider>
          <FavoriteBorderIcon onClick={() => navigate('/wishlist')} />
          <LocalMallIcon onClick={() => navigate('/cart')} />
        </div>
        {/* This section gets enable in mobile view */}
        <div className="right__drawer__wrapper">
          <Rightdrawers menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
