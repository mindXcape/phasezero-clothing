import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'Layouts/nav/Navbar';
import HomeRoutes from 'Routes/HomeRoutes';
import Footer from 'Layouts/footer/Footer';
import './scss/main.scss';
import UnderConstructionPage from './pages/UnderConstruction/UnderConstructionPage';

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
