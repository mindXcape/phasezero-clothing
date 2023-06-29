import { InputRhude } from 'components/ui/input';
import { Button } from 'components/button';
import CheckoutItems from './CheckoutItems';

function PaymentComponent() {
  return (
    <div className="item__payment__wrapper">
      <div className="checkoutItems__main__container">
        <CheckoutItems />
        <CheckoutItems />
        <CheckoutItems />
        <CheckoutItems />
        <CheckoutItems />
      </div>
      <div className="input__code__wrapper">
        <InputRhude
          className="input__gift__code"
          placeholder="Gift card or discount code"
          type="text"
          name="inputGiftCode"
        />
        <Button
          className="apply__gift__code"
          eventHandler={(e) => {
            e.preventDefault();
          }}
          disabled={false}
          title="Apply"
        />
      </div>
      <div className="orderSummary__wrapper">
        <div className="itemPrice__wrapper">
          <span className="subtotal__text">Subtotal</span>
          <span className="subtotal__price">$2,654.34</span>
        </div>
        <div className="shippingPrice__wrapper">
          <span className="shippingPrice__text">Shipping</span>
          <span className="shippingPrice__price">Calculated at next step</span>
        </div>
      </div>
      <div className="checkout__total__wrapper">
        <span className="checkout__total__title">Total</span>
        <span className="itemTotal__currency">
          USD
          <span className="itemTotal__price">$2,654.34</span>
        </span>
      </div>
    </div>
  );
}

export default PaymentComponent;
