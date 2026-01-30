import React from "react";
import Navbar from "../Componentes/Navbar";
import Inicio from "./Inicio";
import Categorias from "./Categorias";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      
      <main>
        <section id="inicio">
          <Inicio />
        </section>
        <section id="categorias">
          <Categorias />
        </section>
        
      </main>
    </div>
  );
}