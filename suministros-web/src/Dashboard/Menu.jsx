import React, { useState } from 'react';
import { Truck, Warehouse, ClipboardList, CreditCard, BadgeDollarSign, PieChart, Bell, ChevronDown } from "lucide-react";
import ListarProductos from '../Productos/ListarProductos';

// Nav items con subtareas
const navItems = [
  { 
    icon: <Truck className="w-5 h-5" />, 
    label: "Proveedores", 

    subItems: [
      { label: "Agregar Producto", action: "addProducto" },
      { label: "Listar Proveedores", action: "listarProveedores" }
    ]
  },
  { 
    icon: <Warehouse className="w-5 h-5" />, 
    label: "Inventario", 
    subItems: [
      { label: "Agregar Inventario", action: "addInventario" },
      { label: "Listar Inventario", action: "productos" }
    ]
  },
  { 
    icon: <ClipboardList className="w-5 h-5" />, 
    label: "Compras", 
    subItems: [
      { label: "Registrar Compra", action: "registrarCompra" },
      { label: "Ver Compras Realizadas", action: "verCompras" }
    ]
  },
  { 
    icon: <CreditCard className="w-5 h-5" />, 
    label: "Pagos", 
    subItems: [
      { label: "Pagar Factura", action: "pagarFactura" },
      { label: "Ver Pagos Realizados", action: "verPagos" }
    ]
  },
  // Agregar más elementos según sea necesario
];

// Mapeo de componentes
const componentsMap = {
  productos: ListarProductos,
  inventario: () => <div>Contenido de Inventario</div>,
  compras: () => <div>Contenido de Compras</div>,
  pagos: () => <div>Contenido de Pagos</div>,
  finanzas: () => <div>Contenido de Finanzas</div>,
  estadisticas: () => <div>Contenido de Estadísticas</div>,
  notificaciones: () => <div>Contenido de Notificaciones</div>,
  addProducto: () => <div>Agregar Producto</div>,
  listarProveedores: () => <div>Listar Proveedores</div>,
  addInventario: () => <div>Agregar Inventario</div>,
  listarInventario: () => <div>Listar Inventario</div>,
  registrarCompra: () => <div>Registrar Compra</div>,
  verCompras: () => <div>Ver Compras Realizadas</div>,
  pagarFactura: () => <div>Pagar Factura</div>,
  verPagos: () => <div>Ver Pagos Realizados</div>
};

export default function Menu() {
  const [currentContent, setCurrentContent] = useState("productos"); // Inicia con el contenido de productos
  const [openSubMenu, setOpenSubMenu] = useState(null); // Estado para controlar qué submenú está abierto

  // Función para manejar el clic en los elementos principales (solo abre/cierra submenú)
  const handleNavItemClick = (idx) => {
    setOpenSubMenu(openSubMenu === idx ? null : idx); // Abre o cierra el submenú
  };

  // Función para manejar el clic en un sub-botón (esto cambia el contenido principal)
  const handleSubItemClick = (subItemAction) => {
    setCurrentContent(subItemAction); // Establece el nuevo contenido cuando se hace clic en un sub-botón
  };

  // Obtener el componente correspondiente
  const CurrentComponent = componentsMap[currentContent];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="text-2xl font-bold p-4 border-b">Erp de Nico</div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item, idx) => (
            <div key={idx}>
              {/* Título de cada sección (botón principal) */}
              <div className="relative">
                <button
                  className="flex items-center gap-3 text-gray-700 px-3 py-2 rounded-lg hover:bg-purple-100 w-full text-left"
                  onClick={() => handleNavItemClick(idx)} // Abre o cierra el submenú
                >
                  {item.icon}
                  <span>{item.label}</span>

                  {/* Flecha de desplegable */}
                  <ChevronDown 
                    className={`ml-auto transition-transform ${openSubMenu === idx ? "rotate-180" : ""}`} 
                  />
                </button>

                {/* Subtareas (cuando el submenú está abierto) */}
                {openSubMenu === idx && item.subItems && (
                  <div className="pl-10 space-y-2 bg-gray-50">
                    {item.subItems.map((subItem, subIdx) => (
                      <button
                        key={subIdx}
                        className="w-full text-left text-gray-500 p-2 hover:bg-purple-100"
                        onClick={() => handleSubItemClick(subItem.action)} // Ejecuta la acción del sub-botón
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="text-xl font-semibold mb-4">Dashboard Content</div>
        {/* Renderiza el componente correspondiente */}
        <div className="border rounded-lg bg-white p-4 shadow-sm">
          <CurrentComponent />
        </div>
      </main>
    </div>
  );
}
