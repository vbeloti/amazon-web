import React from "react";
import CurrencyFormat from "react-currency-format";

import "./styles.css";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";

const Subtotal: React.FC = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Este pedido contém um presente
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R$"}
      />
      <button>Fechar pedido</button>
    </div>
  );
};

export default Subtotal;
