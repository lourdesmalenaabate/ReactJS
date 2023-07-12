import { useContext } from "react";
import ShoppingContext from "./context/ShoppingContext";

const CartItem = ({ data }) => {
  const { delFromCart } = useContext(ShoppingContext);
  let { id, name, price, quantity, img } = data;

  return (
    <div className="box" style={{ borderBottom: "thin solid gray" }}>
      <img width={75} src={img} alt={name} />
      <h4>{name}</h4>
      <h5>
        ${price} x {quantity} = ${price * quantity}
      </h5>
      <div className="w-50 d-flex justify-content-start align-items-center">
        <button
          className="btn btn-warning me-2"
          onClick={() => delFromCart(id)}>
          Eliminar Uno
        </button>
        <button
          className="btn btn-danger"
          onClick={() => delFromCart(id, true)}>
          Eliminar Todos
        </button>
      </div>
    </div>
  );
};

export default CartItem;
