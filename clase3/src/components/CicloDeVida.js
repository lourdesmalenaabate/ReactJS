import React, { Component } from "react";

class Reloj extends Component {
  componentWillUnmount() {
    console.log(3, "Se elimina del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloDeVida extends Component {
  constructor(props) {
    console.log(0, "Inicialiazción");
    super(props);
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "Se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "Cambio de valores (props o state)");
  }

  titac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.titac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(4, "Se dibuja en el DOM");
    return (
      <>
        <h2>Métodos de Clico de Vida</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
