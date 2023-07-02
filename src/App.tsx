import Navbar from 'layouts/nav/Navbar';
import HomeRoutes from 'routes/HomeRoutes';
import Footer from 'layouts/footer/Footer';
import UnderConstructionPage from 'pages/UnderConstruction/UnderConstructionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/main.scss';

export default function App() {
  return (
    <UnderConstructionPage />
    // <>
    //   <Navbar />
    //   <HomeRoutes />
    //   <Footer />
    // </>
  );
}
