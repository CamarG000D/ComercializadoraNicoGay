
import React, { useState } from "react";


export default function Categorias () {
    const [currentSlide, setCurrentSlide] = useState(0);
    
      const categories = [
        {
          id: 1,
          name: "Protección craneal y facial",
          icon: "🪖",
          description: "Cascos y accesorios",
          image: "/categorias/cascos.jpg" // Ruta de tu imagen
        },
        {
          id: 2,
          name: "Protección  manual",
          icon: "🧤",
          description: "Guantes industriales",
          image: "/categorias/guantes.jpg"
        },
        {
          id: 3,
          name: "Calzado industrial",
          icon: "👢",
          description: "Botas de seguridad",
          image: "/categorias/botas.jpg"
        },
        {
          id: 4,
          name: "Protección Visual",
          icon: "🥽",
          description: "Gafas y caretas",
          image: "/categorias/gafas.jpg"
        },
        {
          id: 5,
          name: "Protección Respiratoria",
          icon: "😷",
          description: "Mascarillas y respiradores",
          image: "/categorias/mascarillas.jpg"
        },
        {
          id: 6,
          name: "Protección corporal",
          icon: "🪢",
          description: "Arneses y líneas de vida",
          image: "/categorias/arneses.jpg"
        },
        {
          id: 7,
          name: "Protección auditiva",
          icon: "🪢",
          description: "Arneses y líneas de vida",
          image: "/categorias/arneses.jpg"
        },
        {
          id: 8,
          name: "Dotación empresarial",
          icon: "🪢",
          description: "Arneses y líneas de vida",
          image: "/categorias/arneses.jpg"
        }
      ];
    
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(categories.length / 3));
      };
    
      const prevSlide = () => {
        setCurrentSlide((prev) => 
          prev === 0 ? Math.ceil(categories.length / 3) - 1 : prev - 1
        );
      };

      return(
        <>
        {/* Categorías - Grid completo */}
      <section className="bg-[#001F3F] w-full mt-12 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Categorías de Productos
            </h2>
          </div>

          {/* Grid de categorías */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 overflow-hidden group cursor-pointer"
              >
                <div className="p-6 flex flex-col items-center text-center space-y-3">
                  {/* Círculo con ícono */}
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-[#001F3F] group-hover:text-yellow-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
      )
}