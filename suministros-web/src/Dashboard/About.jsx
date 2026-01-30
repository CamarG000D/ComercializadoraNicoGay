import React from 'react';

export default function About() {
    
  return (
   
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Want anything to be easy with{' '}
              <span className="text-gray-900">LaslesVPN.</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
            </p>

            <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-red-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-24 h-24 bg-red-200 rounded-full"></div>
                  </div>
                  <p className="text-gray-400 text-sm">Imagen ilustrativa aquí</p>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 bg-red-100 rounded-lg opacity-50"></div>
              <div className="absolute bottom-12 left-8 w-8 h-8 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 right-4 w-6 h-6 bg-green-100 rounded opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">90+</h3>
              <p className="text-gray-600">Users</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-600">Locations</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Servers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}