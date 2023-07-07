import { useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from 'layouts/nav/Navbar';
import HomeRoutes from 'routes/HomeRoutes';
import Footer from 'layouts/footer/Footer';
// import UnderConstructionPage from 'pages/UnderConstruction/UnderConstructionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/main.scss';
import LoadingState from './components/Loading/LoadingState';

const UnderConstructionPage = lazy(
  () => import('pages/UnderConstruction/UnderConstructionPage')
);

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/404' && <Navbar />}
      <HomeRoutes />
      {location.pathname !== '/404' && <Footer />}
    </>
  );
}
