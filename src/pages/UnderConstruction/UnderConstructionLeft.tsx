import HoverImageContainer from 'components/HoverImageContainer/HoverImageContainer';

interface UnderConstructionLeftProps {
  imageTop: string;
  imageBottom: string;
  storyTitleTop: string;
  storyDescriptionOneTop: string;
  storyDescriptionTwoTop: string;
  storyTitleBottom: string;
  storyDescriptionOneBottom: string;
  storyDescriptionTwoBottom: string;
}

function UnderConstructionLeft({
  imageTop,
  imageBottom,
  storyTitleTop,
  storyDescriptionOneTop,
  storyDescriptionTwoTop,
  storyTitleBottom,
  storyDescriptionOneBottom,
  storyDescriptionTwoBottom,
}: UnderConstructionLeftProps) {
  return (
    <div className="under__construction__left__wrapper">
      <HoverImageContainer
        nameOfWrapperClass="hover__image__container__wrapper__one"
        image={imageTop}
        nameOfHoverClass="hover__image__one"
        storyTitle={storyTitleTop}
        storyDescriptionFirst={storyDescriptionOneTop}
        storyDescriptionSecond={storyDescriptionOneBottom}
        nameOfOverlayClass="hover__image__container__overlay__one"
        nameOfContentClass="hover__image__container__content__one"
      />
      <HoverImageContainer
        nameOfWrapperClass="hover__image__container__wrapper__two"
        image={imageBottom}
        nameOfHoverClass="hover__image__second"
        storyTitle={storyTitleBottom}
        storyDescriptionFirst={storyDescriptionTwoTop}
        storyDescriptionSecond={storyDescriptionTwoBottom}
        nameOfOverlayClass="hover__image__container__overlay__two"
        nameOfContentClass="hover__image__container__content__two"
      />
    </div>
  );
}

export default UnderConstructionLeft;
