// src/Data/Productos.js

export const categorias = [
  { id: 1,  nombre: "Dotación Empresarial",    slug: "DotacionEmpresarial",    icono: "👔", descripcion: "Uniformes y ropa de trabajo" },
  { id: 2,  nombre: "Equipo De Alturas",       slug: "EquipoDeAlturas",        icono: "🪝", descripcion: "Arneses y líneas de vida" },
  { id: 3,  nombre: "Protección Auditiva",     slug: "ProteccionAuditiva",     icono: "🎧", descripcion: "Tapones y orejeras" },
  { id: 4,  nombre: "Protección Corporal",     slug: "ProteccionCorporal",     icono: "🦺", descripcion: "Chalecos y trajes de protección" },
  { id: 5,  nombre: "Protección Craneal",      slug: "ProteccionCraneal",      icono: "⛑️", descripcion: "Cascos y accesorios" },
  { id: 6,  nombre: "Protección Facial",       slug: "ProteccionFacial",       icono: "😮", descripcion: "Caretas y protectores faciales" },
  { id: 7,  nombre: "Protección Manual",       slug: "ProteccionManual",       icono: "🧤", descripcion: "Guantes industriales" },
  { id: 8,  nombre: "Protección Respiratoria", slug: "ProteccionRespiratoria", icono: "😷", descripcion: "Mascarillas y respiradores" },
  { id: 9,  nombre: "Protección Visual",       slug: "ProteccionVisual",       icono: "🥽", descripcion: "Gafas y caretas" },
  { id: 10, nombre: "Señalización",            slug: "Señalizacion",           icono: "⚠️", descripcion: "Señales y conos de seguridad" },
];

