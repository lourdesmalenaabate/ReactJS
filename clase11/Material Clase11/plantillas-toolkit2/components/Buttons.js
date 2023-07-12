import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlePage } from "../features/news/newsSlice";

const Buttons = () => {
  const page = 0;
  const nbPages = 10;
  const dispatch = useDispatch();

  return (
    <div className="btn-container">
      <button onClick={() => dispatch()}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => dispatch()}>next</button>
    </div>
  );
};

export default Buttons;
