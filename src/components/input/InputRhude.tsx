import React from 'react';
import '../../scss/main.scss';
/* eslint-disable react/require-default-props */

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className: string;
  type: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
}

export default function InputRhude({
  className,
  type,
  name,
  placeholder,
  disabled = false,
}: Props) {
  return (
    <input
      className={`base__input ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
