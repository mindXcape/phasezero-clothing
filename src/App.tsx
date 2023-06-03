// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layouts/nav/Navbar';
import HomeRoutes from './Routes/HomeRoutes';
import Footer from './Layouts/footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <HomeRoutes />
      <Footer />
    </>
  );
}
