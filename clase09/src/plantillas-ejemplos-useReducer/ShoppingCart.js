import React, { useEffect } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import { useFetch } from "./hooks/useFetch";
import { useContext } from "react";
import ShoppingContext from "./context/ShoppingContext";
import Message from "./Message";
import Loader from "./Loader";

const ShoppingCart = () => {
  const { data, error, loading } = useFetch(
    "https://62633b22c430dc560d2cf4d6.mockapi.io/productos"
  );

  const { products, cart, setData, clearCart } = useContext(ShoppingContext);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      {loading && <Loader />}
      <article className="box grid-responsive">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))
        ) : (
          <p>Sin Productos</p>
        )}
      </article>
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <h3>Carrito</h3>
      <article>
        <button className="btn btn-danger" onClick={clearCart}>
          Limpiar Carrito
        </button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
