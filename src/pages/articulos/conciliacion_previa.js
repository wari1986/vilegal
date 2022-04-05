import React from 'react';
import LayoutBlog from '../../components/layout/LayoutBlog';
import { Link } from 'gatsby'
import IncreaseCounter from '../../components/IncreaseCounter';

const Article = () => {
  return (
    <LayoutBlog>
      <title>CONCILIACIÓN PREVIA e INTRAPROCESAL EN MATERIA CIVIL BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">Publicado el jueves, 29 de Mayo 2014. Visitas: <IncreaseCounter value='bdac3106-68ed-4128-9873-655a41bc96b0' /></p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          CONCILIACIÓN PREVIA E INTRAPROCESAL EN MATERIA CIVIL BOLIVIA
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          Es muy saludable que el nuevo Código Procesal Civil se ocupe de promover en todo momento
          la conciliación, porque nuestro pueblo y los abogados somos muy pleitistas más que
          conciliadores. Este es uno de los elementos que sobrecargan las labores de las autoridades
          judiciales porque tienen que resolver miles de causas que muchas de ellas se refieren a
          temas que fácilmente pueden ser objeto de acuerdos entre las partes a fin de evitar la
          declaración de sus derechos luego de todo un pesado juicio. Este instituto tiene que ser
          explotado al máximo, por ello considero muy acertada la importancia que el nuevo Código le
          otorga.
          <br />
          <br />
          Tipos de conciliación.- Existen dos tipos de conciliación: 1) Conciliación Previa, y 2)
          Conciliación Intraprocesal. Arts.65, 66, 67, 69 de la Ley de Organización Judicial, y
          Arts.234, 235, 236, 237 y 238 del Código Procesal Civil.
          <br />
          <br />
          Requisito indispensable para iniciar demanda ordinaria.- No se puede iniciar una demanda
          ordinaria si antes las partes no han intentado una conciliación previa, salvo algunas
          excepciones. Esta conciliación se la tiene que intentar ante un funcionario de apoyo
          judicial que se llama Conciliador. Art.87 y siguientes de la LOJ.
          <br />
          <br />
          <b>CONCILIACIÓN PREVIA.- Art.292 del CPC.</b>
          <br />
          <br />
          - Para iniciar un proceso ordinario es obligatorio intentar la conciliación previa.
          <br />
          <br />
          - Requisito para la admisión del proceso ordinario es adjuntar el acta de haber agotado la
          vía conciliatoria previa.
          <br />
          <br />
          - El Conciliador elabora un acta, lo aprueba mediante auto y luego remite el acta para
          aprobación del Juez Público en Materia Civil y Comercial.
          <br />
          <br />
          - Solo se envía para aprobación el acta de conciliación parcial o total, no el acta de
          inexistencia de conciliación.
          <br />
          <br />
          - No obstante de la conciliación previa, en el curso del juicio las partes y el Juez
          pueden promover en cualquier momento un segundo o tercer intento de conciliación
          denominado intraprocesal.
          <br />
          <br />
          Exclusiones de la conciliación previa.- Art.293 CPC.
          <br />
          <br />
          - Están excluidos de la conciliación, los procesos en que fueran parte los incapaces de
          obrar, las personas a quienes expresamente prohíbe la Ley, como por ejemplo, en procesos
          en que sea parte el Estado, delitos de corrupción, narcotráfico, que atenten contra la
          seguridad e integridad del Estado y que atenten contra la vida, integridad física,
          psicológica y sexual de las personas. (Art.67-IV LOJ). También están excluidos en trámites
          de beneficio de gratuidad, diligencias preparatorias y medidas cuatelares, en procesos
          concursales. En procesos voluntarios si se suscitare contienda, la conciliación será
          obligatoria por cuanto antes de ingresar a un proceso ordinario se debe cumplir con el
          requisito de intentar la conciliación previa. Finalmente, no es necesaria la conciliación
          previa cuando la parte demandada tuviere su domicilio en jurisdicción departamental
          distinta al lugar donde se promoverá la demanda principal o en el exterior, o cuando su
          domicilio fuera desconocido.
          <br />
          <br />
          - En los procesos ejecutivos y otros procesos monitorios no es obligatoria la conciliación
          salvo que lo solicite el demandante (Art.294)
          <br />
          <br />
          <b>PROCEDIMIENTO DE LA CONCILIACIÓN PREVIA.- Art.296.-</b>
          <br />
          <br />
          - Se hace una solicitud ante el Conciliador que no requiere de mayor fundamentación en
          derecho, simplemente expresar clara y concretamente el conflicto y la voluntad de
          conciliar con la contraparte, señalando el domicilio real de las partes.
          <br />
          <br />
          - Si la persona a quien citamos para conciliar nuestras diferencias no va a la audiencia
          el juez puede hacer una presunción simple en contra de su interés.
          <br />
          <br />
          - El domicilio real señalado por las partes en este trámite quedará subsistente hasta 6
          meses.
          <br />
          <br />
          - Si no se cumple los acuerdos conciliados, el Acta de conciliación tiene el valor de
          sentencia y valor de cosa juzgada.
          <br />
          <br />
          - La autoridad judicial que aprobó la conciliación será competente para la ejecución de
          los acuerdos arribados en el acta de conciliación.
          <br />
          <br />
          <b>CONCILIACIÓN INTRAPROCESAL.- Art.235 CPC.</b>
          <br />
          <br />
          - Es la que se realiza obligatoriamente en procesos extraordinarios bajo pena de nulidad.
          Art.234-IV CPC.
          <br />
          <br />
          - Las partes pueden solicitar la realización de otras audiencias de conciliación
          intraprocesal en cualquier estado o fase del proceso. Art.234-V CPC.
          <br />
          <br />
          La Paz, 29 de Mayo 2014.
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
