import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlePage } from "../features/news/newsSlice";

const Buttons = () => {
  const { page, nbPages } = useSelector((store) => store.news);
  const dispatch = useDispatch();

  return (
    <div className="btn-container">
      <button onClick={() => dispatch(handlePage("dec"))}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => dispatch(handlePage("inc"))}>next</button>
    </div>
  );
};

export default Buttons;
