//Importa la librería express: El código comienza importando el módulo express, que es una librería para construir aplicaciones web en Node.js.
const express = require('express');

const router = express.Router();
//Crea una instancia de un enrutador de Express: Luego, crea una instancia de un enrutador de Express utilizando express.Router(). Los enrutadores en Express se utilizan para gestionar rutas y lógica de enrutamiento de manera modular.

//Define una ruta GET: Con router.get('/', ...), se define una ruta para manejar solicitudes GET en la raíz del sitio web. Esto significa que cuando un usuario accede a la página principal del sitio (por ejemplo, http://localhost:300/products/), esta ruta será manejada.
router.get('/', function(req, res, next) {
    res.render('./products/products'); 
    //Renderiza una plantilla: En la función de controlador, function(req, res, next) { ... }, se llama a res.render('./products/products'). Esto indica que cuando se accede a esta ruta, se debe renderizar una plantilla llamada "products" (probablemente un archivo de vista) y enviar la página HTML resultante como respuesta al navegador del cliente.
  });

  /*
  req, res y next son parámetros comunes utilizados en las funciones de middleware. Aquí está una descripción de cada uno:

    req (Request): req es un objeto que representa la solicitud HTTP entrante realizada por un cliente (navegador, aplicación móvil, etc.). Contiene información sobre los datos enviados por el CLIENTE, como parámetros de consulta, encabezados, cookies y cualquier cuerpo de solicitud (por ejemplo, datos de formularios o JSON). Puedes acceder a esta información a través de req para tomar decisiones basadas en la solicitud del cliente.

    res (Response): res es un objeto que representa la respuesta HTTP que la aplicación Express enviará de vuelta al cliente. Puedes usar res para configurar y enviar la respuesta al cliente. Esto incluye definir encabezados de respuesta, establecer el código de estado HTTP, enviar contenido HTML o JSON y mucho más.

    next: next es una función que se utiliza para pasar el control al siguiente middleware en la pila de middleware de Express. Si tu aplicación tiene varios middlewares encadenados, llamar a next permite que el control pase al siguiente middleware. Si no necesitas pasar al siguiente middleware, simplemente no llames a next, y la ejecución se detendrá en ese middleware.

En resumen, req te proporciona información sobre la solicitud del cliente, res te permite configurar y enviar una respuesta al cliente, y next se utiliza para pasar el control al siguiente middleware. Estos son elementos esenciales para manejar solicitudes HTTP en aplicaciones Express. */

/* 


Exporta el enrutador: Al final, el enrutador se exporta para que pueda ser utilizado en la aplicación principal de Express. */
module.exports = router;
