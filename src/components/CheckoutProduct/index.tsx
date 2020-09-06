import React from "react";

import "./styles";

interface ICheckoutProduct {
  item: string;
  image: string;
  price: number;
  rating: number;
}

const CheckoutProduct: React.FC<ICheckoutProduct> = ({ item, image, price, rating }) => {
  return (
      <div className="checkourProduct">
          
      </div>
  );
};

export default CheckoutProduct;
