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
  return (
    <Suspense fallback={<LoadingState />}>
      <UnderConstructionPage />
    </Suspense>
    // <>
    //   <Navbar />
    //   <HomeRoutes />
    //   <Footer />
    // </>
  );
}
