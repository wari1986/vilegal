import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import { Link } from 'gatsby'

const Article = () => {
  return (
    <LayoutBlog>
      <title>INAMOVILIDAD DE TODOS LOS TRABAJADORES BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">Publicado el Jueves, 16 de Enero 2014.</p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          INAMOVILIDAD DE TODOS LOS TRABAJADORES
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          En la política laboral del Gobierno Nacional se puede identificar dos pilares
          fundamentales: Primero, lograr la mayor estabilidad laboral a través de hacer cada vez más
          difícil el despido del trabajador y eliminar la libre rescisión y contratación establecida
          en el Decreto Supremo No.21060 y; segundo, evitar la tercerización de contratos laborales
          que tienen como finalidad evadir cargas laborales para el empleador.
          <br />
          <br />
          Sin duda son dos pilares fundamentales que acertadamente se viene implementando en estos
          tiempos, de donde resulta que del análisis de las normas emitidas durante el Gobierno del
          Presidente Evo Morales no solo es inamovible la mujer embarazada, sino todos los
          trabajadores, toda vez que por disposición del Decreto Supremo No.28699, nadie puede ser
          despedido sino solo por una causa justificada establecida por el Art.16 de la Ley General
          del Trabajo y Art.9 de su Decreto Reglamentario No.224 de 23 de agosto de 1943,
          precisamente igual que a una mujer embarazada a quien por efectos de la Ley 975 y Art.5
          del D.S. No.0012 de 19 de febrero de 2009 solo se la retiraba de la fuente laboral por
          estas causales, por lo tanto, el privilegio de inamovilidad ya no solo es de la mujer
          embarazada sino de todos los trabajadores.
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
