import React from 'react';
import Footer from './Footer';
import Header from './Header';
import FooterBottom from './FooterBottom';
import Seo from '../Seo';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Seo />
        <main className="text-gray-900">{children}</main>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
