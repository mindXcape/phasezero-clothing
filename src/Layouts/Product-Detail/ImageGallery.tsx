import { athleisureback, athleisurefront } from '../../assets';
import '../../scss/main.scss';

function ImageGallery() {
  return (
    <div className="product__detail__gallery row">
      <div className="gallery__image col-lg-6">
        <img className="images" src={athleisureback} alt="gallery " />
      </div>
      <div className="gallery__image col-lg-6">
        <img className="images" src={athleisurefront} alt="" />
      </div>
      <div className="gallery__image col-lg-6">
        <img className="images" src={athleisureback} alt="gallery " />
      </div>
      <div className="gallery__image col-lg-6">
        <img className="images" src={athleisurefront} alt="" />
      </div>
    </div>
  );
}

export default ImageGallery;
