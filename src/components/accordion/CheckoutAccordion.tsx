import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box } from '@mui/material';
import PaymentComponent from '../Checkout/PaymentComponent';
import '../../scss/main.scss';

export default function CheckoutAccordion() {
  return (
    <div className='accordion__wrapper'>
      <Accordion
        sx={{
          border: 'none',
          outline: 'none',
          bgcolor: '#f5f5f5',
          outlineColor: 'none'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box display="flex" gap={2}>
            <ShoppingCartOutlinedIcon />
            <Typography>Show order summary</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <PaymentComponent />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
