import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSearchAction } from "../actions/newsActions";

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
        onChange={(e) => dispatch(handleSearchAction(e.target.value))}
      />
    </form>
  );
};

export default SearchForm;
