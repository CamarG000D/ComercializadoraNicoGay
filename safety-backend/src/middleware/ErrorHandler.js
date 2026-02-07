// Middleware global para manejo de errores
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);

  // Error de validación de Sequelize
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      success: false,
      error: 'Error de validación',
      details: err.errors.map(e => e.message)
    });
  }

  // Error de clave foránea
  if (err.name === 'SequelizeForeignKeyConstraintError') {
    return res.status(400).json({
      success: false,
      error: 'Error de integridad referencial',
      details: 'Operación violó una restricción de clave foránea'
    });
  }

  // Error de unicidad
  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      success: false,
      error: 'El registro ya existe',
      details: err.errors.map(e => e.message)
    });
  }

  // Error genérico
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Error interno del servidor',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

module.exports = errorHandler;