import React from "react";
import "./HackerNews.css";
import { Provider } from "react-redux";
import { store } from "./store";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import Buttons from "./components/Buttons";

function HackerNews() {
  return (
    <>
      <Provider store={store}>
        <SearchForm />
        <Buttons />
        <Stories />
      </Provider>
    </>
  );
}

export default HackerNews;
