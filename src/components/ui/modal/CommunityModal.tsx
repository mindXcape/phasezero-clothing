import { MouseEvent } from 'react';
import Modal from '@mui/material/Modal';
import ModalRightItems from '../../CommunityModal/ModalRightItems';

interface Props {
  selectedImage: string;
  isOpen: boolean;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
  goToNextImage: () => void;
  goToPrevImage: () => void;
}

export default function CommunityModal({
  selectedImage,
  isOpen,
  onClose,
  goToNextImage,
  goToPrevImage,
}: Props) {
  if (!isOpen || !selectedImage) {
    return null;
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal__wrapper">
          <div className="modal__image__wrapper">
            <img src={selectedImage} alt="" />
          </div>
          <div className="modal__right__item__wrapper">
            <ModalRightItems
              goToNextImage={goToNextImage}
              goToPrevImage={goToPrevImage}
              onClose={onClose}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
