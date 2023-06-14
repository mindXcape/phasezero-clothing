interface UnderConstructionLeftProps {
  imageTop: string;
  imageBottom: string;
}

function UnderConstructionLeft({
  imageTop,
  imageBottom,
}: UnderConstructionLeftProps) {
  return (
    <div className="under__construction__left__wrapper">
      <div className="under__construction__left__top">
        <img src={imageTop} alt="" />
      </div>
      <div className="under__construction__left__bottom">
        <img src={imageBottom} alt="" />
      </div>
    </div>
  );
}

export default UnderConstructionLeft;
