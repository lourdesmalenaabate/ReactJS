import React from "react";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        <ProductItem />
      </article>
      <h3>Carrito</h3>
      <article>
        <button className="btn btn-danger">Limpiar Carrito</button>
        <CartItem />
      </article>
    </div>
  );
};

export default ShoppingCart;
