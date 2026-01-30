import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.svg"; // Ajusta la ruta según tu estructura

export default function Navbar() {
  return (
    <header className="bg-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Honaaa Logo" 
              className="w-32 h-32 rounded-full"  // Cualquier tamaño que quieras
            />     
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-gray-900">
              Inicio
            </Link>
            <Link to="/categorias" className="font-medium text-gray-700 hover:text-gray-900">
              Categorías
            </Link>
            <Link to="/nosotros" className="font-medium text-gray-700 hover:text-gray-900">
              Nosotros
            </Link>
            <Link to="/testimonios" className="font-medium text-gray-700 hover:text-gray-900">
              Testimonios
            </Link>
            <Link to="/contacto" className="font-medium text-gray-700 hover:text-gray-900">
              Contacto
            </Link>
          </div>

          {/* Search and CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-white rounded-lg px-4 py-2 border border-gray-300">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar productos..."
                className="ml-2 outline-none bg-transparent text-gray-700 w-48"
              />
            </div>
            <button className="px-6 py-2.5 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Cotizar ahora
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}