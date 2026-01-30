import React from "react";

import content from '../assets/content.png';


export default function Inicio() {
  return (
<section 
      className="rounded-3xl mx-4 lg:mx-8 mt-8 overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px]"
      style={{ backgroundImage: `url(${content})` }}
    >      
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Protección Total para tu Equipo de Trabajo
            </h1>
            <p className="text-lg lg:text-xl text-gray-300">
              Equipos de protección personal certificados para garantizar la seguridad 
              y confianza en cada jornada laboral. Calidad que salva vidas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3.5 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Cotizar ahora
              </button>
              <button className="px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Ver catálogo
              </button>
            </div>
          </div>

          {/* Imagen (placeholder) */}
          
        </div>
      </div>
    </section>
  );
}