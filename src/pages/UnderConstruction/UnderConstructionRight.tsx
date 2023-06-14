interface UnderConstructionRightProps {
  imageTop: string;
  imageBottom: string;
}

function UnderConstructionRight({
  imageTop,
  imageBottom,
}: UnderConstructionRightProps) {
  return (
    <div className="under__construction__right__wrapper">
      <div className="under__construction__right__top">
        <img src={imageTop} alt="" />
      </div>
      <div className="under__construction__right__bottom">
        <img src={imageBottom} alt="" />
      </div>
    </div>
  );
}

export default UnderConstructionRight;
