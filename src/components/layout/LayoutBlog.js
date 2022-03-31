import React from 'react';
import Footer from './Footer';
import Header from './HeaderBlog';
import FooterBottom from './FooterBottom'
import Seo from '../Seo';

const LayoutBlog = ({ children }) => {
  return (
    <>
      <Header />
      <Seo title='Vi-Legal Blog de derecho y estudios juridicos'/>
        <main className="text-gray-900">{children}</main>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default LayoutBlog;
