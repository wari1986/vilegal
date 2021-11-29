import React from 'react';
import Footer from './Footer';
import Header from './HeaderBlog';

const LayoutBlog = ({ children }) => {
  return (
    <>
      <Header />
        <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutBlog;
