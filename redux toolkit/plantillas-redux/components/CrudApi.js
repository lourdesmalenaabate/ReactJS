import React, { useState } from "react";
import { useSelector } from "react-redux";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Message from "./Message";

const CrudApi = () => {
  //Almacenamiento del Store en el Componente
  const { err } = useSelector((store) => store.crud);
  const [dataToEdit, setDataToEdit] = useState(null);

  return (
    <div className="p-4">
      <h2>CRUD API</h2>
      <article>
        <CrudForm dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        {err && (
          <Message
            msg={`Error ${err.status}: ${err.statusText}`}
            bgColor="#dc3545"
          />
        )}
        <CrudTable setDataToEdit={setDataToEdit} />
      </article>
    </div>
  );
};

export default CrudApi;
