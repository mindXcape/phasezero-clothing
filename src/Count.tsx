import React, { useState } from 'react';
import ModalComponent from './components/modal/ModalComponent';

function Count() {
  const [count, setCount] = useState<number>(0);

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const desc = `Phasezero now offers you the convenience of being able to purchase items in your preferred currency. At checkout, all import duties and taxes will be applied to the final price.`;
  return (
    <>
      <p data-testid="count">{count}</p>
      <button type="button" onClick={addHandler}>
        Add
      </button>
      <ModalComponent description={desc} />
    </>
  );
}

export default Count;
