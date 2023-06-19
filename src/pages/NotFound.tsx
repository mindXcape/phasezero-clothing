import { pagenotfound } from '../assets';
import { Title } from '../components';

function NotFound() {
  return (
    <div className="page__not__found__wrapper">
      <div className="page__not__found__image__wrapper">
        <Title title="Page not Found" />
        <img src={pagenotfound} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
