import NewArrival from 'layouts/NewArrival/NewArrival';
import AddBanner from 'layouts/Addbanners/Addbanner';
import Collection from 'layouts/Collection/Collection';
import Athleisure from 'layouts/Athleisure/Athleisure';
import Masterbanner from 'components/banner/Masterbanner';
import { bannerPic } from 'assets/Images';

function Home() {
  const adTexts: string[] = [
    'Buy our new product!',
    'Limited time offer! Get 10% off our new product!',
    'Our product is the best in the market!',
  ];
  return (
    <>
      <AddBanner adTexts={adTexts} />
      <Masterbanner src={bannerPic} />
      <NewArrival />
      <Athleisure />
      <Collection />
    </>
  );
}

export default Home;
