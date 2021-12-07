import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import { Link } from 'gatsby'

const Article = () => {
  return (
    <LayoutBlog>
      <title>PAGO DE SEGUNDO AGUINALDO BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el Miércoles, 20 de Noviembre 2013.
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">PAGO DE SEGUNDO AGUINALDO</h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          En Bolivia por Decreto Supremo No.1802 de fecha 20 de noviembre de 2013, el Gobierno
          Nacional ha dispuesto el pago a los trabajadores por parte de las entidades públicas y
          privadas de Segundo Aguinaldo denominado “Esfuerzo por Bolivia” en cada gestión fiscal,
          cuando el crecimiento anual del Producto Interno Bruto (PIB) supere el 4,5% (cuatro punto
          cinco por ciento).
          <br />
          <br />
          Este beneficio es aplicable a todos los trabajadores que presten sus servicios más de tres
          meses continuos en la entidad y siempre que su ingreso a la fuente laboral se produzca
          antes del 01 de octubre. Si el tiempo trabajado no alcanzara a los 12 meses de la gestión,
          el pago será por duodécimas.
          <br />
          <br />
          El pago de este beneficio debe realizarse hasta el 31 de diciembre, a diferencia del
          Primer Aguinaldo que debe efectivizarse hasta el 20 de diciembre.
          <br />
          <br />
          Para el pago de este beneficio debe aplicarse la normativa vigente para el Primer
          Aguinaldo, lo que significa que en caso de incumplimiento del pago en el plazo señalado,
          el empleador público o privado debe pagar el doble.
          <br />
          <br />
        </p>
        <h3 className="text-lg mb-2 mt-12 font-semibold leading-tight">Manuel Villarroel Vargas</h3>
        <h3 className="text-lg mb-2 font-semibold leading-tight">Abogado</h3>
        <h3 className="text-lg mb-16 font-semibold leading-tight">
          Capacitador del Código Procesal Civil
        </h3>
        <Link href="/blog">
          <p className="mb-12 text-md text-left font-bold leading-relaxed">Retornar al Blog</p>
        </Link>
      </section>
    </LayoutBlog>
  );};

export default Article;
