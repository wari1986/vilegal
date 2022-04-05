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

export default function CustomizedAccordionsZapana() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="zapana" id="zapana">
          <Typography>Experiencia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                Asesora de despacho en el Ministerio de Obras Públicas Servicios y Vivienda, así
                como en el Ministerio de Comunicación.
              </li>
              <li>Asistente legal en el Banco Mercantil Santa Cruz e Idepro IFD.</li>
              <li>Abogada en el Estudio Jurídico Vi-legal Abogados.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="practica-zapana" id="practica zapana">
          <Typography>Áreas de Práctica</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Derecho civil</li>
            <li>Derecho laboral</li>
            <li>Derecho comercial</li>
            <li>Derecho empresarial</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="educacion-zapana" id="educacion-zapana">
          <Typography>Educación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Licenciada en Derecho – Universidad Católica Boliviana "San Pablo” </li>
            <li>Diplomado en Derecho Corporativo - Universidad del Valle.</li>
            <li>
              Curso de Especialización en Negociación - Universidad Nacional Autónoma de México.
            </li>
            <li>Curso en Finanzas por la Universidad de California.</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
