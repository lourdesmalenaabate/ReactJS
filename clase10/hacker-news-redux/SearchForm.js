import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchAction } from "./actions/newsActions";

/* const SearchForm = () => {
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
}; */

const SearchForm = () => {
  const { query } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const [form, setForm] = useState(query);

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSearchAction(form));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={form}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
