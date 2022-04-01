import React from 'react';
import LayoutBlog from '../../components/layout/LayoutBlog';
import { Link } from 'gatsby';
import IncreaseCounter from '../../components/IncreaseCounter';

const Article = () => {
  return (
    <LayoutBlog>
      <title>
        ¿CCORRESPONDE EL AGUINALDO PARA AQUELLOS QUE PERCIBEN SU SALARIO EN MONEDA EXTRANJERA?
        BOLIVIA
      </title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el Martes, 12 de Noviembre 2013. Visitas: <IncreaseCounter value='59a4957a-d730-4213-bd43-3e709e3e692e' />
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          ¿CORRESPONDE EL AGUINALDO PARA AQUELLOS QUE PERCIBEN SU SALARIO EN MONEDA EXTRANJERA?
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          Es muy frecuente la duda relativa a si corresponde o no pagar aguinaldo a aquellas
          personas que perciben su salario en moneda extranjera, más comúnmente dólares americanos
          en nuestro país.
          <br />
          <br />
          El Art.3.- de la Ley de 18 de diciembre de 1944 establecía que no correspondía el pago de
          aguinaldo para aquellos trabajadores que percibían su salario en moneda extranjera.
          <br />
          <br />
          Mediante Ley No. 380 de 22 de noviembre de 1950, se hace interpretación de la Ley de 18 de
          diciembre de 1944 en la que claramente se establece lo siguiente: “Interpretando la ley de
          18 de diciembre de 1944 (…) se reconoce el derecho de empleados y obreros, SIN EXCLUSIÓN,
          al aguinaldo anual…”
          <br />
          <br />
          De donde se concluye que el aguinaldo se paga también a aquellos trabajadores que perciben
          el salario en moneda extranjera.
          <br />
          <br />
        </p>
        <h3 className="text-lg mb-2 mt-12 font-semibold leading-tight">Manuel Villarroel Vargas</h3>
        <h3 className="text-lg mb-2 font-semibold leading-tight">Abogado</h3>
        <h3 className="text-lg mb-16 font-semibold leading-tight">
          Capacitador del Código Procesal Civil
        </h3>
        <Link to="/blog">
          <p className="mb-12 text-md text-left font-bold leading-relaxed">Retornar al Blog</p>
        </Link>
      </section>
    </LayoutBlog>
  );};

export default Article;
