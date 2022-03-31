import React from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';

// import CustomerCard from '../components/CustomerCard';
// import customerData from '../data/customer-data';

import GbiBridged from '../components/BackgroundImageHero';
import { StaticImage } from 'gatsby-plugin-image';
import SocialMediaIcons from '../components/SocialMedia';

import CustomizedAccordions from '../components/AccordionVillarroel';
import CustomizedAccordionsAleman from '../components/AccordionAleman'
import CustomizedAccordionsTamayo from '../components/AccordionTamayo'
import CustomizedAccordionsZapana from '../components/AccordionZapana'


const Index = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Vi Legal Estudio de abogados Villarroel Vargas</title>
      <link rel="canonical" href="http://www.vi-legal.com" />
    </Helmet>
    <GbiBridged />
    <div>
      <section id="services" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Nuestros Servicios</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-2">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Derecho Civil</p>
                <ul className="mt-4 text-left">
                  <li>{'\u2022'} Contratos adecuados de todo tipo</li>
                  <li>{'\u2022'} Cobranzas judiciales</li>
                  <li>{'\u2022'} Asesoramiento en juicios de toda naturaleza</li>
                  <li>{'\u2022'} Desalojos de vivienda y locales comerciales</li>
                  <li>{'\u2022'} Recuperación de inmuebles</li>
                  <li>{'\u2022'} Demandas de cumplimiento de obligaciones</li>
                  <li>{'\u2022'} División y partición de bienes</li>
                  <li>{'\u2022'} División de herencia</li>
                  <li>{'\u2022'} Conflictos sucesorios</li>
                  <li>{'\u2022'} Defensa en todo tipo de juicios</li>
                  <li>{'\u2022'} Expertos en litigio</li>
                </ul>
                {/* <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p> */}
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Derecho Comercial</p>
                <ul className="mt-4 text-left">
                  <li>{'\u2022'} Constituciones de sociedad</li>
                  <li>
                    {'\u2022'} Constitución de empresas extranjeras hasta su legal funcionamiento,
                    así como el legal estatus migratorio de sus representantes
                  </li>
                  <li>{'\u2022'} Modificaciones de todo tipo sobre su constitución</li>
                  <li>{'\u2022'} Poderes</li>
                  <li>
                    {'\u2022'} Registros en FUNDEMPRESA (Registro de Comercio) Análisis y revisión
                    de toda la documentación legal de empresas para su oportuna regularización
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Derecho Laboral</p>
                <ul className="mt-4 text-left">
                  <li>
                    {'\u2022'} Contratos adecuados a las labores que desarrollará cada empleado,
                    sean a plazo fijo, indefinido, colectivos, eventuales.
                  </li>
                  <li>
                    {'\u2022'} Asesoramiento laboral destinado a evitar contingencias negativas por
                    contrataciones inadecuadas, despidos indebidos y pagos injustificados o
                    indebidos de beneficios sociales.
                  </li>
                  <li>
                    {'\u2022'} Reclamaciones sobre derechos y beneficios sociales en vía
                    administrativa o judicial
                  </li>
                  <li>
                    {'\u2022'} Reincorporaciones laborales en la vía administrativa o judicial
                  </li>
                  <li>{'\u2022'} Demandas de pago de beneficios sociales a favor del trabajador</li>
                  <li>
                    {'\u2022'} Defensa en demandas de beneficios sociales y otros derechos laborales
                    a favor de los empleadores cuando no corresponde al trabajador
                  </li>
                </ul>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Derecho Tributario y Penal</p>
                <p className="mt-4 text-left">
                  Trabajamos con profresionales externos de reconocido prestigio en estas áreas, de
                  esta manera proporcionando a nuestros clientes un respaldo legal integral.
                </p>
                <p className="mt-4 text-left">
                  Nuestros clientes pueden tener la certeza de recibir siempre una atención
                  especializada y oportuna.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    <SplitSection
      id="about"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">¿Quiénes somos?</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            VI-LEGAL es un equipo de abogados que obtiene el mejor resultado para sus clientes,
            defendiendo sus intereses, acompañando en todo momento, e informando oportunamente sobre
            el desarrollo del caso y absolviendo todas sus consultas.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          src="../images/quienes_somos.jpg"
          width={600}
          height={450}
          alt="quienessomos"
          placeholder="tracedSVG"
        />
      }
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">¿Cómo trabajamos?</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Hacemos un análisis previo y profundo del caso, expresando al cliente las posibilidades
            de éxito antes del inicio de acciones o en su caso, ingresar a una negociación o
            conciliación con su contraparte a fin de evitar mayor perjuicio a sus intereses.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          src="../images/como_trabajamos.jpg"
          width={600}
          height={450}
          alt="como_trabajamos"
          placeholder="tracedSVG"
        />
      }
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Nuestros resultados</h3>
          <p className=" mt-8 text-xl font-light leading-relaxed">
            Con nuestro asesoramiento, las empresas comerciales, ong’s internacionales, fundaciones
            nacionales e internacionales, reducen sustancialmente sus conflictos y riesgos en todos
            los campos en los que se desarrolla.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          src="../images/nuestros_resultados.jpg"
          width={600}
          height={450}
          alt="nuestrosresultados"
          placeholder="tracedSVG"
        />
      }
    />
    <div className="container mx-auto ">
      <LabelText className="py-8 w-full bg-blue-500 p-auto mt-16 text-3xl text-white text-center">
        Socios
      </LabelText>
    </div>
    <SplitSection
      // id="about"
      primarySlot={
        <div className="flex flex-col mx-2 justify-between lg:mx-16 md:mx-24">
          <StaticImage
            src="../images/manuelVillarroel.jpeg"
            width={500}
            height={600}
            alt="drvillaroelpic"
            placeholder="profilepic"
          />
          <LabelText className="mt-6 mb-6 text-gray-700 text-center lg:text-left">
            Dr. Victor Manuel Villarroel Vargas
          </LabelText>
        </div>
      }
      secondarySlot={<CustomizedAccordions />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="flex flex-col mx-2 justify-between lg:mx-16 md:mx-24">
          <StaticImage
            src="../images/ricardoIvanAlemanMenduiña.jpeg"
            width={500}
            height={600}
            alt="drvillaroelpic"
            placeholder="profilepic"
          />
          <LabelText className="mt-6 mb-6 text-gray-700 text-center lg:text-left">
            Dr. Ricardo Ivan Aleman Menduiña
          </LabelText>
        </div>
      }
      secondarySlot={<CustomizedAccordionsAleman />}
    />
    <SplitSection
      // id="about"
      primarySlot={
        <div className="flex flex-col mx-2 justify-between lg:mx-16 md:mx-24">
          <StaticImage
            src="../images/carolinaTamayoCampero.jpeg"
            width={500}
            height={600}
            alt="drvillaroelpic"
            placeholder="profilepic"
          />
          <LabelText className="mt-6 mb-6 text-gray-700 text-center lg:text-left">
            Dra. Carolina Tamayo Campero
          </LabelText>
        </div>
      }
      secondarySlot={<CustomizedAccordionsTamayo />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="flex flex-col mx-2 justify-between lg:mx-16 md:mx-24">
          <StaticImage
            src="../images/ashleyKatteZapanaAlejos.jpeg"
            width={500}
            height={600}
            alt="drvillaroelpic"
            placeholder="profilepic"
          />
          <LabelText className="mt-6 mb-6 text-gray-700 text-center lg:text-left">
            Dra. Katte Zapana Alejos
          </LabelText>
        </div>
      }
      secondarySlot={<CustomizedAccordionsZapana />}
    />
    <section
      id="contact"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">¿Necesita Asesoramiento Legal?</h3>
      <p className="mt-8 text-xl font-light">
        Contáctenos, nuestro equipo se encuentra listo para atenderlo.
      </p>
      <p className="mt-8">
        <a href="https://api.whatsapp.com/send?phone=59176777577" target="_blank">
          <Button size="xl">Contactar</Button>
        </a>
      </p>
    </section>
    <div style={{ marginBottom: '4em' }}></div>
    <section>
      <div className="container mx-auto">
        <LabelText className="text-gray-600 text-center">Encuéntranos en linea</LabelText>
      </div>
      <div className="mb-12 mt-4">
        <SocialMediaIcons />
      </div>
    </section>
  </Layout>
);

export default Index;
