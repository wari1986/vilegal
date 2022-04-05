import React from 'react';
import Footer from './Footer';
import Header from './HeaderBlog';
import FooterBottom from './FooterBottom';

const LayoutBlog = ({ children }) => {
  return (
    <>
      <Header />
        <main className="text-gray-900">{children}</main>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default LayoutBlog;
