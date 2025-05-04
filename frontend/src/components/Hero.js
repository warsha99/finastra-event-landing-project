import React from 'react';
import heroImage from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center h-[500px] flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-finastra-blue/80"></div>
      <div className="container mx-auto relative z-10 text-white px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Reimagine Banking:
          </h1>
          <p className="text-xl md:text-2xl mb-6">
          Adapt. Evolve. Thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-cogent-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Register Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-finastra-blue text-white px-8 py-3 rounded-lg font-semibold transition">
              Download Agenda
            </button>
          </div>
        </div>
      </div>
     
    </section>
  );
}