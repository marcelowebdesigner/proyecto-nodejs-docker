const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_libreria', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
