import React, { useContext, useEffect } from "react";
import DataContext from "./context/DataContext";
import Loader from "./Loader";
import Message from "./Message";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { getData, db, error, loading } = useContext(DataContext);

  //Trae la data de la api cada vez que se monta el Componente. Cada vez que vambia un valor en el Context, el Componente vuelve a montarse lo que mantiene sincronizada la data de la vista con la de la api
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <div>
        <h3>Tabla de Datos</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Casa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {db.length > 0 ? (
              db.map((el) => <CrudTableRow key={el.id} el={el} />)
            ) : (
              <tr>
                <td colSpan="3">Sin datos</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudTable;
