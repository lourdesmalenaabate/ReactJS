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
      {
        id: "redux-saga",
        titulo: "¿Qué es Redux-Saga?",
        texto:
          "Redux-Saga es un Middleware pensado para el manejo de la asincronía en Redux. La principal diferencia entre este y Redux-thunk es que Saga trabaja con funciones generadoras para manejar los efectos secundarios lo que implica la creación de una función que reconosca el la acció disparada (Watcher - o listener -) y una función que realize el trabajo (Wroker).",
        images: [
          "assets/images/thunk-vs-saga.png",
          "assets/images/redux-saga.png",
        ],
        doc: "https://redux-saga.js.org",
      },
    ],
  },
  {
    id: "generadora",
    titulo: "Función Generadora",
    texto:
      "A diferencia de las funciones normales, una función generadora puede ser detenida en medio de su ejecución y posteriormente retomarla desde el punto en que se detuvo mediante la ejecución del callback que proporcionan. Las funciones generadoras tienen acceso al Método next() que permite manipular la ejecución de la siguiente parte de la función Podriamos pensar a una función generadora como una función que tiene botón de pausa que nos permite indicar en qué punto queremos frenar para hacer otra cosa y después volver para continuar justo donde lo habiamos dejado. La función generadora devuelve un objeto con dos claves: 'value' y 'done'. 'Value' es el valor devuelto por la función; mientras que 'done' indica si la función ha dado por concluida su ejecución. En una función generadora también nos podemos encontrar con la palabra yield que frena la ejecución de la función hasta el siguiente llamado del Método next()",
    images: ["assets/images/generadores.png", "assets/images/generadores2.png"],
    doc: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators",
    secundarios: [],
  },
  {
    id: "typescript",
    titulo: "TypeScript",
    texto:
      "TypeScript es un lenguaje de código abierto desarrollado por Microsoft. TypeScript es un supraconjunto estricto de ECMAScript 2015 (ECMAScript 6 o ES6). Esto significa que todo el código JavaScript es también código TypeScript, por lo que un programa escrito en TypeScript puede consumir JavaScript sin problemas. Trabajar con TypeScript nos permite detectar errores en el ámbito de desarrollo.",
    images: [],
    doc: "https://www.typescriptlang.org/",
    secundarios: [
      {
        id: "caracteristicas",
        titulo: "TypeScript vs JavaScript",
        texto:
          "La característica principal de TypeScript es su sistema de tipos. En TypeScript, puede identificar el tipo de datos de una variable o un parámetro mediante una sugerencia de tipo. Mediante la comprobación de tipos estáticos, TypeScript al principio del desarrollo detecta problemas de código que JavaScript normalmente no puede detectar hasta que el código se ejecuta en el explorador. Los tipos también permiten describir lo que debe hacer el código.",
        images: ["assets/images/typescript1.png"],
        doc: "",
      },
      {
        id: "react-typescript",
        titulo: "TypeScript en React",
        texto:
          "Para trabajar con TypeScript desde React se necesita instalar el transpilador de TypeScript (en VSCode existe la extensión TypeScrip) y que nuestra app de React soporte el lenguaje: npx create-react-app my-app --template typescript (para crear una app desde cero); npm install --save typescript @types/node @types/react @types/react-dom @types/jest (para agregar typescript a una app existente)",
        images: ["https://www.typescriptlang.org/docs/handbook/react.html"],
        doc: "",
      },
    ],
  },
  {
    id: "depploy",
    titulo: "Deploy",
    texto:
      "El término Deploy es utilizado para referirnos a hacer visibles los cambios realizados en el ámbito de Desarrollo dentro del ámbito de Produción. En otras palbras, hacer un Deploy de nuestro proyecto es subirlo a internet. En esta ocación vamos a ver como podemos aprovechar GitHub y GitHub Pages para poder automatizar nuestros Deploys",
    images: ["assets/images/deploy.png"],
    doc: "",
    secundarios: [],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para practicar vamos a crear una APP que haga llamadas API usando Redux-Saga y una simple APP de Lista de Tareas con TypeScript",
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
