import { useEffect, useState } from 'react';

interface AddBannerProps {
  adTexts: string[];
}

function AddBanner({ adTexts }: AddBannerProps) {
  const [adTextIndex, setAdTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdTextIndex((currentIndex) => (currentIndex + 1) % adTexts.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [adTexts.length]);

  return (
    <div className="add__banner">
      <p className="add__description">{adTexts[adTextIndex]}</p>
    </div>
  );
}

export default AddBanner;
