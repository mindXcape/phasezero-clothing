/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { ImageType, images } from '../../data/images';
import CommunityModal from '../../components/ui/modal/CommunityModal';

function CommunityGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const goToPrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <div className="community__grid__wrapper">
        {images.map((item: ImageType, index: number) => (
          <button
            key={`image-${index}`}
            type="button"
            className="grid__post__item"
            onClick={() => openModal(index)}
          >
            <img
              className="community__grid__item__image"
              src={item.image}
              alt=""
            />
          </button>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <CommunityModal
          selectedImage={images[selectedImageIndex].image}
          isOpen={isModalOpen}
          onClose={closeModal}
          goToNextImage={goToNextImage}
          goToPrevImage={goToPrevImage}
        />
      )}
    </>
  );
}

export default CommunityGrid;
