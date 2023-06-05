import '../scss/main.scss';
import ImageGallery from '../Layouts/Product-Detail/ImageGallery';
import RightSection from '../Layouts/Product-Detail/RightSection';

function ProductDetail() {
  return (
    <div className="product__detail__wrapper">
      <ImageGallery />
      <RightSection />
    </div>
  );
}

export default ProductDetail;
