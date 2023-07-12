import React from "react";
import { Link } from "react-router-dom";

const ViewWrapper =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <ul className="list-unstyled w-25 d-flex justify-content-evenly">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </ul>
        <div className="p-2">
          <Component {...props} />
        </div>
      </>
    );
  };

export default ViewWrapper;
