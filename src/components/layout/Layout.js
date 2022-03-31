import React from 'react';
import Footer from './Footer';
import Header from './Header';
import FooterBottom from './FooterBottom';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main className="text-gray-900">{children}</main>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
