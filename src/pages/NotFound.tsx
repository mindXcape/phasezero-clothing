import { pagenotfound } from '../assets';

function NotFound() {
  return (
    <div className="page__not__found__wrapper">
      <div className="page__not__found__image__wrapper">
        <img src={pagenotfound} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
