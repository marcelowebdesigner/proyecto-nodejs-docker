'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const Library = require('./models/Library');
const Book = require('./models/Book');
const User = require('./models/User');

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sincronizar modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Los modelos se han sincronizado con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });

// Iniciar el servidor
app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000.');
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;