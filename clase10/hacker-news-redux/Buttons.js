import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePageAction } from "./actions/newsActions";

const Buttons = () => {
  const { page, nbPages } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  return (
    <div className="btn-container">
      <button onClick={() => dispatch(handlePageAction("dec"))}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => dispatch(handlePageAction("inc"))}>next</button>
    </div>
  );
};

export default Buttons;
