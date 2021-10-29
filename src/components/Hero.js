import React from 'react';
import bgImage from '../../public/static/vilegalbg.jpg';
import Button from '../components/Button';


// const HeroImage => () {
//   return (
//     <div styles={{ backgroundImage: `url(${bgImage})` }}>
//     </div>
//   );
// }

// export default HeroImage;

export default function Hero() {
  return (
    <div
      styles={{
        backgroundImage: `url("https://unsplash.com/photos/zeH-ljawHtg")`,
      }}
    >
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Al Servicio de las Familias Bolivianas
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Nuestro compromiso <br /> Satisfacción, Tranquilidad y Confianza
            </p>
            <p className="text-xl lg:text-2xl mt-6 font-light"></p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">Contáctanos</Button>
            </p>
            {/* <p className="mt-4 text-gray-600">Nuestro personal estará feliz de atenderlo</p> */}
          </div>
          <div className="lg:w-1/2"></div>
        </div>
      </section>
    </div>
  );
}
