import React from "react";
import { useFetch } from "./hooks/useFetch";
import Loader from "../components-CRUDAPI/Loader"; //Descargado de https://loading.io/css/

const VistaHook = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="p-3">
      <h2>Hook Personalizado</h2>
      {loading && <Loader />}
      {error && <h2>{error.statusText}</h2>}
      <div className="w-50 m-auto">
        {data &&
          data.map((el) => {
            return <h3>Nombre: {el.name}</h3>;
          })}
      </div>
    </div>
  );
};

export default VistaHook;
