import React from "react";

import "./styles.css";
import { useStateValue } from "../../context/StateProvider";

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
    const dispatch = useStateValue()[1];
    const handleRemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        });
    }
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt={`Product title`}
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <span key={index} role="img" aria-label="Avaliação">
                ⭐
              </span>
            ))}
        </div>

        <button onClick={handleRemoveFromBasket}>Remover do carrinho</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
