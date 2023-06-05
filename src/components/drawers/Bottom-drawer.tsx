/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useState, FC } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../scss/main.scss';

interface BottomDrawerProps {
  placement: any;
  name: string;
}

const BottomDrawer: FC<BottomDrawerProps> = ({ placement, name }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        className="size__chart__button"
        onClick={handleShow}
      >
        Size Chart
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={placement}
        className="offcanvas__wrapper"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-light">{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="size__chart__modal">
          <img
            src="https://cdn.shopify.com/s/files/1/0514/9494/4962/files/SIZE_GUIDE_03.png?v=1677604631"
            alt=""
            className="size__tshirt__image"
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const Example: FC = () => {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <BottomDrawer key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
};

export default Example;
