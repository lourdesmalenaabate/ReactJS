import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../features/news/newsSlice";

const SearchForm = () => {
  const { query } = useSelector((store) => store.news);
  const dispatch = useDispatch();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => dispatch(handleSearch(e.target.value))}
      />
    </form>
  );
};

export default SearchForm;
