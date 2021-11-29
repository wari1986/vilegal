import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import Button from './Button';

const GbiBridged = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "blog_bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 2000, height:300, webpOptions: { quality: 70 }, quality: 50)
          }
        }
      }
    `
  );

  const image = getImage(backgroundImage123);

  const bgImage = convertToBgImage(image);

  return (
    <div>
      <BackgroundImage tag="section" {...bgImage} preserveStackingContext>
        <section className="py-20 md:pt-40">
          <div className="container mx-auto px-8 lg:flex">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Blog
              </h1>
              {/* <p className="text-white text-xl lg:text-2xl mt-6 font-light">
                Nuestro compromiso <br /> Satisfacción, Tranquilidad y Confianza
              </p> */}
            </div>
            <div className="lg:w-1/2">{/* <HeroImage /> */}</div>
          </div>
        </section>
      </BackgroundImage>
    </div>
  );
};

export default GbiBridged;
