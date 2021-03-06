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
        <AccordionSummary aria-controls="experiencia-villarroel" id="villarroel">
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
        <AccordionSummary aria-controls="practicavillarroel" id="practica-villarroel">
          <Typography>Áreas de Práctica</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Derecho civil</li>
            <li>Derecho laboral</li>
            <li>Derecho de familia </li>
            <li>Derecho administrativo </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="educacionvillarroel" id="educacion-villarroel">
          <Typography>Educación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Licenciado en Ciencias Jurídicas y Políticas - Universidad Mayor de San Simón.</li>
            <li>Diplomado en Ciencias Penales.</li>
            <li>
              Capacitador en materia civil, procesal civil, laboral, procesal laboral, familia.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
