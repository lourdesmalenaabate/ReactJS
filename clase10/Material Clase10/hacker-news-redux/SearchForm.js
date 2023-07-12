import React from "react";

const SearchForm = () => {
  const query = "";
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input type="text" className="form-input" value={query} />
    </form>
  );
};

export default SearchForm;
