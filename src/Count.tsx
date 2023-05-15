import React, { useState, ChangeEvent } from 'react';
import InputRhude from './components/input/InputRhude';

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
      <InputRhude
        className="test"
        type="text"
        name="test"
        placeholder="Enter here"
      />
      <InputRhude
        className="app"
        type="password"
        name="pass"
        placeholder="Enter here"
      />
    </>
  );
}

export default Count;
