import React, { useContext } from "react";
import ShoppingContext from "./context/ShoppingContext";

const ProductItem = ({ data }) => {
  const { addToCart } = useContext(ShoppingContext);
  const { id, name, price, img, description } = data;
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <img width={150} src={img} alt={name} />
      <h5>${price}</h5>
      <p>{description}</p>
      <button className="btn btn-success" onClick={() => addToCart(id)}>
        Agregar
      </button>
    </div>
  );
};

export default ProductItem;
