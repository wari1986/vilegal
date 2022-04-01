import React from 'react';
import LayoutBlog from '../../components/layout/LayoutBlog';
import { Link } from 'gatsby';
import IncreaseCounter from '../../components/IncreaseCounter';

const Article = () => {
  return (
    <LayoutBlog>
      <title>CONTRIBUCIONES AL SEGURO SOCIAL OBLIGATORIO BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el lunes, 21 de Abril 2014. Visitas:{' '}
          <IncreaseCounter value="67e63e78-a1b0-4592-b5d9-413ceae47f4b" />
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          CONTRIBUCIONES AL SEGURO SOCIAL OBLIGATORIO
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          <b>CONTRIBUCIONES A CARGO DEL EMPLEADOR</b>
          <br />
          <br />
          El empleador debe aportar obligatoriamente por los siguientes conceptos:
          <br />
          <br />
          • Aporte al SSO a Corto Plazo: 10%
          <br />
          <br />
          • Aporte pro vivienda: 2%
          <br />
          <br />
          • Aporte Prima de Riesgo Profesional Largo Plazo: 1.71%
          <br />
          <br />
          • Aporte Patronal Solidario: 3%
          <br />
          <br />
          Total: 16,71%, porcentaje que se calcula sobre el total del sueldo del trabajador.
          <br />
          <br />
          <b> CONTRIBUCIÓN A CARGO DEL TRABAJADOR</b>
          <br />
          <br />
          • Aporte SSO a Largo Plazo (Invalidez, Vejez y Muerte): 10%
          <br />
          <br />
          • Prima Riesgo Común: 1.71%
          <br />
          <br />
          • Aporte Solidario del Asegurado: 0.5%
          <br />
          <br />
          • Comisión a la Administradora de Fondos de Pensiones: 0.5%
          <br />
          <br />
          Total: 12,71%, que se calcula sobre la base del total ganado.
          <br />
          <br />
          También existe un aporte nacional solidario en caso que el trabajador perciba una
          remuneración superior a Bs. 13.000.- de acuerdo a la siguiente tabla:
          <br />
          <br />
          • Entre Bs. 13.000 y Bs. 25.000: 1%
          <br />
          <br />
          • Entre Bs. 25.000 y Bs. 35.000: 5%
          <br />
          <br />
          • Más de Bs. 35.000: 10%
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
  );
};

export default Article;
