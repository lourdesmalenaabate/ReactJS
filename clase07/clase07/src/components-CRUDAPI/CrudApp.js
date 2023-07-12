//useEffect - https://beta.reactjs.org/learn/you-might-not-need-an-effect

import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "./helpers/helpHttp";
import Loader from "./Loader";

const CrudApp = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  const url = "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter";

  useEffect(() => {
    //Mostrar el loader
    setLoading(true);
    //Traer datos con el helper
    helpHttp()
      .get("https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter")
      //Manejo de la respuesta
      .then((res) => {
        setDb(res);
        setError(null);
      })
      .catch((err) => {
        setDb(null);
        setError(err);
      })
      .finally(() => {
        //Ocultar el loader
        setLoading(false);
      });
  }, []);

  /*
    Las funciones createData, updateData, deleteData, modifican el valor de db en State lo que, en consecuencia, genera que el Componente CrudApp vuelva a renderizarse. Con el useEffect, mantenemos sincronizada la vista de los elementos almacenados en el State con los datos en la api
  */

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api
      .post(url, options)
      //Manejo de la respuesta
      .then((res) => {
        //Operador rest para crear una db
        setDb([...db, res]);
        setError(null);
      })
      .catch((err) => setError(err));
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api
      .put(endpoint, options)
      //Manejo de la respuesta
      .then(() => {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        setError(null);
      })
      .catch((err) => setError(err));
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api
        .del(endpoint, options)
        //Manejo de la respuesta
        .then(() => {
          //Creación de nuevo array eleminando el dato
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
          setError(null);
        })
        .catch((err) => setError(err));
    } else {
      return;
    }
  };

  return (
    <div className="p-2">
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && <h3>{`Error ${error.status}: ${error.statusText}`}</h3>}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApp;
