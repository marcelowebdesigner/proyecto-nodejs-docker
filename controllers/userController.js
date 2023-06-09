const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const userController = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      // Verificar las credenciales del usuario
      const user = await User.findOne({ where: { username } });
      if (!user || !user.verifyPassword(password)) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      // Generar un token JWT válido
      const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor' });
    }
  },
};

module.exports = userController;