import React from "react";

import "./styles.css";

interface ICheckoutProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const CheckoutProduct: React.FC<ICheckoutProduct> = ({
  id,
  title,
  image,
  price,
  rating,
}) => {
  return (
    <div className="checkoutProduct">
      <img src={image} alt={`Product title`} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
      </div>

      <p className="checkoutProduct__price">
        <small>R$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
};

export default CheckoutProduct;
