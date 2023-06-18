import React, { MouseEvent, useState } from 'react';
import { IconButton } from '@mui/material';
import {
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
  CloseIcon,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from '../../assets/CommunityModalIcons/index';
import ModalProductCard from '../Card/ModalProductCard';

interface Props {
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
  goToNextImage: () => void;
  goToPrevImage: () => void;
}

function ModalRightItems({ goToNextImage, goToPrevImage, onClose }: Props) {
  const [shopItem, setShopItem] = useState<boolean>(true);

  return (
    <div className="modal__right__items__wrapper">
      <div className="navigate__modal__item">
        <div className="navigate__left__right">
          <IconButton onClick={goToPrevImage}>
            <ArrowBackIosIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton onClick={goToNextImage}>
            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </div>
        <IconButton onClick={onClose}>
          <CloseIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </div>
      {shopItem && (
        <div className="modal__product__card__component">
          <ModalProductCard />
          <ModalProductCard />
        </div>
      )}
      <div className="modal__image__description">
        <p>
          The instantly sold out Initial Collection has now restocked online
          globally. #uniform
        </p>
      </div>
      <div className="modal__image__source">
        <p>PHAZEZEROCLO // INSTAGRAM // 07 JUNE 2023</p>
      </div>
      <div className="modal__right__items__footer">
        <IconButton>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <EmailIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <PinterestIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

export default ModalRightItems;
