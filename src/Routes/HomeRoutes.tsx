import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Count from '../Count';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import CollectionPage from '../pages/CollectionPage';
import ShopAll from '../pages/ShopAll';

const HomeRoutes = function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/count" element={<Count />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collections" element={<CollectionPage />} />
      <Route path="/shop" element={<ShopAll />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default HomeRoutes;
