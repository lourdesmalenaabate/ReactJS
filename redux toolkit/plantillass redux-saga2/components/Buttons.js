import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const { page, nbPages } = useSelector((store) => store.news);
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
