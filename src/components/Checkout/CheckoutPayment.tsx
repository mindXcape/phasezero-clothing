import React, { useEffect, useState } from 'react';
import '../../scss/main.scss';
import PaymentComponent from './PaymentComponent';
import CheckoutAccordion from '../accordion/CheckoutAccordion';

export default function CheckoutPayment() {
  // use state to toggle mobile and desktop view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create the event handler function
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1033); // Adjust the breakpoint as necessary
    };

    // Immediately invoke the handler to set initial state
    handleResize();

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Return the cleanup function
    return () => {
      // This is the cleanup function. It removes the event listener from the window.
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array means this effect runs once when the component mounts, and the cleanup runs when the component unmounts.

  return (
    <div className="main__payment__wrapper">
      {isMobile ? (
        <CheckoutAccordion />
      ) : (
        /* Render your desktop content here */
        <div className="payment__wrapper">
          <PaymentComponent />
        </div>
      )}
    </div>
  );
}
