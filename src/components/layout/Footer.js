import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-8 px-3 mt-12 mb-4 text-gray-800 ">
    <div className="flex -mx-3 md:text-base sm: text-xs">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Dirección</h2>
        <a href="https://goo.gl/maps/pyZuhWkCcgt3yaYa9" target="_blank">
          <p className="mt-5">San Miguel - Calacoto, Av. Montenegro esq. Ferrecio #1294, piso 1</p>
          <p className="mt-5">La Paz – Bolivia</p>
        </a>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Teléfonos</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="tel:+591 76777577">+591 76777577 </a>
          </li>
          <li>
            <a href="tel:+591 (2)2115970">+591 (2)2115970</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">E-Mail</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="mailto:info@vi-legal.com" target="_blank">
              info@vi-legal.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
