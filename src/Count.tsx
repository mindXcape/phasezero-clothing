import React, { useState } from 'react';

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <>
      <p data-testid="count">{count}</p>
      <button onClick={addHandler}>Add</button>
    </>
  );
};

export default Count;
