import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F3F] mb-4">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comercializadora Safety C&G — más de 10 años protegiendo a los trabajadores colombianos.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#001F3F]">Nuestra Misión</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Somos una empresa colombiana especializada en la comercialización de equipos de 
              protección personal (EPP), dotación empresarial y elementos de seguridad industrial. 
              Nos comprometemos a ofrecer productos de la más alta calidad que cumplan con las 
              normas técnicas nacionales e internacionales.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Brindamos asesoría personalizada a cada empresa, ayudándoles a seleccionar 
              el equipo adecuado según sus necesidades específicas y el tipo de riesgo laboral 
              al que están expuestos sus trabajadores.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {[
                "Productos certificados bajo normas ICONTEC y ANSI",
                "Asesoría técnica personalizada sin costo",
                "Despachos a todo el territorio colombiano",
                "Garantía del fabricante en todos los productos",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[#001F3F] font-bold text-sm flex-shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🛡️", title: "Seguridad", desc: "Todos nuestros productos cumplen estrictos estándares de seguridad y certificación." },
              { icon: "🤝", title: "Confianza", desc: "Construimos relaciones a largo plazo con nuestros clientes basadas en la transparencia." },
              { icon: "💡", title: "Asesoría", desc: "Nuestro equipo técnico te guía para elegir el equipo correcto para cada riesgo." },
              { icon: "🚀", title: "Rapidez", desc: "Entregas ágiles y eficientes para que tu empresa nunca pare por falta de EPP." },
            ].map((val, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{val.icon}</div>
                <h4 className="font-bold text-[#001F3F] text-lg mb-2">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#001F3F] rounded-2xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+",  label: "Años de experiencia" },
              { value: "500+", label: "Empresas clientes" },
              { value: "1000+",label: "Productos disponibles" },
              { value: "98%",  label: "Satisfacción del cliente" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
