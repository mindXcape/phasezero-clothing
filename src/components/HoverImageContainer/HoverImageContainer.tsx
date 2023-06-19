interface HoverImageProps {
  image: string;
  nameOfWrapperClass: string;
  nameOfHoverClass: string;
  nameOfOverlayClass: string;
  nameOfContentClass: string;
  storyTitle: string;
  storyDescriptionFirst: string;
  storyDescriptionSecond: string;
}

function HoverImageContainer({
  image,
  nameOfWrapperClass,
  nameOfHoverClass,
  nameOfOverlayClass,
  nameOfContentClass,
  storyTitle,
  storyDescriptionFirst,
  storyDescriptionSecond,
}: HoverImageProps) {
  return (
    <div className={`${nameOfWrapperClass}`}>
      <img src={image} alt="story_image" className={`${nameOfHoverClass}`} />
      <div className={`${nameOfOverlayClass}`} />
      <div className={`${nameOfContentClass}`}>
        <h4>{storyTitle}</h4>
        <p>{storyDescriptionFirst}</p>
        <p>{storyDescriptionSecond}</p>
      </div>
    </div>
  );
}

export default HoverImageContainer;
