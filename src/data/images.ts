import {
  bigbannerimg,
  athleisurefront,
  athleisureback,
  windbreaker,
  pz_lifestyle1,
  phone_screen,
} from '../assets/index';

export interface ImageType {
  image: string;
}

export const images: ImageType[] = [
  {
    image: bigbannerimg,
  },
  {
    image: `${athleisurefront}`,
  },
  {
    image: `${athleisureback}`,
  },
  {
    image: `${athleisurefront}`,
  },
  {
    image: `${windbreaker}`,
  },
  {
    image: `${athleisureback}`,
  },
  {
    image: `${athleisurefront}`,
  },
  {
    image: `${athleisureback}`,
  },
  {
    image: `${bigbannerimg}`,
  },
];
