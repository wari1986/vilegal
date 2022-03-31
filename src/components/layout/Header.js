import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import LogoIcon from '../../components/LogoIcon';

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
        <AnchorLink className="px-4" to="/#services" title="servicios asesoria legal">
          Servicios
        </AnchorLink>
        <AnchorLink className="px-4" to="/#about" title='sobre vi-legal'>
          Nosotros
        </AnchorLink>
        <Link className="px-4" to="/blog" title="blog de articulos de derecho y ciencias jurídicas">
          Blog
        </Link>
        <AnchorLink className="px-4" to="/#contact" title='contacto y redes sociales'>
          Contacto
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
