import '../../scss/main.scss';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets';
import Rightdrawers from '../../components/drawers/Rightdrawers';

const menuItems = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }];

function Navbar() {
  return (
    <div className="header__wrapper">
      {/* Left side items */}
      <div className="left__items">
        <p>Shop</p>
        <p>Collection</p>
        <p>Community</p>
      </div>
      {/* Logo Image. Middle section of navbar */}
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      {/* Right section of navbar */}
      <div className="right__section">
        <div className="big__screen__item">
          <p>Account</p>
          <SearchIcon />
          <FavoriteBorderIcon />
          <LocalMallIcon />
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
