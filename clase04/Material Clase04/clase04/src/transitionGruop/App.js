import React, { Component } from "react";

//Class Components
//import CSSTransitionEjemplo from "./components/CSSTransitionEjemplo";
//import TransitionGroup from "./components/TransitionGroupEjemplo";

//Functional Components
import CSSTransitionFunctional from "./functionalComponents/CSSTransitionFunctional";
//import TransitionGroupFunctional from "./functionalComponents/TransitionGroupFunctional";

export default class App extends Component {
  render() {
    /* return <TransitionGroup />; */
    /* return <CSSTransitionEjemplo />; */

    /*Conversión a Componente Funcional*/
    /* return <TransitionGroupFunctional />; */
    return <CSSTransitionFunctional />;
  }
}
