const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { body } = require('express-validator');

// Ruta: POST /book
router.post(
  '/',
  [
    // Validación de los datos enviados en el cuerpo de la solicitud
    // Agrega las validaciones necesarias para los campos del libro
  ],
  bookController.createBook
);

module.exports = router;
