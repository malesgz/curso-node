//  Acá se crea el servidor.
// Lo que primero se hace es requerir el módulo haciendo:

// const http = require("http");

// // Despúes se guarda el servidor creado en una constante también: los servidores requieren dos parámetros son request(petición del cliente) y response(respuesta del servidor).
// // cliente = navegador.

// const server = http.createServer((req, res) => {
//   console.log("Un cliente se ha conectado");
//   //   res.end=> hace referencia a una conexión "satisfactoria" y la termina.
//   res.end("La conexión ha sido correcta");
// });

// // Con la siguiente función se le dice al servidor que se prepare para recibir conexiones: la cual recibe dos parámetros - el puerto por el cual se conecta (normalmente el 3000) y luego otra función que se ejecuta cuando el servidor esta listo para recibir las conexiones.
// server.listen(3000, () => {
//   console.log("Servidor a la espera de conexiones");
// });
