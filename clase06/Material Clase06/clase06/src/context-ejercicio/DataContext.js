import { createContext, useState } from "react";
//Simulación de API
const initialDb = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
  },
  {
    id: 3,
    name: "Draco Malfoy",
    house: "Slythering",
  },
  {
    id: 4,
    name: "Ceddric Diggory",
    house: "Hufflepuff",
  },
  {
    id: 5,
    name: "Luna Lovegood",
    house: "Ravenclaw",
  },
];

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [db, setDb] = useState(initialDb); //Carga inicial de datos
  const [dataToEdit, setDataToEdit] = useState(null); //Manejo del cambio

  const createData = (data) => {
    data.id = Date.now(); //Creación automática de ID aprovechando el método Date.now()
    setDb([...db, data]); //Utilización de operador REST para generar un nuevo objeto con todos los datos almacenados en data
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el)); //Creación de un nuevo objeto para la BD basado en el objeto actual en el que se busca modificar el elemento que corresponda.
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id); //Creación de un nuevo objeto para la BD filtrando por los elementos que cuyo id no coincida con el pasado
      setDb(newData);
    } else {
      return; //Validación para evitar que se elimene el elemento en caso de que el usuario aprete cancel en el confirm()
    }
  };

  const data = {
    db,
    createData,
    dataToEdit,
    setDataToEdit,
    updateData,
    deleteData,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
