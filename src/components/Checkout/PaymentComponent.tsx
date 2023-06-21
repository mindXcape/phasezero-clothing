// Import required modules
import React from 'react';
import InputRhude from 'components/ui/input/InputRhude'; // InputRhude component
import Button from 'components/button/Button'; // Button component
import CheckoutItems from './CheckoutItems';

// Define PaymentComponent function
function PaymentComponent() {
  return (
    // Main wrapper for the payment component
    <div className="item__payment__wrapper">
      {/* Section where the items added to the cart will be displayed */}
      <div className="checkoutItems__main__container">
        {/* Example checkout items. In a real app, this would likely be an array map */}
        <CheckoutItems />
        <CheckoutItems />
        <CheckoutItems />
        <CheckoutItems />
        <CheckoutItems />
      </div>

      {/* Section for entering gift or discount codes */}
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
            e.preventDefault(); // Prevent form submission
          }}
          disabled={false} // The button is enabled
          title="Apply"
        />
      </div>

      {/* Section to display order summary */}
      <div className="orderSummary__wrapper">
        <div className="itemPrice__wrapper">
          <span className="subtotal__text">Subtotal</span>
          <span className="subtotal__price">$2,654.34</span>
          {/* This would be dynamic in a real app */}
        </div>
        <div className="shippingPrice__wrapper">
          <span className="shippingPrice__text">Shipping</span>
          <span className="shippingPrice__price">Calculated at next step</span>
        </div>
      </div>

      {/* Section to display total price */}
      <div className="checkout__total__wrapper">
        <span className="checkout__total__title">Total</span>
        <span className="itemTotal__currency">
          USD {/* The currency */}
          <span className="itemTotal__price">$2,654.34</span>
          {/* This would be dynamic in a real app */}
        </span>
      </div>
    </div>
  );
}

// Export the component for use in other modules
export default PaymentComponent;
