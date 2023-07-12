import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, setCartItems } from "../features/cart/cartSlice";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import Modal from "./Modal";

const Cart = () => {
  const dispatch = useDispatch();

  return (
    <main>
      {/*isOpen && <Modal />*/}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default Cart;
