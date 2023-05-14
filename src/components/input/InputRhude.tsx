import React from 'react';
import '../../scss/main.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className: string;
  type: string;
  name: string;
  placeholder: string;
}

export default function InputRhude({
  className,
  type,
  name,
  placeholder,
}: Props) {
  return (
    <input
      className={`base__input ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
