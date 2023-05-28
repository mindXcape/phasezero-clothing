/* eslint-disable react/require-default-props */
import React, { useState, ChangeEvent, InputHTMLAttributes } from 'react';
import '../../../scss/main.scss';

interface FloatingLabelInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  isDisabled?: boolean;
  hasType: string;
  isRequired?: boolean;
  hasPlaceholder?: string;
  hasClassname?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  onIconSecondaryClick?: () => void;
}

export default function FloatingLabelInput({
  id,
  hasType,
  isDisabled,
  isRequired,
  label,
  hasPlaceholder,
  hasClassname,
  icon,
  onIconClick,
  onIconSecondaryClick,
}: FloatingLabelInputProps) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className={`floating-label-input ${focus || value ? 'filled' : ''}`}>
      <div className="floating-label-input__field">
        <input
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          type={hasType}
          disabled={isDisabled}
          required={isRequired}
          placeholder={hasPlaceholder}
          className={hasClassname}
        />
        {icon && (
          <button
            type="button"
            className="floating-label-input__icon"
            onClick={onIconClick}
            onKeyDown={onIconSecondaryClick}
            tabIndex={0}
          >
            {icon}
          </button>
        )}
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
