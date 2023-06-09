const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la instancia de Sequelize

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Book.associate = (models) => {
  Book.belongsTo(models.Library, {
    foreignKey: 'libraryId',
    as: 'library',
  });
};

Book.prototype.softDelete = async function () {
  this.deletedAt = new Date();
  await this.save();
};

module.exports = Book;
