import React from 'react';
import LayoutBlog from '../../components/layout/LayoutBlog';
import { Link } from 'gatsby';
import IncreaseCounter from '../../components/IncreaseCounter';

const Article = () => {
  return (
    <LayoutBlog>
      <title>CAUSALES DE DESPIDO POR ABANDONO Y RETIRO VOLUNTARIO BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el miercoles, 17 de Enero 2014. Visitas: <IncreaseCounter value='31724d97-2349-4984-9636-57aba02c0221' />
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          CAUSALES DE DESPIDO POR ABANDONO Y RETIRO VOLUNTARIO
          <br />
          ¿CORRESPONDE BENEFICIOS SOCIALES?
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          Si bien la Resolución Ministerial No. 447 de fecha 08 de julio de 2009 establece que la
          renuncia puede ser verbal, ésta debe realizarse con el plazo de 30 días de anticipación
          por el empleado conforme señala el Art.12 de la LGT que se encuentra en plena vigencia. Si
          no da el aviso con esa anticipación se activa la multa de un mes de sueldo en contra del
          trabajador que debe ser descontada por el empleador.
          <br />
          <br />
          No es cierto que la causal de despido por inasistencia a la fuente de trabajo por más de 6
          días haya desaparecido de nuestro ordenamiento legal con la derogatoria de los incisos d)
          y f) del Art. 16 de la Ley General de Trabajo, toda vez que si bien ha sido derogado el
          inc.d) del artículo citado, esta causal ha sido restituida por el Decreto Supremo No.1592
          de 19 de abril de 1949 al señalar en su Art.7 lo siguiente:{' '}
          <em>
            “Interrumpirán la continuidad de los servicios la inasistencia o el abandono
            injustificado del trabajo cuando excedan de seis días hábiles seguidos…”
          </em>
          , precisamente por esto, es que existen abundantes Autos Supremos tanto antiguos y
          recientes que aplican el abandono de trabajo como causal de despido. Así también existen
          Sentencias Constitucionales al respecto.
          <br />
          <br />
          Los incs.d) y f) del Art.16 de la LGT, que fueron derogados por Ley de 23 de noviembre de
          1944, han sido en la práctica restituidos de la siguiente forma: El inc.d) (Abandono de
          Trabajo por más de 6 días) con el Decreto Supremo No.1592 art.7; el inc.f) (Retiro
          voluntario del trabajador), con el Decreto Supremo No.11478 de 16 de mayo de 1974, al
          establecer que cuándo un empleado se retira voluntariamente pasados los 5 años de trabajo
          continuo recibe su indemnización, entendiéndose que si se retira voluntariamente antes de
          cumplir esos 5 años no recibe la indemnización.
          <br />
          <br />
          Lo que se debe considerar ahora es, si corresponde o no el pago de beneficios sociales
          para aquellos trabajadores que se hubieran retirado voluntariamente o hubiesen abandonado
          la fuente laboral por más de 6 días hábiles de trabajo.
          <br />
          <br />
          <b>Respecto al abandono de trabajo</b>, el Decreto Supremo No.1592 de 19 de abril de 1949
          al señalar en su Art.7 que:{' '}
          <em>
            “Interrumpirán la continuidad de los servicios la inasistencia o el abandono
            injustificado del trabajo cuando excedan de seis días hábiles seguidos…”
          </em>{' '}
          solo prevé la causal de desvinculación del trabajador, pero esto no implica que no sea
          acreedor al beneficio social de indemnización, porque esta penalidad fue derogada por Ley
          de 23 de noviembre de 1944; es decir,{' '}
          <b>la causal fue restituida pero no su penalidad.</b>
          <br />
          <br />
          <b>Respecto al retiro voluntario</b>, el Decreto Supremo No.110 de 01 de mayo de 2009
          claramente señala que aquel empleado que haya cumplido más de 90 días de trabajo continuo
          tiene derecho al beneficio de indemnización aunque se retire voluntariamente, lo que
          significa que no es necesario que el trabajador cumpla 5 años de trabajo para poder
          recibir sus beneficios tal como preveía el Decreto Supremo No.11478 antes citado.
          <br />
          <br />
          En conclusión, en ambos casos corresponde el pago de indemnización siempre y cuando el
          trabajador haya trabajado más de 90 días continuos.
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
