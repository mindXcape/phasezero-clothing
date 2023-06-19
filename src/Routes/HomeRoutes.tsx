import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Count from '../Count';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import CartPage from '../pages/Cartpage';
import Account from '../Layouts/Account/Account';
import CollectionPage from '../pages/CollectionPage';
import ShopAll from '../pages/ShopAll';
import Wishlist from '../pages/Wishlist';
import Checkout from '../pages/Checkout';
import { CheckoutInformation } from '../components';
import CheckoutPaymentMethod from '../components/Checkout/CheckoutPaymentMethod';
import Community from '../pages/Community';

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
      <Route path="/register" element={<Account />} />
      <Route path="/checkout" element={<Checkout />}>
        <Route path="" element={<CheckoutInformation />} />
        {/* dont remove the below commented out line maybe required later */}
        {/* <Route path="shipping" element={<CheckoutShipping />} /> */}
        <Route path="payment-method" element={<CheckoutPaymentMethod />} />
      </Route>
      <Route path="/community" element={<Community />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default HomeRoutes;
