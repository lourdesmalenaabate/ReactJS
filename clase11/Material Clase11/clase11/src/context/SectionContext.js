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
    id: "middlewares",
    titulo: "¿Qué es un Middleware?",
    texto:
      "Uno de los beneficios de Redux es que hace que los cambios en el estado sean predecibles y transparentes. Cada vez que se envía una acción, se calcula y se guarda el nuevo estado. El estado no puede cambiar por sí solo, sólo puede cambiar como consecuencia de una acción específica. Un middleware es una pieza de software que puede actuar entre medias de aplicaciones o de paquetes de la misma aplicación. El middleware del store de Redux, será por tanto una pieza de código (realmente una función) que actuará cuando se disparen nuevas acciones. Un middleware de Redux no es más que una función, o mejor dicho 3 funciones anidadas. La gente utiliza Redux middleware para el registro de eventos, informes de fallos, para mantener las llamadas a una API asíncrona, enrutamiento y más.",
    images: ["assets/images/middleware.png"],
    doc: "https://es.redux.js.org/docs/avanzado/middleware.html",
    secundarios: [
      {
        id: "utilizacion",
        titulo: "¿Cómo utilizarlo?",
        texto:
          "Para utilizar un Middleware es necesario incorporarlo al Store para lo cual debemos pasarlo como argumento de nuestro createStore",
        images: ["assets/images/applyMiddleware.png"],
        doc: "",
      },
      {
        id: "redux-thunk",
        titulo: "¿Qué es Redux-Thunk?",
        texto:
          "Redux-Thunk es un Middleware pensado para la ejecución de llamadas asíncronas en nuestros action creators. Normalmente, un action creator, retorna el objeto de acción que contiene el type y el payload; al utilizar Redux-Thunk va a retornar una función que se convertirá en nuestro dispatch permitiendo así que escribamos la lógica de petición asíncrona en nuestro action",
        images: ["assets/images/thunk.png"],
        doc: "https://github.com/reduxjs/redux-thunk",
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
    secundarios: [
      {
        id: "thunk-toolkit",
        titulo: "Redux-thunk en Toolkit",
        texto:
          "Dada la popularidad de este middleware los creadores de Redux-Toolkit incluyeron la instalación del mismo en el paquete y crearon una función para manejar la asincronía desde los slice",
        images: ["assets/images/createAsyncThunk.png"],
        doc: "",
      },
    ],
  },
  {
    id: "redux-devTools",
    titulo: "Redux DevTools",
    texto:
      "Las Redux DevTools son una serie de herramientas que pueden agregarse a nuestro navegador instalando la extensión correspondiente. Cuando trabajamos con React-Redux es necesario agregar el paquete redux-devtools-extension y configurar el store. Con Redux-Toolkit esto no es necesario",
    images: ["assets/images/redux-devtools.png"],
    doc: "",
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
