import NewArrival from '../Layouts/NewArrival/NewArrival';
import AddBanner from '../Layouts/Addbanners/Addbanner';
import Collection from '../Layouts/Collection/Collection';
import Athleisure from '../Layouts/Athleisure/Athleisure';
import Masterbanner from '../components/banner/Masterbanner';
import { carouselfinal } from '../assets';

function Home() {
  const adTexts: string[] = [
    'Buy our new product!',
    'Limited time offer! Get 10% off our new product!',
    'Our product is the best in the market!',
  ];
  return (
    <>
      <AddBanner adTexts={adTexts} />
      <Masterbanner src={carouselfinal} />
      <NewArrival />
      <Athleisure />
      <Collection />
    </>
  );
}

export default Home;
