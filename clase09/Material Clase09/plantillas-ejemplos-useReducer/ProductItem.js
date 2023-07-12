import React from "react";

const ProductItem = () => {
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>Nombre</h4>
      <img width={150} src="" alt="nombre" />
      <h5>$100</h5>
      <p>Descripción</p>
      <button className="btn btn-success">Agregar</button>
    </div>
  );
};

export default ProductItem;
