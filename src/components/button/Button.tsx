/* eslint-disable react/require-default-props */
import React from 'react';
import '../../scss/main.scss';

interface ButtonProps {
  className: string;
  title: string;
  disabled?: boolean;
  eventHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = function Button({
  className,
  title,
  disabled,
  eventHandler,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={eventHandler}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
