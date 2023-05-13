import React from 'react';

type Props = {
  title: string;
};

function Button(props: Props) {
  const { title } = props;
  return <div>{title}</div>;
}

export default Button;
