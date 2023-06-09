const express = require('express');
const app = express();

// Configuración y middlewares

// Configuración de rutas
app.use('/library', require('./routes/Library'));
app.use('/book', require('./routes/Book'));
app.use('/user', require('./routes/User'));

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
