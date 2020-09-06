import React from "react";

import "./styles.css";
import Product from "../../components/Product";

const Home: React.FC = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        // src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/merch/subs/benefit-id/s-z/servicelevel/heroes/asin2020/DESKTOP_TALL_HERO_1X_2707_Brazil_Service_Level_Campaign_1500X600._CB407407509_.jpg"
        src="https://images-na.ssl-images-amazon.com/images/G/32/AmazonMusic/2020/ACQ/Evergreen/030620/BR-PT_030920_March_GW_Aquisition_ACQ_GW_Hero_D_1500x600_CV1._CB434540064_.jpg"
        alt="Banner Home"
      />
      <div className="home__row">
        <Product
          id={1234}
          title="Titulo Produto"
          price={11.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
        />

        <Product
          id={1234}
          title="Titulo Produto"
          price={11.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={1234}
          title="Titulo Produto"
          price={11.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
        />

        <Product
          id={1234}
          title="Titulo Produto"
          price={11.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
        />

        <Product
          id={1234}
          title="Titulo Produto"
          price={11.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
