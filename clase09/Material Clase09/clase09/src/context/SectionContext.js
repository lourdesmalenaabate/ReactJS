import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "redux",
    titulo: "Redux",
    texto:
      "Como los requisitos en aplicaciones JavaScript de una sola página se están volviendo cada vez más complicados, nuestro código, mas que nunca, debe manejar el estado. Este estado puede incluir respuestas del servidor y datos cacheados, así como datos creados localmente que todavía no fueron guardados en el servidor. El estado de las UI también se volvió más complejo, al necesitar mantener la ruta activa, el tab seleccionado, si mostrar o no un spinner, si deben mostrarse los controles de paginación o no. Esta complejidad es difícil de manejar debido a que estamos mezclando dos conceptos que son difícil de entender para la mente humana: mutaciǿn y asincronicidad. Acá es donde entra Redux. Siguiendo los pasos de Flux, CQRS y Event Sourcing, Redux intenta hacer predecibles las mutaciones del estado imponiendo ciertas restricciones en cómo y cuándo pueden realizarse las actualizaciones. Estas restricciones se reflejan en los tres principios de Redux.",
    images: [""],
    doc: "https://es.redux.js.org/",
    secundarios: [
      {
        id: "principios",
        titulo: "Tres Pincipios Redux",
        texto: "",
        images: [
          "assets/images/principios1.png",
          "assets/images/principios1-1.png",
          "assets/images/principios2.png",
          "assets/images/principios2-1.png",
          "assets/images/principios3.png",
          "assets/images/principios3-1.png",
          "assets/images/principios3-2.png",
        ],
        doc: "",
      },
      {
        id: "basicosRedux",
        titulo: "Conceptos Básicos",
        texto: "",
        images: [
          "assets/images/acciones.png",
          "assets/images/reducers.png",
          "assets/images/store.png",
        ],
        doc: "",
      },
    ],
  },
  {
    id: "useReducer",
    titulo: "useReducer",
    texto:
      "Este Hook está fuertemente influenciado por la librería Redux y, de hecho, es una excelente alternativa a la aplicación de React-Redux cuando la complejidad de nuestro State no amerita la conversión pero el useState ya nos queda chico. A menudo es preferible a useState cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior. useReducer además te permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks.",
    images: [""],
    doc: "https://es.reactjs.org/docs/hooks-reference.html#usereducer",
    secundarios: [
      {
        id: "cuandoUsarlo",
        titulo: "¿Cuándo usar useReducer?",
        texto:
          "Casos en los que convendría usar useReducer en lugar de useState:",
        images: ["assets/images/usarUseReducer.png"],
        doc: "",
      },
      {
        id: "inicializacion",
        titulo: "¿Cómo inicializar useReducer?",
        texto:
          "A continuación vemos la forma mas sencilla de iniciarlizar el State con useReducer. El primer parámetro es la función reductora que cambia el State; mientras que el segundo es el State inicial:",
        images: ["assets/images/comoUseReducer.png"],
        doc: "",
      },
      {
        id: "diferido",
        titulo: "Inicializacion del State en Diferido",
        texto:
          "También es posible, de forma opcional, agregar un tercer parámetro a nuetro useReducer para inicializar el State de forma diferida. El tercer parámetro es una función que recibirá como argumento el objeto que se encuentra en el segundo argumento de useReducer, y dentro de esta función, puedes decidir como tomar este dato y agregarlo al state final, esto quiere decir que, puedes tener este objeto más otros datos que requieras agregar al state ",
        images: ["assets/images/diferidoUseReducer.png"],
        doc: "",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar Redux vamos a crear una lista de tareas en JS Vanilla que se actualice con datos obtenidos de un formulario. Para prácticar useReducer vamos a refactorizar nuestro CRUD utilizando useReducer en lugar de useState",
    images: [],
    doc: "",
    secundarios: [],
  },
];

const SectionProvider = ({ children }) => {
  const data = { temas };
  return (
    <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
  );
};

export { SectionProvider };
export default SectionContext;
