import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
// import Hero from '../components/Hero';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
// import SocialNetworkIcons from '../components/SocialMedia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { graphql, useStaticQuery } from "gatsby"
// import { getImage } from "gatsby-plugin-image"
// import {  } from "gbimage-bridge";

library.add(faFacebookF);
library.add(faWhatsapp);

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Asesoramiento Legal Personalizado
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Nuestro compromiso <br /> Satisfacción, Tranquilidad y Confianza
          </p>
          <p className="text-xl lg:text-2xl mt-6 font-light"></p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Contáctanos</Button>
          </p>
          {/* <p className="mt-4 text-gray-600">Nuestro personal estará feliz de atenderlo</p> */}
        </div>
        <div className="lg:w-1/2">{/* <HeroImage /> */}</div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Nuestros Servicios</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Derecho Corporativo</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Derecho Laboral</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Seguridad Social</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Derecho Civil</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Patrocinio de Causas</p>
              <p className="mt-4">
                En materia civil, laboral, familiar y administrativa.
                <br />
                <br />
                <br />
                <br />
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Tramites en General</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Asesoramiento empresarial</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Asesoramiento Legal Tributario</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">
                Constitución de empresas extranjeras en Bolivia
              </p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <SplitSection
      id="about"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Quienes Somos?</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            VI-LEGAL es un equipo de abogados que obtiene el mejor resultado para tí, defendiendo
            tus intereses, acompañándote en todo momento, manteniéndote informado oportunamente
            sobre el desarrollo del caso y absolviendo todas tus consultas.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Como Trabajamos?</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Hacemos un análisis previo y profundo del caso, expresándole al cliente las
            posibilidades de éxito antes del inicio de acciones o, en su caso, ingresar a una
            negociación o conciliación con su contraparte a fin de evitar mayor perjuicio a sus
            intereses.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Nuestros Resultados</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Con nuestro asesoramiento, las empresas comerciales, ong’s internacionales, fundaciones
            nacionales e internacionales, reducen sustancialmente sus conflictos y riesgos en todos
            los campos en los que se desarrolla. Atendemos gratuitamente a personas de escasos
            recursos, porque nos interesa proteger a todo aquel que acuda y confíe en nosotros.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="socialmedia" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Encuentranos en nuestras Redes Sociales</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} size="5x" color="#4199E1" />
            <StatsBox secondaryText="Facebook" />
          </div>
          <div className="w-full sm:w-1/3">
            <FontAwesomeIcon icon={['fab', 'fa-whatsapp-f']} size="5x" color="#4199E1" />
            <StatsBox secondaryText="WhatsApp" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox secondaryText="Instagram" />
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">¿Necesitas asesoramiento legal?</h3>
      <p className="mt-8 text-xl font-light">
        No dudes en contactarnos. Nuestro equipo legal esta listo para guiarte.
      </p>
      <p className="mt-8">
        <Button size="xl">Contáctanos</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
