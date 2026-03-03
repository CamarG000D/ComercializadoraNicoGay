import { useState, useEffect } from 'react';
import { getProductos } from '../Services/Api';
import { useNavigate } from 'react-router-dom'; // Importar

function ListarProductos() {
  const navigate = useNavigate(); // Hook para navegar
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await getProductos();
      
      if (response.success) {
        setProductos(response.data);
      } else {
        setError('No se pudieron cargar los productos');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para navegar al detalle
  const verDetalle = (id) => {
    navigate(`/producto/${id}`);
  };

  // Loading
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600 text-lg">Cargando productos...</p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-red-600 text-xl mb-4">❌ {error}</p>
        <button 
          onClick={cargarProductos}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Reintentar
        </button>
      </div>
    );
  }

  // Sin productos
  if (productos.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-500 text-xl">No hay productos disponibles</p>
        </div>
      </div>
    );
  }

  // Lista de productos
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          Catálogo de Productos ({productos.length})
        </h2>
        <button 
          onClick={cargarProductos}
          className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition flex items-center gap-2"
        >
          🔄 Actualizar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <button
            key={producto.id}
            onClick={() => verDetalle(producto.id)}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden text-left transform hover:scale-105"
          >
            <div className="relative h-48 bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
              <img 
                src={producto.imagen || 'https://via.placeholder.com/200?text=Sin+Imagen'} 
                alt={producto.nombre}
                className="max-h-full max-w-full object-contain p-4"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200?text=Sin+Imagen';
                }}
              />
              
              {producto.categoria && (
                <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {producto.categoria.nombre}
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 text-center">
                {producto.nombre}
              </h3>
              
              <p className="text-gray-600 text-sm text-center mb-4 line-clamp-2">
                {producto.descripcion}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-green-600">
                  ${Number(producto.precio).toLocaleString('es-CO')}
                </span>
                <span className="text-sm text-gray-500">
                  Stock: {producto.stock}
                </span>
              </div>

              {/* Botón "Ver más" */}
              <div className="mt-4">
                <span className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Ver detalles →
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListarProductos;