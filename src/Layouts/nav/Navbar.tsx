import { useState } from 'react';
import '../../scss/main.scss';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, useNavigate } from 'react-router-dom';
import { logo } from '../../assets';
import Rightdrawers from '../../components/drawers/Rightdrawers';
import SearchBar from '../../components/searchBar/SearchBar';

interface NavBarProps {
  backgroundState: (state: boolean) => void;
}

const menuItems = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }];

function Navbar({ backgroundState }: NavBarProps) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <SearchBar
        isActive={isSearchActive}
        onClose={() => setIsSearchActive(false)}
        backgroundState={backgroundState}
      />
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
            <SearchIcon
              onClick={() => {
                setIsSearchActive(!isSearchActive);
                backgroundState(true);
              }}
            />
            <FavoriteBorderIcon onClick={() => navigate('/wishlist')} />
            <LocalMallIcon onClick={() => navigate('/cart')} />
          </div>
          {/* This section gets enable in mobile view */}
          <div className="right__drawer__wrapper">
            <Rightdrawers menuItems={menuItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
