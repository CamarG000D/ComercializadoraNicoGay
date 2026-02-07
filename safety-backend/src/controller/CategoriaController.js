const { Categoria, Producto } = require('../models');

// Obtener todas las categorías
exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      where: { activo: true },
      order: [['nombre', 'ASC']]
    });
    
    res.json({
      success: true,
      count: categorias.length,
      data: categorias
    });
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al obtener categorías', 
      details: error.message 
    });
  }
};

// Obtener una categoría por ID con sus productos
exports.getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const categoria = await Categoria.findByPk(id, {
      include: [{
        model: Producto,
        as: 'productos',
        where: { activo: true },
        required: false
      }]
    });
    
    if (!categoria) {
      return res.status(404).json({ 
        success: false,
        error: 'Categoría no encontrada' 
      });
    }
    
    res.json({
      success: true,
      data: categoria
    });
  } catch (error) {
    console.error('Error al obtener categoría:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al obtener categoría', 
      details: error.message 
    });
  }
};

// Crear una categoría
exports.createCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    
    if (!nombre) {
      return res.status(400).json({ 
        success: false,
        error: 'El nombre es obligatorio' 
      });
    }
    
    // Verificar si ya existe
    const existente = await Categoria.findOne({ where: { nombre } });
    if (existente) {
      return res.status(400).json({ 
        success: false,
        error: 'Ya existe una categoría con ese nombre' 
      });
    }
    
    const nuevaCategoria = await Categoria.create({
      nombre,
      descripcion
    });
    
    res.status(201).json({
      success: true,
      message: 'Categoría creada exitosamente',
      data: nuevaCategoria
    });
  } catch (error) {
    console.error('Error al crear categoría:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al crear categoría', 
      details: error.message 
    });
  }
};

// Actualizar una categoría
exports.updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, activo } = req.body;
    
    const categoria = await Categoria.findByPk(id);
    
    if (!categoria) {
      return res.status(404).json({ 
        success: false,
        error: 'Categoría no encontrada' 
      });
    }
    
    // Verificar nombre duplicado (si se está cambiando)
    if (nombre && nombre !== categoria.nombre) {
      const existente = await Categoria.findOne({ where: { nombre } });
      if (existente) {
        return res.status(400).json({ 
          success: false,
          error: 'Ya existe una categoría con ese nombre' 
        });
      }
    }
    
    await categoria.update({
      nombre: nombre || categoria.nombre,
      descripcion: descripcion !== undefined ? descripcion : categoria.descripcion,
      activo: activo !== undefined ? activo : categoria.activo
    });
    
    res.json({
      success: true,
      message: 'Categoría actualizada exitosamente',
      data: categoria
    });
  } catch (error) {
    console.error('Error al actualizar categoría:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al actualizar categoría', 
      details: error.message 
    });
  }
};

// Eliminar una categoría (soft delete)
exports.deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    
    const categoria = await Categoria.findByPk(id);
    
    if (!categoria) {
      return res.status(404).json({ 
        success: false,
        error: 'Categoría no encontrada' 
      });
    }
    
    // Verificar si tiene productos
    const productosCount = await Producto.count({ 
      where: { categoriaId: id, activo: true } 
    });
    
    if (productosCount > 0) {
      return res.status(400).json({ 
        success: false,
        error: `No se puede eliminar. La categoría tiene ${productosCount} producto(s) activo(s)` 
      });
    }
    
    await categoria.update({ activo: false });
    
    res.json({ 
      success: true,
      message: 'Categoría eliminada exitosamente' 
    });
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al eliminar categoría', 
      details: error.message 
    });
  }
};