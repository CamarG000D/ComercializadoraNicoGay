const sequelize = require('../config/database.js');
const Categoria = require('./Categoria');
const Producto = require('./Producto');
require('dotenv').config();


// Relaciones
Categoria.hasMany(Producto, {
  foreignKey: 'categoriaId',
  as: 'productos'
});

Producto.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
  as: 'categoria'
});

module.exports = {
  sequelize,
  Categoria,
  Producto
};