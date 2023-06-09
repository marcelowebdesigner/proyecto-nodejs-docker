const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');
const { body } = require('express-validator');

// Ruta: POST /library
router.post(
  '/',
  [
    // Validación de los datos enviados en el cuerpo de la solicitud
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('address').trim().notEmpty().withMessage('Address is required'),
  ],
  libraryController.createLibrary
);

module.exports = router;
