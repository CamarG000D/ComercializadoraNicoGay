const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./src/config/database');
const Producto = require('./src/models/Producto');
const Categoria = require('./src/models/Categoria');
const productoRoutes = require('./src/routes/ProductoRoutes');
const categoriaRoutes = require('./src/routes/CategoriaRoutes');
const errorHandler = require('./src/middleware/ErrorHandler');
const notFound = require('./src/middleware/NotFound');

const uploadRoutes = require('./src/routes/UploadRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Log de requests (opcional, para desarrollo)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Rutas
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '¡Bienvenido a la API de Comercializadora!',
    version: '1.0.0',
    endpoints: {
      productos: '/api/productos',
      categorias: '/api/categorias'
    }
  });
});

app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/upload', uploadRoutes);


// Middlewares de error (deben ir al final)
app.use(notFound);
app.use(errorHandler);

// Conectar a la base de datos y arrancar servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a PostgreSQL exitosa');
    
    // Sincronizar modelos con la BD
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('✅ Modelos sincronizados con la base de datos');
    
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📚 Documentación: http://localhost:${PORT}/`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar con la base de datos:', err);
    process.exit(1);
  });

// Manejo de señales de terminación
process.on('SIGINT', async () => {
  console.log('\n⏹️  Cerrando servidor...');
  await sequelize.close();
  console.log('✅ Conexión a la base de datos cerrada');
  process.exit(0);
});
