import React from "react";

const CartItem = () => {
  return (
    <div className="box" style={{ borderBottom: "thin solid gray" }}>
      <img width={75} src="name" alt="name" />
      <h4>Nombre</h4>
      <h5>$100 x 1 = ${100 * 1}</h5>
      <div className="w-50 d-flex justify-content-start align-items-center">
        <button className="btn btn-warning me-2">Eliminar Uno</button>
        <button className="btn btn-danger">Eliminar Todos</button>
      </div>
    </div>
  );
};

export default CartItem;
