import React from "react";
import Inicio from "./Inicio";
import Categorias from "./Categorias";
import About from "./About";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section id="inicio"><Inicio /></section>
        <section id="categorias"><Categorias /></section>
        <section id="nosotros"><About /></section>
        <section id="testimonios"><Testimonios /></section>
        <section id="contacto"><Contacto /></section>
      </main>
    </div>
  );
}