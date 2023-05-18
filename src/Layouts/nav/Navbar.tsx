import '../../scss/main.scss';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets';
import Rightdrawers from '../../components/drawers/Rightdrawers';

function Navbar() {
  return (
    <div className="header__wrapper">
      <div className="left__items">
        <p>Shop</p>
        <p>Collection</p>
        <p>Community</p>
      </div>
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="right__section">
        <div className="big__screen__item">
          <p>Account</p>
          <SearchIcon />
          <FavoriteBorderIcon />
          <LocalMallIcon />
        </div>
        <div className="right__drawer__wrapper">
          <Rightdrawers />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
