const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/CategoriaController');

// Rutas públicas
router.get('/', categoriaController.getAllCategorias);
router.get('/:id', categoriaController.getCategoriaById);

// Rutas protegidas
// TODO: Agregar middleware de autenticación
router.post('/', categoriaController.createCategoria);
router.put('/:id', categoriaController.updateCategoria);
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;