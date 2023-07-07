import React, { useEffect } from 'react';
import { PZ } from 'assets/Images';

function LoadingState() {
  useEffect(() => {
    return () => {
      const myAnimation = document?.getElementById('loading_state');
      if (myAnimation) {
        myAnimation.style.transition = 'transform 2s ease-in-out';
      }
    };
  }, []);
  return (
    <div id="loading_state" className="loading__img__wrapper">
      <img src={PZ} alt="loading state of whole web" />
    </div>
  );
}

export default LoadingState;
