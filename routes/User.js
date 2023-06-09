const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');

// Ruta: POST /user
router.post(
  '/',
  [
    // Validación de los datos enviados en el cuerpo de la solicitud
    // Agrega las validaciones necesarias para los campos del usuario
  ],
  userController.createUser
);

module.exports = router;
