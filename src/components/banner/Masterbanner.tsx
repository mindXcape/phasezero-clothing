import Image from 'react-bootstrap/Image';

interface MasterbannerProps {
  src: string;
}

function Masterbanner({ src }: MasterbannerProps) {
  return <Image src={src} fluid />;
}

export default Masterbanner;
