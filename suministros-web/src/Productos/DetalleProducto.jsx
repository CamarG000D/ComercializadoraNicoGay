import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductoById } from '../Data/Productos';

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const found = getProductoById(id);
    if (found) {
      setProducto(found);
    }
  }, [id]);

  const handlePedir = () => {
    const mensaje = `¡Hola! Me interesa el siguiente producto de su catálogo:

*Producto:* ${producto.nombre}
*Categoría:* ${producto.categoria}
*Cantidad:* ${cantidad} unidad(es)
*Precio unitario:* $${Number(producto.precio).toLocaleString('es-CO')}
*Subtotal:* $${(Number(producto.precio) * cantidad).toLocaleString('es-CO')}

¿Podría darme más información y confirmar disponibilidad?`;
    const whatsappURL = `https://wa.me/573219522616?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
  };

  const incrementarCantidad = () => {
    if (cantidad < producto.stock) setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  // Producto no encontrado
  if (!producto) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1929] to-[#1e3a5f] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">❌ Producto no encontrado</p>
          <button
            onClick={() => navigate('/lista')}
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1929] to-[#1e3a5f] py-12">
      <div className="container mx-auto px-4">

        {/* Botón volver */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-white hover:text-yellow-400 transition"
        >
          <span className="text-2xl">←</span>
          <span className="text-lg">Volver</span>
        </button>

        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">

            {/* Imagen */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 flex items-center justify-center min-h-[400px]">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="max-w-full max-h-[500px] object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500?text=Sin+Imagen';
                }}
              />
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col justify-between">

              {/* Categoría */}
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 w-fit">
                {producto.categoria}
              </span>

              {/* Nombre */}
              <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                {producto.nombre}
              </h1>

              {/* Descripción */}
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {producto.descripcion}
              </p>

              {/* Stock */}
              <div className="mb-6">
                <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  producto.stock > 10
                    ? 'bg-green-100 text-green-800'
                    : producto.stock > 0
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {producto.stock > 0 ? `${producto.stock} unidades disponibles` : 'Agotado'}
                </span>
              </div>

              {/* Precio */}
              <div className="mb-8">
                <p className="text-gray-600 text-sm mb-2">Precio unitario</p>
                <p className="text-5xl font-bold text-green-600">
                  ${Number(producto.precio).toLocaleString('es-CO')}
                </p>
                <p className="text-gray-500 text-sm mt-1">IVA incluido</p>
              </div>

              {/* Selector de cantidad */}
              {producto.stock > 0 && (
                <div className="mb-6">
                  <p className="text-gray-700 font-medium mb-3">Cantidad:</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={decrementarCantidad}
                      disabled={cantidad <= 1}
                      className="w-12 h-12 bg-gray-200 hover:bg-gray-300 disabled:opacity-40 rounded-lg flex items-center justify-center text-2xl font-bold transition"
                    >
                      −
                    </button>
                    <span className="text-2xl font-bold text-[#1e3a5f] w-16 text-center">
                      {cantidad}
                    </span>
                    <button
                      onClick={incrementarCantidad}
                      disabled={cantidad >= producto.stock}
                      className="w-12 h-12 bg-gray-200 hover:bg-gray-300 disabled:opacity-40 rounded-lg flex items-center justify-center text-2xl font-bold transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Subtotal */}
              {producto.stock > 0 && (
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Subtotal:</span>
                    <span className="text-3xl font-bold text-[#1e3a5f]">
                      ${(Number(producto.precio) * cantidad).toLocaleString('es-CO')}
                    </span>
                  </div>
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex gap-4">
                {producto.stock > 0 ? (
                  <>
                    <button
                      onClick={handlePedir}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg flex items-center justify-center gap-2"
                    >
                      <span>💬</span>
                      Pedir por WhatsApp
                    </button>
                    <button
                      onClick={handlePedir}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition text-lg"
                    >
                      Cotizar ahora
                    </button>
                  </>
                ) : (
                  <button
                    disabled
                    className="flex-1 bg-gray-400 text-white font-bold py-4 px-6 rounded-lg cursor-not-allowed text-lg"
                  >
                    Producto agotado
                  </button>
                )}
              </div>

              {/* Info adicional */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-[#1e3a5f] mb-3">Información adicional:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Envío disponible</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Garantía del fabricante</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Asesoría personalizada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-4">Más de esta categoría</h2>
          <button
            onClick={() => navigate(`/lista?categoria=${producto.categoriaId}`)}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition"
          >
            Ver todos los productos de {producto.categoria} →
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
