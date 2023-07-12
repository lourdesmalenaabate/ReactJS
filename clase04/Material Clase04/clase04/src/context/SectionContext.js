import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "css",
    titulo: "Estilos CSS",
    texto:
      "A la hora de aplicar Estilos CSS a nuestras App podemos elegir entrea varias opciones que no son excluyentes una de otra. Es importante no olvidar que estamos trabajando con JSX y no con HTML por lo que el atributo para aplicar clases CSS es 'className'",
    images: [],
    doc: "",
    secundarios: [
      {
        id: "generales",
        titulo: "Hoja de Estilos Única",
        texto:
          "Cuando trabajamos en proyectos de HTML y CSS es muy común tener un sólo archivo CSS con todos los estilos que vamos a aplicar a nuestro HTML. En React podemos trabajar de esta misma forma aprovechando el archivo index.css que se crea con create-react-app. Este archivo se importa en el componente index.js que es el que maneja el renderizado de nuestra app y, gracias a webpack, todos los estilos aplicados pasan a nuestro build sin necesidad de mayor configuración",
        images: ["assets/images/generales.png"],
        doc: "",
      },
      {
        id: "especificos",
        titulo: "Específicos para un componente",
        texto:
          "Teniendo en cuenta que la filosofía de React es la creación de componentes reutilizables, la aplicación de Estilos generales a todo el proyecto no siempre puede ser conveniente. En esos casos tenemos la posibilidad de crear Hojas de Estilo específicas para cada componente creado, para ello simplemente creamos un nuevo archivo CSS (por cenvención lo nombramos de la misma forma que al componente al que corresponde) en la misma carpeta que nuestro archivo JS y, en este, hacemos la importación correspondiente.",
        images: [
          "assets/images/componentes1.png",
          "assets/images/componentes2.png",
        ],
        doc: "",
      },
      {
        id: "inline",
        titulo: "Estilos en línea",
        texto:
          "Al igual que en HTML, cuando trabajamos con componentes JSX podemos aplicar Estilos en línea haciendo uso del atributo 'style'(en este caso no cambia su nombre). Cuando trabajamos con React, la utilización de Estilos en línea suele quedar reservada para aquellos casos en los que necesitamos añadir estilos calculados dinámicamente al momento de renderización. Si tenemos presente que JSX es azúcar sintáctico para trabajar con funciones JS y que al manipular el CSS desde JS estamos trabajando con el 'objeto style', entonces no es ninguna sorpresa que para pasar Estilos en línea en React debamos hacerlo mediante objetos planos",
        images: ["assets/images/linea1.png", "assets/images/linea2.png"],
        doc: "https://es.reactjs.org/docs/dom-elements.html#style",
      },
    ],
  },
  {
    id: "bootstrap",
    titulo: "Bootstrap",
    texto:
      "Bootstrap es un excelente framework CSS y React es una librería super flexible por lo que combinar estas dos herramientas es algo que probablemente querramos hacer. Vamos a ver las distintas formas en las que podríamos agregar Bootstrap a nuestros proyectos React",
    images: [],
    doc: "",
    secundarios: [
      {
        id: "cdn",
        titulo: "Mediante CDN o Archivos de Proyecto",
        texto:
          "Esta es la forma con la que más familiarizados nos encontramos ya que consiste en incorporar Bootstrapa nuestro proyecto React exactamente de la misma forma en que lo haríamos si estuvieramos trabajando con proyecto HTML, para esto lo único que tenemos que tener presente es que el único archivo en el que este método funciona es el 'index.html' que se encuentra en la carpeta public. Recordar que todos los elementos que agreguemos en esta carpeta están excentos del trabajo que hace webpack y se trabajan de forma tradicional",
        images: [],
        doc: "",
      },
      {
        id: "dependencia",
        titulo: "Como dependencia de proyecto",
        texto:
          "También podemos incorporar Bootstrap como 'Dependencia de Proyecto' (módulo necesario para que el proyecto funcione correctamente). En este caso se requiere la instalación de los módulos de Bootstrap y Poopper -dependencia de bootstrap- (npm i bootstrap @popperjs/core) y la importación de la Hoja de Estilos y el JS correspondiente a Bootstrap en el archivo 'index.js'",
        images: ["assets/images/dependencia.png"],
        doc: "",
      },
      {
        id: "react-bootstrap",
        titulo: "React Bootstrap",
        texto:
          "Dada la popularidad de Bootstrap como Framework de CSS y su constante aplicación en proyectos React empezaron a surgir proyectos que convierten los componentes clásicos que podemos encontrar en la página oficial de Bootstrap en Componentes React. Uno de estos proyectos es React-Bootstrap. Para utilizarlo alcanza con instalarlo e importar los componentes que necesitamos. En la documentación oficial nos recuerdan que necesitamos acceder a las clases de Bootstrap por lo que nos piden que nos aseguremos de incorporarlo (cualquier tipo de incorporación es válida aunque se sugiera la instalación de Bootstrap como dependencia). La instalación sugerida en la documentación oficial es: 'npm install react-bootstrap bootstrap'. Una vez instalado, sólo resta importar los Estilos CSS en el archivo 'index.js' e importar el componente deseado en cada archivo en que lo necesitemos",
        images: [],
        doc: "https://react-bootstrap.github.io/getting-started/introduction",
      },
    ],
  },
  {
    id: "material",
    titulo: "Material UI",
    texto:
      "Material UI, similiar a lo que sucede con React-Bootstrap, es el resultado de haber convertido el Framework Material de CSS en Componentes de React listos para utilizar. Para poder utililizar todo el potencial de Material UI, en su documentación oficial vamos a encontrar algunos pasos a seguir a demás de realiza la correspondiente instalación. Material UI trabaja con la tipografía Roboto por lo que hay que asegurarse de importarla lo que se puede hacer mediante CDN (agregando la etiqueta correspondiente al head del archivo index.html que se encuentra en la carpeta public) o intalandola como fuente del proyecto y realizando la correspondiente importación en el archivo en que se vaya a utiizar",
    images: [],
    doc: "https://mui.com/material-ui/getting-started/installation/",
    secundarios: [
      {
        id: "instalacion",
        titulo: "Paquetes Necesarios",
        texto: "",
        images: ["assets/images/material1.png"],
        doc: "",
        secundarios: [],
      },
      {
        id: "layout",
        titulo: "Manejo de Layout",
        texto:
          "Meterial maneja el Layout de la página usando un sistema de Grillas divido en 12 columnas",
        images: ["assets/images/layoutMaterial.png"],
        doc: "",
        secundarios: [],
      },
      {
        id: "temas",
        titulo: "Temas",
        texto:
          "Con Material podemos crear temas que se aplican a todos los Componentes para facilitar el diseño",
        images: ["assets/images/themeMaterial.png"],
        doc: "",
        secundarios: [],
      },
    ],
  },
  {
    id: "trancsicionesAnimaciones",
    titulo: "Transiciones y Animaciones",
    texto:
      "Con CSS es posible hacer que los Elementos HTML se muevan, muestren u oculten de varias formas para lo que es necesario el trabajo con Animaciones y Transiciones. Una animación permite generar movimiento en Elemento HTML; mientras que una Transición permite controlar el tiempo que cierta propiedad CSS tarda en desarrollarse generando de esa forma una sensación de movimiento",
    images: [],
    doc: "https://www.youtube.com/watch?v=DEgKTGRUGcI",
    secundarios: [
      {
        id: "transitionGroup",
        titulo: "React Transition Group",
        texto:
          "React Transition Group es una librería creada para el manejo de las transiciones de CSS en React. Escencialmente, con esta librería vamos a agregar las transiciones al Ciclo de Vida de un Componente",
        images: [
          "assets/images/componentesTransition.png",
          "assets/images/csstransition.png",
        ],
        doc: "https://reactcommunity.org/react-transition-group/",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar el renderizado de Componentes vamos a hacer una App que, mediante un JSON de datos, nos muestre en pantalla un recordatorio de las personas que cumplen años",
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
