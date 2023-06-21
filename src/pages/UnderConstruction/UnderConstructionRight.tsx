import HoverImageContainer from 'components/HoverImageContainer/HoverImageContainer';

interface UnderConstructionRightProps {
  imageTop: string;
  imageBottom: string;
  storyTitleTop: string;
  storyDescriptionOneTop: string;
  storyDescriptionTwoTop: string;
  storyTitleBottom: string;
  storyDescriptionOneBottom: string;
  storyDescriptionTwoBottom: string;
}

function UnderConstructionRight({
  imageTop,
  imageBottom,
  storyTitleTop,
  storyDescriptionOneTop,
  storyDescriptionTwoTop,
  storyTitleBottom,
  storyDescriptionOneBottom,
  storyDescriptionTwoBottom,
}: UnderConstructionRightProps) {
  return (
    <div className="under__construction__right__wrapper">
      <HoverImageContainer
        nameOfWrapperClass="hover__image__container__wrapper__two"
        image={imageTop}
        nameOfHoverClass="hover__image__second"
        storyTitle={storyTitleTop}
        storyDescriptionFirst={storyDescriptionOneTop}
        storyDescriptionSecond={storyDescriptionTwoTop}
        nameOfOverlayClass="hover__image__container__overlay__two"
        nameOfContentClass="hover__image__container__content__two"
      />
      <HoverImageContainer
        nameOfWrapperClass="hover__image__container__wrapper__one"
        image={imageBottom}
        nameOfHoverClass="hover__image__one"
        storyTitle={storyTitleBottom}
        storyDescriptionFirst={storyDescriptionOneBottom}
        storyDescriptionSecond={storyDescriptionTwoBottom}
        nameOfOverlayClass="hover__image__container__overlay__one"
        nameOfContentClass="hover__image__container__content__one"
      />
    </div>
  );
}

export default UnderConstructionRight;
