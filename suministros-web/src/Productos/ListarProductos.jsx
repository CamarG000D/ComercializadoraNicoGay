import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { productos, categorias } from '../Data/Productos';

function ListarProductos() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoriaIdParam = searchParams.get('categoria');

  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState(categoriaIdParam ? parseInt(categoriaIdParam) : null);

  useEffect(() => {
    if (categoriaActiva) {
      setProductosFiltrados(productos.filter(p => p.categoriaId === categoriaActiva));
    } else {
      setProductosFiltrados(productos);
    }
  }, [categoriaActiva]);

  // Sincronizar cuando cambia el parámetro de URL
  useEffect(() => {
    if (categoriaIdParam) {
      setCategoriaActiva(parseInt(categoriaIdParam));
    } else {
      setCategoriaActiva(null);
    }
  }, [categoriaIdParam]);

  const filtrarPorCategoria = (categoriaId) => {
    if (categoriaId === categoriaActiva) {
      // Si ya está activa, quitar filtro
      setCategoriaActiva(null);
      setSearchParams({});
    } else {
      setCategoriaActiva(categoriaId);
      setSearchParams({ categoria: categoriaId });
    }
  };

  const verDetalle = (id) => {
    navigate(`/producto/${id}`);
  };

  const categoriaActivaInfo = categorias.find(c => c.id === categoriaActiva);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1929] to-[#1e3a5f] py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {categoriaActivaInfo ? categoriaActivaInfo.nombre : 'Catálogo de Productos'}
            </h2>
            <p className="text-gray-300 mt-1">
              {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
            </p>
          </div>
          {categoriaActiva && (
            <button
              onClick={() => { setCategoriaActiva(null); setSearchParams({}); }}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition flex items-center gap-2"
            >
              ✕ Quitar filtro
            </button>
          )}
        </div>

        {/* Filtros de categoría */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm mb-3 uppercase tracking-widest">Filtrar por categoría</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => { setCategoriaActiva(null); setSearchParams({}); }}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                !categoriaActiva
                  ? 'bg-yellow-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              🏪 Todos
            </button>
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => filtrarPorCategoria(cat.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  categoriaActiva === cat.id
                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat.icono} {cat.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Sin productos */}
        {productosFiltrados.length === 0 && (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="text-center bg-white/10 rounded-xl p-8">
              <p className="text-white text-xl mb-2">No hay productos en esta categoría</p>
              <p className="text-gray-400">Pronto añadiremos más productos</p>
            </div>
          </div>
        )}

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map((producto) => (
            <button
              key={producto.id}
              onClick={() => verDetalle(producto.id)}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden text-left transform hover:scale-105"
            >
              {/* Imagen */}
              <div className="relative h-48 bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="max-h-full max-w-full object-contain p-4"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200?text=Sin+Imagen';
                  }}
                />
                {/* Badge categoría */}
                <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {producto.categoria}
                </span>
                {/* Badge agotado */}
                {producto.stock === 0 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                      AGOTADO
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-1 text-center line-clamp-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4 line-clamp-2">
                  {producto.descripcion}
                </p>

                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-2xl font-bold text-green-600">
                    ${Number(producto.precio).toLocaleString('es-CO')}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    producto.stock > 10
                      ? 'bg-green-100 text-green-700'
                      : producto.stock > 0
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    Stock: {producto.stock}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="block w-full text-center bg-[#1e3a5f] hover:bg-blue-800 text-white py-2 rounded-lg transition font-medium">
                    Ver detalles →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListarProductos;
