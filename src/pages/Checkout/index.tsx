import React from "react";
import { useStateValue, IItem } from "../../context/StateProvider";
import bannerAd from "../../assets/img/banner_a.jpg";

import "./styles.css";
import CheckoutProduct from "../../components/CheckoutProduct";
import Subtotal from "../../components/Subtotal";

const Checkout: React.FC = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={bannerAd} alt="Banner" className="checkout__ad" />
        {basket?.length === 0 ? (
          <div>
            <h2>Seu carrinho da Amazon está vazio</h2>
            <p>Compre ofertas do dia</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Carrinho de compras</h2>
            {basket?.map((item: IItem, index: number) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    {basket?.length > 0 && (
        <div className="checkout__right">
            <Subtotal />
        </div>
    )}
    </div>
  );
};

export default Checkout;
