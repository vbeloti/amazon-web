import React from "react";

import "./styles.css";
import Product from "../../components/Product";

const Home: React.FC = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_pt-BR_ENG_PVD5389._CB406526941_.jpg"
        alt="Banner Home"
      />
      <div className="home__products home__row">
        <Product
          id={1345}
          title="Controle Dualshock 4 - PlayStation 4 - Preto"
          price={250.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
        />

        <Product
          id={4841}
          title="Marvel’s Avengers Steelbook - PlayStation 4"
          price={268.35}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Xhkw0LYEL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={5413}
          title="Console PlayStation 4 1TB Bundle Hits 10"
          price={2600.02}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZaiMSVVoL._AC_SL1500_.jpg"
        />

        <Product
          id={59981}
          title="Console Xbox One S 1TB Edição Star Wars"
          price={2199.01}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61KM3605zpL._AC_SL1200_.jpg"
        />

        <Product
          id={15151}
          title="Efootball PES 2021 - Playstation 4"
          price={161.91}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71igCwBFE1L._AC_SL1020_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
