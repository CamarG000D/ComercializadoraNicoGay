import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categorias() {
  const navigate = useNavigate();

  const categories = [
    { id: 5,  name: "Protección Craneal",      icon: "⛑️",  description: "Cascos y accesorios" },
    { id: 7,  name: "Protección Manual",        icon: "🧤",  description: "Guantes industriales" },
    { id: 9,  name: "Protección Visual",        icon: "🥽",  description: "Gafas y caretas" },
    { id: 8,  name: "Protección Respiratoria",  icon: "😷",  description: "Mascarillas y respiradores" },
    { id: 4,  name: "Protección Corporal",      icon: "🦺",  description: "Chalecos y trajes" },
    { id: 3,  name: "Protección Auditiva",      icon: "🎧",  description: "Tapones y orejeras" },
    { id: 1,  name: "Dotación Empresarial",     icon: "👔",  description: "Uniformes y ropa de trabajo" },
    { id: 2,  name: "Equipo De Alturas",        icon: "🪝",  description: "Arneses y líneas de vida" },
    { id: 6,  name: "Protección Facial",        icon: "😮",  description: "Caretas y protectores faciales" },
    { id: 10, name: "Señalización",             icon: "⚠️",  description: "Señales y conos de seguridad" },
  ];

  const irACategoria = (id) => {
    navigate(`/lista?categoria=${id}`);
  };

  return (
    <section className="bg-[#001F3F] w-full mt-12 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Categorías de Productos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => irACategoria(category.id)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 overflow-hidden group cursor-pointer text-center w-full"
            >
              <div className="p-6 flex flex-col items-center space-y-3">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] group-hover:text-yellow-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
