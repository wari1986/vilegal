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

export default function CustomizedAccordionsTamayo() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="tamayo" id="tamayo">
          <Typography>Experiencia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                Analista Jurídico Senior y Jefatura de Oficina sede La Paz en el Registro de
                Comercio de Bolivia – Fundempresa, donde adquirió sólidos conocimientos en el área
                empresarial, en lo relativo a la organización, administración, modificación,
                reestructuración de sociedades y empresas comerciales.
              </li>
              <li>
                Realización de Due Diligence empresariales, realizando el diagnóstico, análisis y
                solución de contingencias relacionadas a la vida legal corporativa societaria.
              </li>
              <li>
                Docente de la Universidad Nuestra Señora de La Paz, en las asignaturas de Derecho
                Comercial I, Derecho Internacional Público y Derecho Administrativo.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="practica-tamayo" id="practica-tamayo">
          <Typography>Áreas de Práctica</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Derecho comercial</li>
            <li>Derecho corporativo </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="educacion-tamayo" id="educacion-tamayo">
          <Typography>Educación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <li>Licenciada en Derecho - Universidad Católica Boliviana “San Pablo” </li>
              <li>
                Maestría en Derecho Internacional Público, Privado, Diplomacia y Relaciones
                Internacionales – Universidad Católica Boliviana “San Pablo”
              </li>
              <li>Diplomado en Educación Superior - Universidad Nuestra Señora de La Paz.</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
