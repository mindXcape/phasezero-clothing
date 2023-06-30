import Button from 'components/button/Button';
import { dummyQR } from 'assets/Images';

function CheckoutPaymentMethod() {
  return (
    <div className="payment__method__wrapper">
      <div className="payment__method">
        <h3>Payment Method</h3>
      </div>
      <div className="qr__wrapper">
        <div className="qr__divider">
          <span className="qr__divider__content"> Esewa Checkout</span>
        </div>
        <div className="qr__button__wrapper">
          <img src={dummyQR} alt="" className="qr__image" />
        </div>
      </div>
      {/* or content wrapper */}
      <div className="or__wrapper">
        <span className="or__content">OR</span>
      </div>
      <div className="cash__on__delivery">
        <Button
          className="cash__on__delivery__btn"
          disabled={false}
          eventHandler={(e) => e.preventDefault()}
          title="Pay on Delivery"
        />
      </div>
    </div>
  );
}

export default CheckoutPaymentMethod;
