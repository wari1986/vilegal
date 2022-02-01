import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import { Link } from 'gatsby'
import IncreaseCounter from '../components/IncreaseCounter'

const Article = () => {
  return (
    <LayoutBlog>
      <title>RETIRO INDIRECTO DEL TRABAJADOR</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el miercoles, 22 de Enero 2014. Visitas: <IncreaseCounter value='1975f239-6dd0-4fab-9d98-70181f1b1f8c' />
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          RETIRO INDIRECTO DEL TRABAJADOR
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          El retiro indirecto del trabajador no solamente se produce cuando intempestivamente se
          rebaja el salario, sino también cuando se modifican sustancialmente las condiciones
          normales del trabajo, como por ejemplo, traslado del trabajador de un lugar a otro menos
          conveniente, rebaja de salario, cambio de horario de trabajo menos conveniente, pago
          impuntual del salario, etc..
          <br />
          <br />
          En el caso del traslado de lugar de trabajo, constituye retiro indirecto siempre y cuando
          no se encuentre prevista esta posibilidad en el contrato o en el Reglamento Interno de la
          Empresa.
          <br />
          <br />
          Cuando el empleador, por alguna circunstancia, pretenda rebajar el salario o cambiar las
          condiciones laborales del trabajador, tiene que darle un preaviso de 3 meses, a la
          conclusión de los cuales el trabajador decidirá si permanece en la fuente laboral o se
          retira, lo cual no constituye despido injustificado ni indirecto, según lo establecido por
          el Art. 2 del Decreto Supremo de 09 de marzo de 1937.
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
