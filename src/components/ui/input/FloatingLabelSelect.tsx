import React, { useState } from 'react';
import '../../../scss/main.scss';

function FloatingLabelSelectBox() {
  const [value, setValue] = useState('');

  return (
    <div className={`floating-label-selectbox ${value ? 'filled' : ''}`}>
      <label htmlFor="mySelect">{value ? 'Select Option' : ''}</label>
      <select
        id="mySelect"
        className="select__register"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Select Option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default FloatingLabelSelectBox;
