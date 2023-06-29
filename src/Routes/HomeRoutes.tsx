import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';
import CartPage from 'pages/Cartpage';
import CollectionPage from 'pages/CollectionPage';
import ShopAll from 'pages/ShopAll';
import Wishlist from 'pages/Wishlist';
import UnderConstructionPage from 'pages/UnderConstruction/UnderConstructionPage';
import Checkout from 'pages/Checkout';
import CheckoutPaymentMethod from 'components/Checkout/CheckoutPaymentMethod';
import Community from 'pages/Community';
import CheckoutInformation from 'components/Checkout/CheckoutInformation';
// eslint-disable-next-line import/extensions
import Count from '@/Count';

const HomeRoutes = function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/count" element={<Count />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collections" element={<CollectionPage />} />
      <Route path="/shop" element={<ShopAll />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />}>
        <Route path="" element={<CheckoutInformation />} />
        <Route path="payment-method" element={<CheckoutPaymentMethod />} />
      </Route>
      <Route path="/community" element={<Community />} />
      <Route path="/under_construction" element={<UnderConstructionPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default HomeRoutes;
