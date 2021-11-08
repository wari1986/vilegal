import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const LogoIcon = () => (
  <StaticImage
    viewBox="0 0 48 48"
    src="../images/logovilegal.jpeg"
    // width={100}
    // height={100}
    alt="logo"
    placeholder="logo"
  />
);

export default LogoIcon;
