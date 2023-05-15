import React from 'react';
import '../../scss/components/_button.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className: string;
  title: string;
  disabled: boolean;
  eventHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = function Button({
  className,
  title,
  disabled,
  eventHandler,
}: Props) {
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
