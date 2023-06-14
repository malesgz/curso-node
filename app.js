// ¿Qué hace Express?
// Interactua con el módulo http, provee métodos y propiedades facilitando esta interactuación.
// Express se va a utilizar cuando el cliente interactue con el servidor(es por eso una dependencia de producción y no de desarrollo).

const Express = require("express");
const app = Express();

// En express se facilita la comprensión del código ya que existe un método para cada uno de los verbos de conexión que existe: GET - POST - PUT - DELETE.

app.get("/", (req, res) => {
  res.send("La conexión ha sido correcta");
});

app.listen(3000, () => {
  console.log("Servidor a la espera de conexiones");
});
