import React from "react";
import "./HackerNews.css";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";

function HackerNews() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
}

export default HackerNews;
