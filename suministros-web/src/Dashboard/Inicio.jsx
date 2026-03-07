import React from "react";
import { useNavigate } from "react-router-dom";
import content from '../assets/content.png';

const WHATSAPP = "573118534266";
const CATALOGO_PDF = "https://drive.google.com/file/d/1ud5dLj9Dm72PjRTMj-oycdBqx4cRD0RU/view?usp=sharing";

export default function Inicio() {
  const navigate = useNavigate();

  const cotizarWhatsapp = () => {
    const msg = "Hola, me gustaría cotizar equipos de protección personal para mi empresa.";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const verCatalogo = () => {
    window.open(CATALOGO_PDF, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section
        className="rounded-none mx-4 lg:mx-8 mt-8 overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px]"
        style={{ backgroundImage: `url(${content})` }}
      >
        <div className="bg-gradient-to-r from-gray-900/90 to-gray-900/50 h-full">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Protección total para tu equipo de trabajo
                </h1>
                <p className="text-lg lg:text-xl text-gray-300">
                  Equipos de protección personal certificados para garantizar la seguridad
                  y confianza en cada jornada laboral. Calidad que salva vidas.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={cotizarWhatsapp}
                    className="px-8 py-3.5 bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    Cotizar ahora
                  </button>
                  <button
                    onClick={verCatalogo}
                    className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2"
                  >
                    📄 Ver catálogo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#001F3F] rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🏢", value: "500+", label: "Empresas atendidas" },
              { icon: "🦺", value: "10+",  label: "Categorías de productos" },
              { icon: "⭐", value: "98%",  label: "Clientes satisfechos" },
              { icon: "🚚", value: "24h",  label: "Tiempo de entrega" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
