import { CloseIcon } from 'assets/icons';

interface CartProps {
  image: string;
  product_title: string;
  quantity: number;
  price: number;
}

function CartTable({ image, product_title, quantity, price }: CartProps) {
  return (
    <div className="cart__table__container">
      <div className="cart__table__image__wrapper">
        <img src={image} alt="" />
      </div>
      <div className="cart__table__content">
        <p className="cart__table__product__title">{product_title}</p>
        <div className="cart__table__quantity">
          <button type="button">-</button>
          <p>{quantity}</p>
          <button type="button">+ </button>
        </div>
      </div>
      <div className="cart__table__last">
        <p className="cart__table__close">
          <CloseIcon />
        </p>
        <p className="cart__table__price">Rs {price} /-</p>
      </div>
    </div>
  );
}

export default CartTable;
