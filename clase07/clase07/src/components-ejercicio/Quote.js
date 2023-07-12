import React from "react";
import Loader from "./Loader";

export const Quote = ({ quote, author, loading, fetchData }) => {
  //console.log(`${loading.toString()}: ${quote}`);

  return (
    <div className="flex">
      <blockquote className="flex contenedor">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex">
            <q className="text-black">{quote}</q>
            <i>{author}</i>
          </div>
        )}
      </blockquote>
      <button onClick={fetchData}>Change Quote</button>
    </div>
  );
};
