import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import { Link } from 'gatsby'

const Article = () => {
  return (
    <LayoutBlog>
      <title>¿EXISTE TODAVÍA EL PREAVISO DE DESPIDO? BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el Jueves, 16 de Enero 2014.
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          ¿EXISTE TODAVÍA EL PREAVISO DE DESPIDO?
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          Es una pregunta muy común.
          <br />
          <br />
          Al establecerse mediante el Decreto Supremo No.28699 que nadie podrá ser despedido sino
          solo por las causales señaladas por el Art.16 de la Ley General del Trabajo y Art.9 de su
          Decreto Reglamentario No.224 y al haberse eliminado la libre rescisión y contratación
          dispuesta por el Decreto Supremo No.21060, se entiende que ya no existe el mecanismo del
          preaviso de despido; sin embargo, bajo el consejo de la lógica y el espíritu del preaviso,
          naturalmente existen causas que justifican un preaviso de despido sin que aplique la multa
          de desahucio a cumplir por el empleador o, acción de reincorporación a interponer por el
          trabajador, como por ejemplo;
          <br />
          <br />
          1.-
          <em>
            La suspensión del financiamiento otorgado por una entidad extrajera cooperante a una ONG
            o FUNDACIÓN, que ya no permitirá la ejecución de programas y proyectos para los que
            fueron contratados los trabajadores.
          </em>
          <br />
          <br />
          2.-
          <em>
            La escases de azúcar que no permite producir bombones generando la necesidad de
            prescindir de trabajadores.
          </em>
          <br />
          <br />
          3.-
          <em>
            La resolución por parte del contratante, de un contrato de provisión de chompas para
            cuyo cumplimiento el proveedor contrató personal adicional.
          </em>
          <br />
          <br />
          Consideramos que el preaviso es procedente por causas realmente justificadas aunque no
          estén estipuladas en el Art.16 de la LGT y Art. 9 del Decreto Reglamentario citado.
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
