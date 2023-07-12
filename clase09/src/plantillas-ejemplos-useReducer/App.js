import React from "react";
import { ShoppingProvider } from "./context/ShoppingContext";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  return (
    <ShoppingProvider>
      <ShoppingCart />
    </ShoppingProvider>
  );
};

export default App;
