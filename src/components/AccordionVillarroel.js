import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: '1px solid rgba(0, 0, 0, .125)'
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Experiencia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Ejercicio intensivo de la profesión de más de 24 años.</li>
              <li>
                Asesoramiento legal a empresas locales e internacionales; entre ellas, organismos
                internacionales, fundaciones, ong´s nacionales e internacionales, universidades
                privadas, entidades públicas, entidades bancarias, empresas comerciales de diverso
                giro.
              </li>
              <li>Experto en materia civil </li>
              <li>Experto en litigio en materia civil, laboral, familiar, administrativa</li>
              <li>Autor de varios estudios y análisis jurídicos </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Áreas de Práctica</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Derecho civil</li>
              <li>Derecho laboral</li>
              <li>Derecho de familia </li>
              <li>Derecho administrativo </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Educación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>Licenciado en Ciencias Jurídicas y Políticas - Universidad Mayor de San Simón.</li>
            <li>Diplomado en Ciencias Penales.</li>
            <li>
              Capacitador en materia civil, procesal civil, laboral, procesal laboral, familia.
            </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

/* import React from 'react';
import { useState } from 'react'

function AccordionComponent() {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected == i ? '-' : '+'}</span>
            </div>
            <div className="content">{item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: 'Question 1',
    answer:
      'lorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, con.',
  },
  {
    question: 'Question 2',
    answer:
      'lorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, con',
  },
];

export default AccordionComponent;
 */

/* import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'));

  return (
    <button type="button" style={{ backgroundColor: 'pink' }} onClick={decoratedOnClick} >
      { children }
    </button>
  );
}

function Example() {
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Example */

/* render(<Example />);
 */

/* import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const AccordionComponent = () => {

   return (
     <div>
       <Accordion defaultActiveKey="1">
         <Accordion.Item eventKey="1">
           <Accordion.Header>Abogado 1</Accordion.Header>
           <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim id est laborum.
           </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
           <Accordion.Header>Accordion Item #2</Accordion.Header>
           <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim id est laborum.
           </Accordion.Body>
         </Accordion.Item>
       </Accordion>
     </div>
   );
 };

 export default AccordionComponent;
 */
