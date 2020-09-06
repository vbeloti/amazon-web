import React from "react";

import "./styles.css";

interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
}

const Product: React.FC<IProduct> = ({ id, title, price, rating, image }) => {
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
            .map((_) => (
              <span role="img" aria-label="Avaliação">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button>Adicionar no carrinho</button>
    </div>
  );
};

export default Product;
