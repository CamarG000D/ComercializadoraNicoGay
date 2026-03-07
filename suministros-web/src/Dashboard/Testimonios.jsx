import React, { useState } from "react";

const testimonios = [
  {
    nombre: "Carlos Rodríguez",
    empresa: "Constructora Bogotá S.A.S",
    cargo: "Director de SST",
    texto: "Llevamos 3 años trabajando con Safety C&G y la calidad de sus productos es inigualable. Los cascos y arneses que nos suministran cumplen con todas las normas. Su asesoría técnica nos ha salvado de muchos inconvenientes.",
    estrellas: 5,
    inicial: "C",
  },
  {
    nombre: "María Fernanda López",
    empresa: "Hospital Regional del Sur",
    cargo: "Jefe de Compras",
    texto: "Para nosotros la calidad del EPP es crítica. Safety C&G nos provee uniformes de enfermería y elementos de bioseguridad con entrega puntual y excelente servicio postventa. Muy recomendados.",
    estrellas: 5,
    inicial: "M",
  },
  {
    nombre: "Andrés Morales",
    empresa: "Mineros del Pacífico",
    cargo: "Coordinador HSE",
    texto: "El equipo de alturas que nos suministraron superó nuestras expectativas. Todos los arneses vienen certificados y el servicio de asesoría para seleccionar el equipo correcto fue clave para nuestro programa de trabajo en alturas.",
    estrellas: 5,
    inicial: "A",
  },
  {
    nombre: "Paola Jiménez",
    empresa: "Industrias Textiles del Valle",
    cargo: "Gerente Administrativa",
    texto: "Cotizamos con varios proveedores y Safety C&G nos ofreció la mejor relación precio-calidad. La dotación empresarial que nos fabricaron quedó perfecta con los colores corporativos. Los tiempos de entrega son muy buenos.",
    estrellas: 5,
    inicial: "P",
  },
  {
    nombre: "Roberto Suárez",
    empresa: "Logística Express Colombia",
    cargo: "Supervisor de Operaciones",
    texto: "Necesitábamos chalecos reflectivos y señalización urgente para una licitación. Safety C&G nos entregó en tiempo récord y con la calidad que exigía el contrato. Son nuestros proveedores de confianza.",
    estrellas: 5,
    inicial: "R",
  },
];

export default function Testimonios() {
  const [actual, setActual] = useState(0);

  const anterior = () => setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  const siguiente = () => setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));

  const t = testimonios[actual];

  return (
    <section className="bg-[#001F3F] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-400 text-lg">
            Más de 500 empresas confían en nosotros para proteger a su equipo
          </p>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl text-center">
            {/* Estrellas */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.estrellas }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>

            {/* Texto */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
              "{t.texto}"
            </p>

            {/* Avatar e info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-[#001F3F] rounded-full flex items-center justify-center text-white text-xl font-bold">
                {t.inicial}
              </div>
              <div className="text-left">
                <p className="font-bold text-[#001F3F] text-lg">{t.nombre}</p>
                <p className="text-gray-500 text-sm">{t.cargo}</p>
                <p className="text-yellow-500 text-sm font-medium">{t.empresa}</p>
              </div>
            </div>
          </div>

          {/* Controles */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={anterior}
              className="w-12 h-12 bg-white/10 hover:bg-yellow-500 text-white rounded-full flex items-center justify-center transition-colors text-xl"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActual(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === actual ? "bg-yellow-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={siguiente}
              className="w-12 h-12 bg-white/10 hover:bg-yellow-500 text-white rounded-full flex items-center justify-center transition-colors text-xl"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
