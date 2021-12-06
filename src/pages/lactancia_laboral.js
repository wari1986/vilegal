import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import { Link } from 'gatsby'

const Article = () => {
  return (
    <LayoutBlog>
      <title>LACTANCIA FUERA O DENTRO LA FUENTE LABORAL BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el miercoles, 17 de Enero 2014.
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          LACTANCIA FUERA O DENTRO LA FUENTE LABORAL
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          El Decreto Supremo No.115 de 06 de mayo de 2009, Reglamento a la Ley de Fomento a la
          Lactancia Materna y Comercialización de sus Sucedáneos, Ley No.3460 de 15 de agosto de
          2006, establece que:
          <br />
          <br />
          <em>
            <b>“Artículo 15°.-</b> (Obligaciones de las instituciones públicas y privadas) Las
            Instituciones Públicas y Privadas, tienen las siguientes obligaciones:
          </em>
          <br />
          <br />
          <em>
            a) Permitir a las madres en periodo de lactancia, llevar a sus bebés a sus fuentes de
            trabajo y de estudio, para que proporcionen lactancia materna exclusiva durante los seis
            (6) primeros meses de vida.
          </em>
          <br />
          <br />
          <em>
            b) Otorgar a las madres en periodo de lactancia, el descanso establecido en la Ley
            General del Trabajo, en caso de que éstas no lleven a sus bebés a sus centros de
            trabajo.
          </em>
          <br />
          <br />
          <em>
            c) Adecuar ambientes en los lugares de trabajo y de estudio, para que las madres con
            niños lactantes menores de seis meses puedan amamantar en condiciones óptimas.”
          </em>
          <br />
          <br />
          La Ley General del Trabajo, respecto a las madres trabajadoras, en su Art.61 señala que:
          <br />
          <br />
          <em>
            “Durante la lactancia tendrán pequeños periodos de descanso al día no inferiores en
            total a una hora.”
          </em>{' '}
          <br />
          <br />
          Entre el empleador y la trabajadora pueden convenir un periodo adecuado al día no menor a
          una hora para que de lactancia al niño, por ejemplo, salir de la fuente laboral media hora
          antes en la primera jornada y media hora al final de la jornada.
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
