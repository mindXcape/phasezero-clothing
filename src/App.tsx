import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'layouts/nav/Navbar';
import HomeRoutes from 'routes/HomeRoutes';
import Footer from 'layouts/footer/Footer';
import 'scss/main.scss';
import UnderConstructionPage from 'pages/UnderConstruction/UnderConstructionPage';

export default function App() {
  return (
    // <UnderConstructionPage />
    <>
      <Navbar />
      <HomeRoutes />
      <Footer />
    </>
  );
}
