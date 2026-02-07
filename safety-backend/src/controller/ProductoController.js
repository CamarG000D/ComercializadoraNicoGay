const { Producto, Categoria } = require('../models');

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      where: { activo: true },
      include: [{
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre']
      }],
      order: [['createdAt', 'DESC']]
    });
    
    res.json({
      success: true,
      count: productos.length,
      data: productos
    });
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al obtener productos', 
      details: error.message 
    });
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const producto = await Producto.findByPk(id, {
      include: [{
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre', 'descripcion']
      }]
    });
    
    if (!producto) {
      return res.status(404).json({ 
        success: false,
        error: 'Producto no encontrado' 
      });
    }
    
    res.json({
      success: true,
      data: producto
    });
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al obtener el producto', 
      details: error.message 
    });
  }
};

// Buscar productos por categoría
exports.getProductosByCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    
    const productos = await Producto.findAll({
      where: { 
        categoriaId,
        activo: true 
      },
      include: [{
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre']
      }],
      order: [['nombre', 'ASC']]
    });
    
    res.json({
      success: true,
      count: productos.length,
      data: productos
    });
  } catch (error) {
    console.error('Error al buscar productos por categoría:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al buscar productos', 
      details: error.message 
    });
  }
};

// Buscar productos (por nombre o descripción)
exports.searchProductos = async (req, res) => {
  try {
    const { q } = req.query; // ?q=laptop
    
    if (!q) {
      return res.status(400).json({ 
        success: false,
        error: 'Parámetro de búsqueda requerido' 
      });
    }
    
    const { Op } = require('sequelize');
    
    const productos = await Producto.findAll({
      where: {
        activo: true,
        [Op.or]: [
          { nombre: { [Op.iLike]: `%${q}%` } },
          { descripcion: { [Op.iLike]: `%${q}%` } }
        ]
      },
      include: [{
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre']
      }],
      order: [['nombre', 'ASC']]
    });
    
    res.json({
      success: true,
      count: productos.length,
      data: productos
    });
  } catch (error) {
    console.error('Error en búsqueda:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error en la búsqueda', 
      details: error.message 
    });
  }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoriaId, stock, imagen } = req.body;
    
    // Validaciones básicas
    if (!nombre || !precio) {
      return res.status(400).json({ 
        success: false,
        error: 'Nombre y precio son obligatorios' 
      });
    }
    
    if (precio <= 0) {
      return res.status(400).json({ 
        success: false,
        error: 'El precio debe ser mayor a 0' 
      });
    }
    
    // Verificar que la categoría existe (si se proporciona)
    if (categoriaId) {
      const categoria = await Categoria.findByPk(categoriaId);
      if (!categoria) {
        return res.status(404).json({ 
          success: false,
          error: 'Categoría no encontrada' 
        });
      }
    }
    
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      categoriaId,
      stock: stock || 0,
      imagen
    });
    
    // Obtener el producto con su categoría
    const productoCompleto = await Producto.findByPk(nuevoProducto.id, {
      include: [{
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre']
      }]
    });
    
    res.status(201).json({
      success: true,
      message: 'Producto creado exitosamente',
      data: productoCompleto
    });
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al crear producto', 
      details: error.message 
    });
  }
};

// Actualizar un producto
exports.updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, categoriaId, stock, imagen, activo } = req.body;
    
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      return res.status(404).json({ 
        success: false,
        error: 'Producto no encontrado' 
      });
    }
    
    // Validaciones
    if (precio !== undefined && precio <= 0) {
      return res.status(400).json({ 
        success: false,
        error: 'El precio debe ser mayor a 0' 
      });
    }
    
    // Verificar que la categoría existe (si se proporciona)
    if (categoriaId) {
      const categoria = await Categoria.findByPk(categoriaId);
      if (!categoria) {
        return res.status(404).json({ 
          success: false,
          error: 'Categoría no encontrada' 
        });
      }
    }
    
    await producto.update({
      nombre: nombre || producto.nombre,
      descripcion: descripcion !== undefined ? descripcion : producto.descripcion,
      precio: precio || producto.precio,
      categoriaId: categoriaId !== undefined ? categoriaId : producto.categoriaId,
      stock: stock !== undefined ? stock : producto.stock,
      imagen: imagen !== undefined ? imagen : producto.imagen,
      activo: activo !== undefined ? activo : producto.activo
    });
    
    // Obtener el producto actualizado con su categoría
    const productoActualizado = await Producto.findByPk(id, {
      include: [{
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre']
      }]
    });
    
    res.json({
      success: true,
      message: 'Producto actualizado exitosamente',
      data: productoActualizado
    });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al actualizar producto', 
      details: error.message 
    });
  }
};

// Eliminar un producto (soft delete)
exports.deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      return res.status(404).json({ 
        success: false,
        error: 'Producto no encontrado' 
      });
    }
    
    // Soft delete (solo marca como inactivo)
    await producto.update({ activo: false });
    
    res.json({ 
      success: true,
      message: 'Producto eliminado exitosamente' 
    });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al eliminar producto', 
      details: error.message 
    });
  }
};

// Eliminar permanentemente un producto
exports.hardDeleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      return res.status(404).json({ 
        success: false,
        error: 'Producto no encontrado' 
      });
    }
    
    // Eliminación permanente
    await producto.destroy();
    
    res.json({ 
      success: true,
      message: 'Producto eliminado permanentemente' 
    });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al eliminar producto permanentemente', 
      details: error.message 
    });
  }
};