const funcionRenderizadora = (nombre) => {
  console.log(funcionGeneradora(nombre));
};

const funcionGeneradora = (nombre) => `Hola ${nombre}`;

funcionRenderizadora("Pepe");
funcionRenderizadora("Pepa");
funcionRenderizadora("Pepito");
