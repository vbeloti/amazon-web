import React, { MouseEvent } from "react";

import "./styles.css";
import { useStateValue } from "../../context/StateProvider";

interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
}

const Product: React.FC<IProduct> = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();

  const handleToBasket = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

   dispatch({
     type: 'ADD_TO_BASKET',
     item: {
       id,
       title,
       image,
       price,
       rating
     }
   });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <span key={index} role="img" aria-label="Avaliação">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={handleToBasket}>Adicionar no carrinho</button>
    </div>
  );
};

export default Product;
