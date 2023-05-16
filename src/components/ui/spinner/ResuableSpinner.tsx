import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

/* eslint-disable react/require-default-props */

type Props = {
  variant: string;
  size?: 'sm';
  animation?: 'border' | 'grow'; // Update here
};

function ResuableSpinner({ variant, size, animation }: Props) {
  return <Spinner animation={animation} variant={variant} size={size} />;
}

export default ResuableSpinner;
