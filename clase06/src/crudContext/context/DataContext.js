import { createContext, useState } from "react";
//import { initialDb } from "../data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const getData = (data) => setDb(data);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    const newDb = db.map((el) => (el.id === data.id ? data : el));
    setDb(newDb);
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id "${id}"`
    );

    if (isDelete) {
      const newDb = db.filter((el) => el.id !== id);
      setDb(newDb);
    } else {
      return;
    }
  };

  const data = {
    db,
    getData,
    createData,
    updateData,
    deleteData,
    dataToEdit,
    setDataToEdit,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
