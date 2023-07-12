//Dependencias necesarias: react-redux redux-saga @reduxjs/toolkit

import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CatsContainer from "./components/CatsContainer";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <CatsContainer />
    </Provider>
  );
};

export default App;
