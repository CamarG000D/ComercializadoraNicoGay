import React, { useState } from "react";

const WHATSAPP = "573219522616";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", mensaje: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nombre || !form.mensaje) return;
    const texto = `Hola, soy *${form.nombre}*${form.empresa ? ` de *${form.empresa}*` : ""}.\n\n${form.mensaje}${form.telefono ? `\n\nTeléfono de contacto: ${form.telefono}` : ""}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F3F] mb-4">Contáctanos</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos listos para asesorarte. Escríbenos y te respondemos en menos de 2 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Info de contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#001F3F]">Información de contacto</h3>

            {[
              { icon: "📱", title: "WhatsApp", value: "+57 321 952 2616", href: `https://wa.me/${WHATSAPP}` },
              { icon: "📧", title: "Correo electrónico", value: "contacto@safetycyg.com", href: "mailto:contacto@safetycyg.com" },
              { icon: "📍", title: "Ubicación", value: "Colombia — Envíos a todo el país", href: null },
              { icon: "🕐", title: "Horario de atención", value: "Lunes a Viernes: 8am – 6pm\nSábados: 8am – 12pm", href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#001F3F] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-[#001F3F] mb-1">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer"
                      className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Botón WhatsApp directo */}
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, necesito información sobre sus productos de seguridad industrial.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg w-full justify-center"
            >
              <span className="text-2xl">💬</span>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#001F3F] mb-6">Envíanos un mensaje</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa (opcional)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="Tu número de contacto (opcional)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={4}
                  placeholder="¿Qué productos necesitas? ¿Cuántas personas vas a dotar?..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-500 transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!form.nombre || !form.mensaje}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-900 font-bold py-4 rounded-xl transition-colors text-lg"
              >
                Enviar por WhatsApp 💬
              </button>
              <p className="text-xs text-gray-400 text-center">
                Al enviar serás redirigido a WhatsApp con tu mensaje listo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
