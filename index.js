const Roteador = require('./roteador');
const Servidor = require('./servidor');

const roteador = new Roteador();

roteador.add("/", (req, res) => {
  res.end("<h1>Aoba</h1>")
})

const servidor = new Servidor(roteador);

servidor.start();