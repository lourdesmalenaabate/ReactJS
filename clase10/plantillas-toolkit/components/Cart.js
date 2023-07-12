import React, { useEffect } from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import Modal from "./Modal";
import { calculateTotals, setCartItems } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://course-api.com/react-useReducer-cart-project"
      );
      const data = await response.json();
      dispatch(setCartItems(data));
    })();
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default Cart;
