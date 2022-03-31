import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../LogoIcon';
// import Button from '../Button';

const Header = () => (
  <header className="top-0 bg-white shadow z-10">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-1 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-20 mx-0">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 ">
        <Link className="px-4" to="/" title="landing page">
          Inicio
        </Link>
        <Link className="px-4" to="/blog" title='blog'>
          Blog
        </Link>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
