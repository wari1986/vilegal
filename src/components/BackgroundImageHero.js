import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import Button from '../components/Button';


const GbiBridged = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "vilegalbg1.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 2000, webpOptions: { quality: 70 }, quality: 50)
          }
        }
      }
    `
  );

  const image = getImage(backgroundImage123);

  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage tag="section" {...bgImage} preserveStackingContext>
      <div>
        <section className="pt-20 md:pt-40">
          <div className="container mx-auto px-8 lg:flex">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Asesoramiento Legal Personalizado
              </h1>
              <p className="text-white text-xl lg:text-2xl mt-6 font-light">
                Nuestro compromiso <br /> Satisfacción, Tranquilidad y Confianza
              </p>
              <p className="text-xl lg:text-2xl mt-6 font-light"></p>
              <p className="mt-8 md:mt-12">
                <Button size="lg">Contáctanos</Button>
              </p>
              {/* <p className="mt-4 text-gray-600">Nuestro personal estará feliz de atenderlo</p> */}
            </div>
            <div className="lg:w-1/2">{/* <HeroImage /> */}</div>
          </div>
        </section>
      </div>
    </BackgroundImage>
  );
};

export default GbiBridged;
