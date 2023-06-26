// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layouts/nav/Navbar';
import HomeRoutes from './Routes/HomeRoutes';
import Footer from './Layouts/footer/Footer';
import './scss/main.scss';
import UnderConstructionPage from './pages/UnderConstruction/UnderConstructionPage';
import DrawerProvider from './utils/Drawer/DrawerProvider';

export default function App() {
  const [bgState, setBgState] = useState<boolean>(false);
  return (
    // <UnderConstructionPage />
    <>
      <Navbar />
      <HomeRoutes />
      <Footer />
    </>
  );
}
