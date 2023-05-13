import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState<number>(0);

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <>
      <p data-testid="count">{count}</p>
      <button type="button" onClick={addHandler}>
        Add
      </button>
    </>
  );
}

export default Count;
