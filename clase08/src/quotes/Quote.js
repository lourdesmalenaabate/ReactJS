import React from "react";
import Loader from "./Loader";

const Quote = ({ quote, author, loading, fetchData }) => {
  return (
    <div className="flex">
      <blockquote className="flex contenedor">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex">
            <q className="text-black">{quote}</q>
            <i className="text-black">{author}</i>
          </div>
        )}
      </blockquote>
      <button onClick={fetchData}>Change Quote</button>
    </div>
  );
};

export default Quote;
