const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

// Ruta: /user/login
router.route('/login')
  .post(passport.authenticate('local', { session: false }), userController.login);

module.exports = router;
