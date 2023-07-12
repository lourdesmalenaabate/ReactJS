import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: this.props.hora,
    };
  }

  componentDidMount() {
    console.log(1, "Se encuentra en el DOM");
    this.tictac();
  }

  componentWillUnmount() {
    console.log(3, "Se elimina del DOM");
    clearInterval(this.temporizador);
  }

  tictac() {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return <h3>{this.state.hora}</h3>;
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
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "Cambio de valores (props o state)");
  }

  iniciar = () => {
    this.setState({
      visible: true,
    });
  };

  detener = () => {
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
