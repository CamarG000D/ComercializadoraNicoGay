import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function ListarProductos() {

  const urlBase = "http://localhost:8080/erp-app/productos";
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const resultado = await axios.get(urlBase);
      console.log("Resultado cargar productos:");
      console.log(resultado.data);
      setProductos(resultado.data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Listado de Productos</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Descripción</th>
              <th className="py-2 px-4 border-b text-left">Estado</th>
              <th className="py-2 px-4 border-b text-left">Precio</th>
              <th className="py-2 px-4 border-b text-left">Stock</th>
              <th className="py-2 px-4 border-b text-left">Unidad</th>
              <th className="py-2 px-4 border-b text-left">Categoría ID</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto, indice) => (
                <tr key={indice} className="hover:bg-gray-50 transition">
                  <td className="py-2 px-4 border-b">{producto.id_producto}</td>
                  <td className="py-2 px-4 border-b">{producto.nombre}</td>
                  <td className="py-2 px-4 border-b">{producto.descripcion}</td>
                  <td className="py-2 px-4 border-b">{producto.estado ? 'ACTIVO' : 'INACTIVO'}</td>
                  <td className="py-2 px-4 border-b">{producto.precio}</td>
                  <td className="py-2 px-4 border-b">{producto.stock}</td>
                  <td className="py-2 px-4 border-b">{producto.unidad}</td>
                  <td className="py-2 px-4 border-b">{producto.categoria_id}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
