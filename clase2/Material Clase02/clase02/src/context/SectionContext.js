import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "componentes",
    titulo: "Componentes",
    texto:
      "Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer en la pantalla. Todo lo que vamos a estar mostrando en pantalla son Componentes. Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada. Para lograr esto son fundamentales dos conceptos fundantes de React: el State y las Props. En React existen dos tipos de Componentes: los Componentes de Clase y los Componentes Funcionales. Históricamente sólo los Componentes de Clase eran capaces de contener State, pero a partir de la versión 16.8 con la aparación de los Hooks es posible manejar State en Componentes Funcionales.",
    images: [
      "assets/images/componenteClase.png",
      "assets/images/componenteFuncional.png",
    ],
    doc: "",
    secundarios: [
      {
        id: "props",
        titulo: "Props",
        texto:
          "Las Props son valores que los Componentes reciben para poder trabajar (equivale a argumento de función). React es bastante flexible pero tiene una sola regla estricta: 'Todos los componentes de React deben actuar como funciones puras con respecto a sus props'. Esto significa que sin importar que estemos trabajando con Componentes de Clase o Funcionales, estos nunca deben modificar sus Props.",
        images: [
          "assets/images/propClase.png",
          "assets/images/propFuncional.png",
        ],
        doc: "",
      },
      {
        id: "state",
        titulo: "State",
        texto:
          "El State (Estado) es un objeto especial que es acccesible y visible sólo desde el Componente en que fue declarado. Ningún Componente es capaz de conocer si otro Componente tiene State, pero todos los Componentes son capaces de compartir su State mediante props. Sabiendo esto, y recordando que en React los datos fluyen de forma unidimensional de arriba hacia abajo, el Componente Padre es el que tendrá State y el Componente Hijo es el que recibirá el dato del State mediante Prop. Algo que hay que tener muy presente es que el único tipo de Componente capaz de contener el objeto especial State es el Componente de Clase",
        images: ["assets/images/stateClase.png"],
        doc: "",
      },
      {
        id: "useState",
        titulo: "Hook useState",
        texto:
          "La versión 16.8 de React introdujo el concepto de Hook. Un Hook es una función especial que permite “conectarse” a características de React. Por ejemplo, useState es un Hook que te permite añadir el estado de React a un componente de función. ¿Qué hace la llamada a useState? Declara una “variable de estado”. ¿Qué pasamos a useState como argumento? El único argumento para el Hook useState() es el estado inicial. Al contrario que en las clases, el estado no tiene por qué ser un objeto. ¿Qué devuelve useState? Devuelve una pareja de valores: el estado actual y una función que lo actualiza.",
        images: ["assets/images/useState.png"],
        doc: "https://es.reactjs.org/docs/hooks-state.html",
      },
    ],
  },
  {
    id: "eventos",
    titulo: "Eventos en React",
    texto:
      "En React se pueden clasificar a los eventos en tres grupos: Los Nativos; Los Sintéticos y Los Personalizados.",
    images: [],
    doc: "https://es.reactjs.org/docs/handling-events.html#gatsby-focus-wrapper",
    secundarios: [
      {
        id: "nativos",
        titulo: "Nativos",
        texto:
          "Los eventos Nativos son los que corresponden a JavaScript Vanilla. Hay que recordar que todos los Eventos de JS dependen de las especificaciones de los distintos navegadores para realizar sus funciones o incluso existir en determinado navegador. Desde React, entonces, es posible acceder a ellos para lo cual necesitamos acceder a la propiedad nativeEvent del Objeto Event.",
        images: [],
        doc: "",
      },
      {
        id: "sinteticos",
        titulo: "Sintéticos",
        texto:
          "Los Eventos Sintéticos son los que estaremos utilizando habitualmente en React. Un Evento Sintético(SyntethicEvent) es un objeto creado para 'envolver' los Eventos Nativos con el objetivo de standarizar la utilización de los mismos en los distintos navegadores. La utilización de los Eventos Sintéticos, entonces, implica el cambio en algunas reglas de uso de Eventos entre las que se encuentran que los nombres se escriben en camelCase y la imposibilidad de evitar la propagación o el compotamiento por defecto devolviendo un false.",
        images: [
          "assets/images/eventosClases.png",
          "assets/images/eventosFuncionales.png",
        ],
        doc: "https://es.reactjs.org/docs/events.html",
      },
      {
        id: "personalizados",
        titulo: "Personalizados",
        texto:
          "Cuando trabajamos con Eventos sobre elementos JSX el manejo de los eventos es similiar al del manejo de eventos desde HTML. Ahora bien, si nosotros quisieramos agregar un evento a un Componente aplicarlo como 'atributo' no funciona. Para poder agregar un Evento a un Componente, necesitamos creaar una prop que contenga la función manejadora y, dentro del componente, usar esa prop como argumento del evento deseado. Este proceso es lo que se conoce como Evento Personalizado",
        images: [
          "assets/images/eventosClases1.png",
          "assets/images/eventosFuncionales1.png",
        ],
        doc: "",
      },
    ],
  },
  {
    id: "comunicacion",
    titulo: "Comunicación entre Componentes",
    texto:
      "React está pensado para trabajar de forma reactiva, esto significa que la interacción del usuario con la aplicación genera que los Componentes se modifiquen y, por tanto, se genere una nueva renderización. Para lograr esto, es fundamental que los Componentes logren comunicarse entre ellos. En React, la comunicación entre Componentes se puede manejar de tres formas: 'De Componente Padre a Componente Hijo', 'De Componnente Hijo a Componente Padre' y 'Entre Componentes No Relacionados'",
    images: [],
    doc: "",
    secundarios: [
      {
        id: "padreHijo",
        titulo: "De Componente Padre a Componente Hijo",
        texto:
          "La comunicación de Componente Padre a Componente Hijo es la más fácil e intuitiva a la hora de trabajar con React ya que se logra pasando valores desde el Componente Padre hacia el Componente Hijo mediante el uso de las Props. Recordar que haciendo uso de las props podemos pasar cualquier tipo de dato válido en JS",
        images: [],
        doc: "",
      },
      {
        id: "hijoPadre",
        titulo: "De Componente Hijo a Componente Padre",
        texto:
          "La comunicación de Componente Hijo a Componente Padre presenta un desafío inicial que implica analizar cómo distribuir los datos entre los Componentes. Una forma sensilla de encarar este punto es pensar a los Componentes Padre como aquellos en los que vamos a poener toda la lógica de programación y a los Componentes Hijo como los encargados de la lógica de renderizado. Una vez hecha esta división, podemos aprovechar el uso de Eventos para hacer que los Componentes Hijos cambien el State del Componente Padre lo que, a su vez, desencadena el nuevo renderizado del Componente Hijo que recibe la Prop del State del Padre.",
        images: [
          "assets/images/padreClase.png",
          "assets/images/padreFuncion.png",
        ],
        doc: "",
      },
      {
        id: "noRelacionados",
        titulo: "No Relacionados",
        texto:
          "También es posible lograr una comunicación entre Componentes no relacionados pero para ello necesitaremos implementar herramientas pensadas para ello como lo pueden ser Context API o React Redux.",
        images: [],
        doc: "",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar todo los visto hasta ahora vamos a crear una app que muestre un mensaje en pantalla y tenga tres botones. El mensaje mostrado debe cambiar con cada botón clickeado",
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
