const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la instancia de Sequelize

const Library = sequelize.define('Library', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Library.associate = (models) => {
  Library.hasMany(models.Book, {
    foreignKey: 'libraryId',
    as: 'books',
  });
};

Library.prototype.softDelete = async function () {
  this.deleted = true;
  await this.save();
};

module.exports = Library;