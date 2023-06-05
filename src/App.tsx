// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layouts/nav/Navbar';
import HomeRoutes from './Routes/HomeRoutes';
import Footer from './Layouts/footer/Footer';
import './scss/main.scss';

export default function App() {
  const [bgState, setBgState] = useState<boolean>(false);
  console.log(bgState);
  return (
    <>
      <Navbar backgroundState={setBgState} />
      {bgState ? (
        <div className="background__blur">
          <HomeRoutes />
        </div>
      ) : (
        <HomeRoutes />
      )}

      <Footer />
    </>
  );
}
