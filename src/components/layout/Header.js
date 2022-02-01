import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
// import { Navbar, Nav } from 'react-bootstrap'
import LogoIcon from '../../components/LogoIcon';
// import Button from '../Button';

const Header = () => (
  <header className="top-0 bg-white shadow z-10">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-1 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-20 mx-0">
        <Link href='/'>
          <LogoIcon />
        </Link>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 ">
        <AnchorLink className="px-4" href="#services">
          Servicios
        </AnchorLink>
        <AnchorLink className="px-4" href="#about">
          Nosotros
        </AnchorLink>
        <Link className="px-4" href="/blog">
          Blog
        </Link>
        <AnchorLink className="px-4" href="#contact">
          Contacto
        </AnchorLink>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
