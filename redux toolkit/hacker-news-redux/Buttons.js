import React from "react";

const Buttons = () => {
  const page = 0;
  const nbPages = 10;
  return (
    <div className="btn-container">
      <button>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button>next</button>
    </div>
  );
};

export default Buttons;
