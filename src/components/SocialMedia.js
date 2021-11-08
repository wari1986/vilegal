import React from 'react';
import { IconContext } from 'react-icons';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => (
  <IconContext.Provider value={{ color: '#4199E1', size: '5em' }}>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <a href="https://api.whatsapp.com/send?phone=59176777577" target="_blank">
        <FaWhatsappSquare />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <FaFacebookSquare />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  </IconContext.Provider>
);

export default SocialMediaIcons;
