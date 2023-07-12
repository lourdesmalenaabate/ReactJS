import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [isLogged, setIsLogged] = useState(null);

  return (
    <>
      <h2>Home</h2>
      <button
        onClick={() => setIsLogged(true)}
        className="btn btn-secondary m-4">
        Admin
      </button>
      {isLogged && <Navigate to="/admin" />}
    </>
  );
};

export default Home;
