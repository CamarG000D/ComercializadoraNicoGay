import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { productos } from "../Data/Productos";
import logo from "../assets/Logooconvertido.png";

const CATALOGO_PDF = "https://drive.google.com/file/d/1ud5dLj9Dm72PjRTMj-oycdBqx4cRD0RU/view?usp=sharing";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const searchRef = useRef(null);

  // Buscar productos por nombre
  useEffect(() => {
    if (busqueda.trim().length < 2) {
      setResultados([]);
      setMostrarResultados(false);
      return;
    }
    const filtrados = productos
      .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
      .slice(0, 6); // máximo 6 resultados
    setResultados(filtrados);
    setMostrarResultados(true);
  }, [busqueda]);

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setMostrarResultados(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const irAProducto = (id) => {
    setBusqueda("");
    setMostrarResultados(false);
    navigate(`/producto/${id}`);
  };

  const navLinks = [
    { label: "Inicio",      section: "inicio" },
    { label: "Categorías",  section: "categorias" },
    { label: "Nosotros",    section: "nosotros" },
    { label: "Testimonios", section: "testimonios" },
    { label: "Contacto",    section: "contacto" },
  ];

  return (
    <header className="bg-[#f8f7f5] sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <button onClick={() => handleNav("inicio")} className="flex items-center space-x-3">
            <img src={logo} alt="Safety C&G Logo" className="h-16 w-auto object-contain" />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNav(link.section)}
                className="text-[#001F3F] font-medium hover:text-yellow-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Buscador + CTA */}
          <div className="flex items-center space-x-4">

            {/* Buscador con resultados */}
            <div ref={searchRef} className="hidden lg:block relative">
              <div className="flex items-center bg-white rounded-lg px-4 py-2 border border-gray-300 focus-within:border-yellow-500 transition-colors">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  onFocus={() => resultados.length > 0 && setMostrarResultados(true)}
                  placeholder="Buscar productos..."
                  className="ml-2 outline-none bg-transparent text-gray-700 w-48"
                />
                {busqueda && (
                  <button onClick={() => { setBusqueda(""); setMostrarResultados(false); }}
                    className="text-gray-400 hover:text-gray-600 ml-1">✕</button>
                )}
              </div>

              {/* Dropdown de resultados */}
              {mostrarResultados && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  {resultados.length > 0 ? (
                    <>
                      {resultados.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => irAProducto(p.id)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-yellow-50 transition-colors text-left border-b border-gray-50 last:border-0"
                        >
                          <img
                            src={p.imagen}
                            alt={p.nombre}
                            className="w-10 h-10 object-contain rounded-lg bg-gray-50 flex-shrink-0"
                            onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=?"; }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-[#001F3F] truncate">{p.nombre}</p>
                            <p className="text-xs text-gray-400">{p.categoria}</p>
                          </div>
                          <span className="text-sm font-bold text-green-600 flex-shrink-0">
                            ${Number(p.precio).toLocaleString("es-CO")}
                          </span>
                        </button>
                      ))}
                      <button
                        onClick={() => { navigate("/lista"); setBusqueda(""); setMostrarResultados(false); }}
                        className="w-full text-center py-3 text-sm text-yellow-600 font-medium hover:bg-yellow-50 transition-colors"
                      >
                        Ver todos los resultados →
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-4 text-center text-gray-500 text-sm">
                      No se encontraron productos para "{busqueda}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Botón catálogo */}
            <button
              onClick={() => window.open(CATALOGO_PDF, "_blank")}
              className="hidden md:block px-4 py-2.5 bg-[#001F3F] text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors text-sm"
            >
              📄 Catálogo
            </button>

            {/* Cotizar */}
            <button
              onClick={() => handleNav("contacto")}
              className="px-6 py-2.5 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Cotizar ahora
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-[#001F3F] hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {/* Buscador móvil */}
            <div className="px-4 py-3">
              <div className="flex items-center bg-white rounded-lg px-4 py-2 border border-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar productos..."
                  className="ml-2 outline-none bg-transparent text-gray-700 w-full"
                />
              </div>
              {/* Resultados móvil */}
              {mostrarResultados && resultados.length > 0 && (
                <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  {resultados.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => irAProducto(p.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-yellow-50 text-left border-b border-gray-50 last:border-0"
                    >
                      <img src={p.imagen} alt={p.nombre}
                        className="w-8 h-8 object-contain rounded bg-gray-50"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/32?text=?"; }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#001F3F] truncate">{p.nombre}</p>
                        <p className="text-xs text-gray-400">{p.categoria}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNav(link.section)}
                className="block w-full text-left px-4 py-3 text-[#001F3F] font-medium hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => window.open(CATALOGO_PDF, "_blank")}
              className="block w-full text-left px-4 py-3 text-[#001F3F] font-medium hover:bg-yellow-50"
            >
              📄 Ver Catálogo
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
