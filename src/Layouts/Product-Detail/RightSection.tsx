import { useState } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import { athleisureback, athleisurefront } from '../../assets';
import BottomDrawer from '../../components/drawers/Bottom-drawer';
import '../../scss/main.scss';

function RightSection() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (buttonId: number | null) => {
    setActiveButton(buttonId);
  };
  const buttonStyle = (buttonId: number | null) => {
    if (activeButton === buttonId) {
      return { border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '5px' };
    }
    return {};
  };
  return (
    <div className="right__section__wrapper">
      <div className="title__and__price">
        <p className="product__title">SHENRON T- SHIRT</p>
        <p className="product__price text-muted">Rs. 3,495</p>
      </div>
      {/* Start of Select color section */}
      <div>
        <p>SELECT COLOUR</p>
        <div className="select__color__section">
          <img
            src={athleisureback}
            className="select__color__image"
            alt="size select"
          />
          <img
            src={athleisurefront}
            className="select__color__image"
            alt="size select"
          />
        </div>
      </div>
      {/* End of Select color section */}
      {/* Start of select size section */}
      <div className="size__section row">
        <button
          type="button"
          style={buttonStyle(1)}
          onClick={() => handleClick(1)}
          className="size__selection__button col-lg-3 text-muted"
        >
          L
        </button>
        <button
          type="button"
          style={buttonStyle(2)}
          onClick={() => handleClick(2)}
          className="size__selection__button col-lg-3 text-muted"
        >
          M
        </button>
        <button
          type="button"
          style={buttonStyle(3)}
          onClick={() => handleClick(3)}
          className="size__selection__button col-lg-3 text-muted"
        >
          XL
        </button>
      </div>
      {/* End of select size section */}
      {/* Quantity section starts */}
      <div className="quantity__wrapper">
        <p>QUANTITY</p>
        <div className="quantity__button__container">
          <button type="button" className="quantity__btn">
            -
          </button>
          <button type="button" className="quantity__btn" disabled>
            1
          </button>
          <button type="button" className="quantity__btn">
            +
          </button>
        </div>
      </div>
      {/* Quantity section ends */}
      {/* Button container add to cart and but it now */}
      <button type="button" className="add__to__cart__button">
        ADD TO CART
      </button>
      <button type="button" className="buy__it__now__button">
        BUY IT NOW
      </button>
      {/* Start of size chart section */}
      <div className="size__chart__wrapper">
        <div className="left__size__chart">
          <p className="left__size__chart__title">
            Need help in selecting your fit?
          </p>
          <p className="text-muted left__size__chart__description">
            BLUORNG helps you understand how our sizing decides your fit.
          </p>
        </div>
        <div className="right__size__chart">
          <BottomDrawer />
        </div>
      </div>
      {/* End of size chart section */}
      {/* Button container add to cart and but it now end */}
      {/* Description section starts */}
      {/* <Accordion defaultActiveKey="0" className="accordion__wrapper">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body className="accordion__body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            dolorem earum, facere dolor laudantium inventore architecto ipsam
            sapiente voluptatem ratione quasi expedita, voluptas atque, non
            tenetur tempora deserunt nostrum iste ea in! Nulla suscipit,
            repellendus dolore repellat magni itaque architecto nihil culpa
            delectus exercitationem libero sequi dolorem voluptate vel! Vitae
            eveniet illo quae neque recusandae harum voluptatum quod molestiae
            maxime exercitationem dolores praesentium autem a blanditiis magni
            possimus est eaque, accusantium beatae aliquam eum corporis totam
            quos aut. Minima enim consectetur asperiores et voluptatum
            assumenda. Ex minus qui repudiandae, itaque, nihil quae natus
            blanditiis voluptate quas cumque aliquid assumenda sequi!{' '}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Details</Accordion.Header>
          <Accordion.Body className="accordion__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            incidunt dignissimos eum possimus consequuntur tenetur, illo magnam
            similique amet nam.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
      {/* Description section ends */}
    </div>
  );
}

export default RightSection;
