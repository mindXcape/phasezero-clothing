import Accordion from 'react-bootstrap/Accordion';
import PaymentComponent from 'components/Checkout/PaymentComponent';
import { ShoppingCartOutlinedIcon } from 'assets/icons';

export default function CheckoutAccordion() {
  return (
    // bootstrap accodion
    <div className="accordion__wrapper">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="accordion__top__wrapper">
              <div className="accordion__top__items">
                <ShoppingCartOutlinedIcon />
                <span className="accordion__summary__title">
                  Show order summary
                </span>
              </div>
              <span className="accordion__price__title">$2,362.43</span>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <PaymentComponent />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
