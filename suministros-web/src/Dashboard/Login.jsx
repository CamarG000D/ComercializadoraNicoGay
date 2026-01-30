import React from 'react';
import { Github, Twitter, Mail, Key, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Contenedor principal dividido */}
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Sección de imagen (izquierda) */}
        <div className="hidden md:block md:w-1/2 bg-indigo-600">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
            {/* Overlay para mejorar legibilidad del texto opcional */}
            <div className="h-full w-full bg-indigo-800 bg-opacity-40 flex items-center justify-center p-8">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Bienvenido de vuelta</h2>
                <p className="text-indigo-100">Ingresa tus credenciales para acceder a tu cuenta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de formulario (derecha) */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Login</h2>
          
          <form className="space-y-6">
           {/* Campo Email */}
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <Mail className="h-5 w-5 text-gray-400" />
  </div>
  <input
    id="email"
    name="email"
    type="email"
    placeholder="Nombre de Usuario"
    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  /> 
</div>

{/* Campo Password */}
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <Key className="h-5 w-5 text-gray-400" />
  </div>
  <input
    id="password"
    name="password"
    type="password"
    placeholder="Contraseña"
    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>

            {/* Botón de Login */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Enlaces inferiores */}
          <div className="mt-6 flex justify-between text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Create account
            </a>
          </div>

          {/* Divisor y redes sociales */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Github className="h-5 w-5 text-gray-600" />
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Twitter className="h-5 w-5 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;