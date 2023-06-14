import React, { useState, useEffect } from 'react';

interface CountDownCardProps {
  count: string | number;
  status: string;
}

function CountDownCard({ count, status }: CountDownCardProps) {
  const [currentCount, setCurrentCount] = useState<string | number>(count);

  return (
    <div className="count__down__card__wrapper">
      <div className="count__down__card__content">
        <div className="count__down__card__left">
          <div className="count__down__card__top" />
          <div className="count__down__card__bottom" />
          {/* <h3>{leftCount}</h3> */}
        </div>
        <div className="count__down__card__right">
          <div className="count__down__card__top" />
          <div className="count__down__card__bottom" />
          {/* <h3>{rightCount}</h3> */}
        </div>
      </div>
      <h2>{status}</h2>
    </div>
  );
}
export default CountDownCard;
