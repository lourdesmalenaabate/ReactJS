import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSearch } from "../features/news/newsSlice";

/* const SearchForm = () => {
  const { query } = useSelector((store) => store.news);
  const [form, setForm] = useState({ query });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      query: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSearch(form.query));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={form.query}
        onChange={handleChange}
      />
    </form>
  );
}; */
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
