import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import { Link } from 'gatsby';
import IncreaseCounter from '../components/IncreaseCounter';

const Article = () => {
  return (
    <LayoutBlog>
      <title> PAGO DE INDEMNIZACIÓN A CUENTA DE LIQUIDACIÓN FINAL Y PAGO DEFINITIVO BOLIVIA</title>
      <section className="container mx-auto text-center mx-4 lg:px-48 md: px-12 ">
        <p className="text-left mt-12 mb-12 sm: text-sm">
          Publicado el Martes, 12 de Noviembre 2013. Visitas: <IncreaseCounter value='b9840e11-be95-4aaa-86de-613f0b5290e1' />
        </p>
        <h3 className="text-2xl mb-8 font-semibold leading-tight">
          PAGO DE INDEMNIZACIÓN A CUENTA DE LIQUIDACIÓN FINAL Y PAGO DEFINITIVO
        </h3>
        <p className="mt-2 text-md text-justify font-light leading-relaxed">
          ESucede que un empleado suscribió dos contratos laborales a plazo fijo por los cuales a su
          conclusión recibió su correspondiente indemnización. Posteriormente firmó el contrato
          indefinido en el que se estipuló un salario mayor a los estipulados en los anteriores
          contratos.
          <br />
          <br />
          Es muy común la duda que se genera entre empleadores y trabajadores, sobre si el pago de
          la indemnización anteriormente efectuado por los contratos a plazo fijo se reputa a cuenta
          de liquidación final o, constituye un pago definitivo.
          <br />
          <br />
          De conformidad a lo dispuesto por el Decreto Ley 16187 de 16 de febrero de 1979, en su
          Art.4,{' '}
          <em>
            “Las indemnizaciones por tiempo de servicios pagados por terminación de contratos
            suscritos a PLAZO FIJO para ocupaciones permanentes, se reputarán como anticipo de
            liquidación final, siempre que no hubiere discontinuidad alguna entre uno y otro
            contrato, considerándose como fecha original la de la primera contratación.”
          </em>
          <br />
          <br />
          Mediante Decreto Supremo No.21431 de 10 de noviembre de 1986 en su artículo único se
          aclara que las disposiciones del Decreto Ley 16187 antes citado, son de aplicación
          exclusiva a los contratos y relaciones de trabajo a{' '}
          <em>
            <u>plazo fijo …</u>
          </em>
          <br />
          <br />
          Por lo tanto, los pagos de indemnización que se realizan por trabajos a <b>plazo fijo</b>, son
          considerados A CUENTA DE LIQUIDACIÓN FINAL, y los pagos adelantados que se realizan en
          relaciones <b>indefinidas</b>, CONSTITUYEN PAGOS DEFINITIVOS.
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
