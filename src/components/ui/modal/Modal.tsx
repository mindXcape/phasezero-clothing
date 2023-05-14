import React from 'react';

type Props = {
  title: string;
};

function Modal(props: Props) {
  const { title } = props;
  return <div>{title}</div>;
}

export default Modal;
