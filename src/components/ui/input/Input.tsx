import React from 'react';

type Props = {
  title: string;
};

function Input(props: Props) {
  const { title } = props;
  return <div> {title} </div>;
}

export default Input;
