import React, { useEffect, useState } from 'react';
import '../../scss/main.scss';
import PaymentComponent from './PaymentComponent';
import CheckoutAccordion from '../accordion/CheckoutAccordion';

export default function PaymentInfo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1033); // Adjust the breakpoint as necessary
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
