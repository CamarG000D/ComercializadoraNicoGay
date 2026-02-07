const express = require('express');
const router = express.Router();
const productoController = require('../controller/ProductoController');

// Rutas públicas (cualquiera puede acceder)
router.get('/', productoController.getAllProductos);
router.get('/search', productoController.searchProductos); // ?q=laptop
router.get('/categoria/:categoriaId', productoController.getProductosByCategoria);
router.get('/:id', productoController.getProductoById);

// Rutas protegidas (más adelante agregaremos autenticación)
// TODO: Agregar middleware de autenticación
router.post('/', productoController.createProducto);
router.put('/:id', productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);
router.delete('/:id/hard', productoController.hardDeleteProducto);

module.exports = router;