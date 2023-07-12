import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSearch } from "../features/news/newsSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  let query = "";

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => dispatch()}
      />
    </form>
  );
};

export default SearchForm;
