import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import { Link } from 'gatsby'
import IncreaseCounter from '../components/IncreaseCounter'

const Article = () => {
  return (
    <LayoutBlog>
      <title>CLASIFICACIÓN DE LOS PROCESOS CIVILES EN EL NUEVO CÓDIGO PROCESAL CIVIL BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el miercoles, 22 de Enero 2014. Visitas: <IncreaseCounter value='68270073-3431-4bff-bc13-c2501ac25f1b' />
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          CLASIFICACIÓN DE LOS PROCESOS CIVILES EN EL NUEVO CÓDIGO PROCESAL CIVIL
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          I.- Proceso Ordinario <br />
          <br />
          II.- Procesos Extraordinarios <br />
          - Desalojo de vivienda <br />- Interdicto de recobrar la posesión <br />- Interdicto de
          retener la posesión <br />- Interdicto de obra nueva perjudicial <br />- Interdicto de
          daño temido.
          <br />
          <br /> III.- Procesos Monitorios <br />- Ejecutivo <br />- Entrega de Bien <br />- Entrega
          de la Herencia <br />- Resolución de contrato por incumplimiento de la obligación de pago.
          <br />- Cese de la copropiedad <br />- Desalojo en régimen de libre contratación <br />-
          Otros expresamente señalados por Ley. <br />
          <br />
          IV.- Procesos Concursales <br />- Concurso necesario <br />- Concurso voluntario <br />
          <br />
          V.- Procesos voluntarios <br />- Aceptación de herencia <br />- Apertura, comprobación y
          publicación de testamento <br />- Aceptación de la herencia con beneficio de inventario{' '}
          <br />- Renuncia de herencia <br />- Sucesión del Estado <br />- Desaparición y presunción
          de muerte <br />- Mensura y deslinde. <br />- Oferta de pago y consignación <br />-
          Traducción de documento en idioma extranjero <br />- Inscripción, modificación,
          cancelación o fusión de partidas en el Registro de Derechos Reales, así como en otros
          registros públicos, siempre que no estén regulados por Ley especial. <br />- Otras
          señaladas por Ley.
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
