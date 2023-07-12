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
          "assets/images/principios2.png",
          "assets/images/principios3.png",
        ],
        doc: "",
      },
      {
        id: "basicosRedux",
        titulo: "Conceptos Básicos",
        texto: "",
        images: [
          "assets/images/acciones.png",
          "assets/images/creadoresAcciones.png",
          "assets/images/reducers.png",
          "assets/images/store.png",
        ],
        doc: "",
      },
    ],
  },
  {
    id: "react-redux",
    titulo: "React-Redux",
    texto:
      "React-Redux es una librería que nos permite conectar los Componentes que creamos en React con un Store de Redux. Esto significa que nuestras aplicaciones contaran con un Store (Una única fuente de la verdad) de la que obtendrán todos los datos necesarios para la renderización y al que enviaran las modificaciones pertinentes(dispatch)",
    images: [""],
    doc: "https://react-redux.js.org/",
    secundarios: [
      {
        id: "cuandoUsarlo",
        titulo: "¿Cuándo usar React-Redux?",
        texto: "Casos en los que convendría usar React-Redux:",
        images: ["assets/images/usarReactRedux.png"],
        doc: "",
      },
      {
        id: "porqueUsarlo",
        titulo: "¿Por qué usar React-Redux?",
        texto: "Motivos para usar usar React-Redux:",
        images: ["assets/images/porqueReactRedux.png"],
        doc: "",
      },
    ],
  },
  {
    id: "redux-toolkit",
    titulo: "Redux-Toolkit",
    texto:
      "Redux-Toolkit es una forma distinta de aplicar Redux dentro de React. Fue pensada por los creadores de React-Redux para optimizar y facilitar la utilización de Redux dentro de React. Instalar Redux-Toolkit agrega a nuestra app las siguientes librerías: - redux (librería central de manejo del State); - immer (permite la mutación del state); - redux-thunk (manejo de acciones asincrónicas); - reselect (simplifica la utilización de los reducers)",
    images: [""],
    doc: "https://redux-toolkit.js.org/introduction/getting-started",
    secundarios: [],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar React-Redux vamos a convertir los ejemplos que estuvimos trabajando con useReducer a React-Redux. Con React-Toolkit vamos a crear un ejercicio de carrito de compras",
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
