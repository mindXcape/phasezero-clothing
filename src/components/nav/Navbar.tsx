import React from 'react';

type Props = {
  title: string;
};

function Navbar(props: Props) {
  const { title } = props;
  return <div>{title}</div>;
}

export default Navbar;