export const productos = [

  // ──────────────────────────────────────────────────────────────────────
  // DOTACIÓN EMPRESARIAL
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 101,
    nombre: "Camiseta Cuello Redondo 180 gr/m2",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 35000, // ← Editar precio
    stock: 50,
    descripcion: "Camiseta cuello redondo 180 gr/m2, tallas S, M, L, XL. Todos los colores.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-1.png",
  },
  {
    id: 102,
    nombre: "Camiseta Tipo Polo 189 gr/m2",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 42000, // ← Editar precio
    stock: 50,
    descripcion: "Camiseta tipo polo 189 gr/m2, tallas S, M, L, XL. Todos los colores.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-2.png",
  },
  {
    id: 103,
    nombre: "Camisa Oxford Manga Larga",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 55000, // ← Editar precio
    stock: 40,
    descripcion: "Camisa Oxford manga larga, tallas XS, S, M, L, XL, XXL. Colores surtidos, bolsillo lapicero.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-3.png",
  },
  {
    id: 104,
    nombre: "Camisa Ejecutivo Manga Larga Tela Dacron",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 60000, // ← Editar precio
    stock: 35,
    descripcion: "Camisa ejecutivo manga larga en tela Dacron, tallas XS, S, M, L, XL, XXL. Colores surtidos.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-4.png",
  },
  {
    id: 105,
    nombre: "Camisa Jean Manga Larga 7 Onzas",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 65000, // ← Editar precio
    stock: 30,
    descripcion: "Camisa jean manga larga 7 onzas, tallas XS, S, M, L, XL, XXL. Color azul.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-5.png",
  },
  {
    id: 106,
    nombre: "Camisa Oxford Manga Corta",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 50000, // ← Editar precio
    stock: 40,
    descripcion: "Camisa Oxford manga corta, tallas XS, S, M, L, XL, XXL. Bolsillo lapicero.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-6.png",
  },
  {
    id: 107,
    nombre: "Camisa Dril Manga Corta",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 58000, // ← Editar precio
    stock: 35,
    descripcion: "Camisa dril manga corta, tallas XS, S, M, L, XL, XXL. Colores a disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-7.png",
  },
  {
    id: 108,
    nombre: "Camisa Dril Manga Larga",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 62000, // ← Editar precio
    stock: 35,
    descripcion: "Camisa dril manga larga, tallas XS, S, M, L, XL, XXL.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-8.png",
  },
  {
    id: 109,
    nombre: "Camisa Oxford Dama Manga Larga",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 55000, // ← Editar precio
    stock: 30,
    descripcion: "Camisa Oxford dama manga larga, tallas XS, S, M, L, XL. Corte princesa, color según disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-9.png",
  },
  {
    id: 110,
    nombre: "Camisa Oxford Dama Manga Corta",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 50000, // ← Editar precio
    stock: 30,
    descripcion: "Camisa Oxford dama manga corta, tallas XS, S, M, L, XL. Corte princesa, color según disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-10.png",
  },
  {
    id: 111,
    nombre: "Blusa Dama Manga Corta Tela Lino",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 48000, // ← Editar precio
    stock: 25,
    descripcion: "Blusa dama manga corta en tela lino, tallas XS, S, M, L, XL. Corte princesa, color según disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-11.png",
  },
  {
    id: 112,
    nombre: "Blusa Dama Manga ¾ Tela Oxford",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 52000, // ← Editar precio
    stock: 25,
    descripcion: "Blusa dama manga ¾ en tela Oxford, lino o Dacron, tallas XS, S, M, L, XL. Corte princesa, color según disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-12.png",
  },
  {
    id: 113,
    nombre: "Overol Piloto Tela Dril Gabardina o Poliéster",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 95000, // ← Editar precio
    stock: 20,
    descripcion: "Overol piloto en tela dril, gabardina o poliéster, tallas XS, S, M, L, XL, XXL. Tres cremalleras, bolsillos tipo parche, colores según disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-13.png",
  },
  {
    id: 114,
    nombre: "Overol Semipiloto Tela Dril Gabardina",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 88000, // ← Editar precio
    stock: 20,
    descripcion: "Overol semipiloto en tela dril, gabardina o poliéster, tallas XS, S, M, L, XL, XXL. Tres cremalleras, bolsillos tipo parche, colores según disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-14.png",
  },
  {
    id: 115,
    nombre: "Overol Piloto Reflectivo Tela Dril",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 110000, // ← Editar precio
    stock: 15,
    descripcion: "Overol piloto reflectivo en tela dril, tallas XS, S, M, L, XL, XXL. Cuello militar, colores según disponibilidad.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-15.png",
  },
  {
    id: 116,
    nombre: "Overol Dos Piezas Reflectivo",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 120000, // ← Editar precio
    stock: 15,
    descripcion: "Overol dos piezas reflectivo en tela dril, gabardina, opoliéster, tallas XS, S, M, L, XL, XXL.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-16.png",
  },
  {
    id: 117,
    nombre: "Overol Dos Piezas Tela Dril Gabardina",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 105000, // ← Editar precio
    stock: 20,
    descripcion: "Overol dos piezas en tela dril, gabardina, opoliéster, tallas XS, S, M, L, XL, XXL.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-17.png",
  },
  {
    id: 118,
    nombre: "Overol Enterizo Manga Corta",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 98000, // ← Editar precio
    stock: 20,
    descripcion: "Overol enterizo manga corta en tela dril, gabardina, opoliéster, tallas XS, S, M, L, XL, XXL.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-18.png",
  },
  {
    id: 119,
    nombre: "Chaqueta Jean",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 85000, // ← Editar precio
    stock: 25,
    descripcion: "Chaqueta jean, tallas XS, S, M, L, XL, XXL.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-19.png",
  },
  {
    id: 120,
    nombre: "Jean 14 Onzas",
    categoriaId: 1,
    categoria: "Dotación Empresarial",
    precio: 75000, // ← Editar precio
    stock: 30,
    descripcion: "Jean 14 onzas, tallas XS, S, M, L, XL, XXL.",
    imagen: "/Productos/DotacionEmpresarial/dotacion-20.png",
  },

  // ──────────────────────────────────────────────────────────────────────
  // EQUIPO DE ALTURAS (20 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 200 + i + 1,
    nombre: `Equipo De Alturas ${i + 1}`,
    categoriaId: 2,
    categoria: "Equipo De Alturas",
    precio: 80000, // ← Editar precio
    stock: 10 + i,
    descripcion: "Equipo certificado para trabajo seguro en alturas.",
    imagen: `/Productos/EquipoDeAlturas/ealturas-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // PROTECCIÓN AUDITIVA (3 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 3 }, (_, i) => ({
    id: 300 + i + 1,
    nombre: `Protección Auditiva ${i + 1}`,
    categoriaId: 3,
    categoria: "Protección Auditiva",
    precio: 15000, // ← Editar precio
    stock: 50,
    descripcion: "Protección auditiva para ambientes industriales.",
    imagen: `/Productos/ProteccionAuditiva/pauditiva-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // PROTECCIÓN CORPORAL (12 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 12 }, (_, i) => ({
    id: 400 + i + 1,
    nombre: `Protección Corporal ${i + 1}`,
    categoriaId: 4,
    categoria: "Protección Corporal",
    precio: 35000, // ← Editar precio
    stock: 15,
    descripcion: "Protección corporal de alta resistencia.",
    imagen: `/Productos/ProteccionCorporal/pcorporal-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // PROTECCIÓN CRANEAL (8 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 8 }, (_, i) => ({
    id: 500 + i + 1,
    nombre: `Protección Craneal ${i + 1}`,
    categoriaId: 5,
    categoria: "Protección Craneal",
    precio: 28000, // ← Editar precio
    stock: 20,
    descripcion: "Cascos y accesorios de protección craneal certificados.",
    imagen: `/Productos/ProteccionCraneal/pcraneal-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // PROTECCIÓN FACIAL (10 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 600 + i + 1,
    nombre: `Protección Facial ${i + 1}`,
    categoriaId: 6,
    categoria: "Protección Facial",
    precio: 22000, // ← Editar precio
    stock: 18,
    descripcion: "Caretas y protectores faciales para uso industrial.",
    imagen: `/Productos/ProteccionFacial/pfacial-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // PROTECCIÓN MANUAL (15 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 15 }, (_, i) => ({
    id: 700 + i + 1,
    nombre: `Protección Manual ${i + 1}`,
    categoriaId: 7,
    categoria: "Protección Manual",
    precio: 18000, // ← Editar precio
    stock: 30,
    descripcion: "Guantes industriales para todo tipo de trabajo.",
    imagen: `/Productos/ProteccionManual/pmanual-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // PROTECCIÓN RESPIRATORIA (18 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 18 }, (_, i) => ({
    id: 800 + i + 1,
    nombre: `Protección Respiratoria ${i + 1}`,
    categoriaId: 8,
    categoria: "Protección Respiratoria",
    precio: 12000, // ← Editar precio
    stock: 40,
    descripcion: "Mascarillas y respiradores para ambientes contaminados.",
    imagen: `/Productos/ProteccionRespiratoria/prespiratoria-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // PROTECCIÓN VISUAL (8 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 8 }, (_, i) => ({
    id: 900 + i + 1,
    nombre: `Protección Visual ${i + 1}`,
    categoriaId: 9,
    categoria: "Protección Visual",
    precio: 14000, // ← Editar precio
    stock: 25,
    descripcion: "Gafas y caretas de protección visual industrial.",
    imagen: `/Productos/ProteccionVisual/pvisual-${i + 1}.png`,
  })),

  // ──────────────────────────────────────────────────────────────────────
  // SEÑALIZACIÓN (14 productos)
  // ──────────────────────────────────────────────────────────────────────
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 1000 + i + 1,
    nombre: `Señalización ${i + 1}`,
    categoriaId: 10,
    categoria: "Señalización",
    precio: 8000, // ← Editar precio
    stock: 35,
    descripcion: "Elementos de señalización para seguridad industrial.",
    imagen: `/Productos/Señalizacion/señalizacion-${i + 1}.png`,
  })),

];

// Funciones utilitarias
export const getProductoById = (id) => productos.find(p => p.id === parseInt(id));
export const getProductosByCategoria = (categoriaId) => productos.filter(p => p.categoriaId === parseInt(categoriaId));
export const getCategoriaBySlug = (slug) => categorias.find(c => c.slug === slug);