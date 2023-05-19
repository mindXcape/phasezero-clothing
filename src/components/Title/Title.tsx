import React from 'react';

interface TitleProp {
  title: string;
}

const Title = function Title({ title }: TitleProp) {
  return (
    <div className="title__container">
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
