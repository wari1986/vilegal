import React from 'react';
import { IconContext } from 'react-icons';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => (
  <IconContext.Provider value={{ color: '#4199E1', size: '3em' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a
        style={{ margin: '1em' }}
        href="https://api.whatsapp.com/send?phone=59176777577"
        target="_blank"
      >
        <FaWhatsappSquare />
      </a>
      <a
        style={{ margin: '1em' }}
        href="https://www.facebook.com/Vi-Legal-Estudio-de-Abogados-103688492120756"
        target="_blank"
      >
        <FaFacebookSquare />
      </a>
      <a style={{ margin: '1em' }} href="https://linkedin.com/" target="_blank" >
        <FaLinkedin />
      </a>
    </div>
  </IconContext.Provider>
);

export default SocialMediaIcons;
