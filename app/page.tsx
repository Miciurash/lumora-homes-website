'use client';
 import { useState } from 'react';
 export default function Lumora() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="font-sans bg-zinc-50 text-zinc-900">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white border-b shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-3xl font-bold tracking-tight">Lumora</div>
          <div className="flex gap-8 items-center">
            <a href="#homes">Homes</a><a href="#tech">Technology</a><a href="#config">Configure</a><a href="#contact">Contact</a>
            <button className="bg-emerald-700 text-white px-6 py-2 rounded-full">Get Quote</button>
          </div>
        </div>
      </nav>
      {/* Hero - Impressive */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://picsum.photos/id/1015/2000/1200")'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-7xl font-bold">Lumora Homes</h1>
          <p className="text-3xl mt-4">Swedish Modern • Rectangular Flat-Roof SIP Prefab • Engineered for Life</p>
          <p className="mt-6 text-xl">Fast. Sustainable. Impossibly Beautiful. With useful flat roofs for solar & living space.</p>
          <div className="mt-10 flex gap-4 justify-center">
            <button className="bg-white text-zinc-900 px-10 py-4 rounded-xl text-lg font-medium">Browse Homes</button>
            <button className="border border-white text-white px-10 py-4 rounded-xl">Start Configurator</button>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section id="homes" className="py-20">
        <h2 className="text-center text-4xl font-bold">Our Flat-Roof Masterpieces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 mt-12">
          <img src="https://picsum.photos/id/201/600/400" alt="Rectangular flat roof home with terrace" className="rounded-2xl" />
          <img src="https://picsum.photos/id/866/600/400" alt="Square modern SIP home solar roof" className="rounded-2xl" />
          <img src="https://picsum.photos/id/1016/600/400" alt="Modular rectangular with glass walls" className="rounded-2xl" />
        </div>
      </section>
      {/* Form */}
      <section id="contact" className="bg-zinc-900 text-white py-20">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl text-center">Get Your Personalized Quote</h2>
          <form className="mt-8 space-y-6" onSubmit={(e)=>{e.preventDefault(); setFormSubmitted(true); }}>
            <input placeholder="Name" className="w-full p-4 rounded" />
            <input placeholder="Email" type="email" className="w-full p-4 rounded" />
            <select className="w-full p-4 rounded"><option>Flat-Roof Rectangular • 150m²</option><option>Larger Family • 250m²</option></select>
            <textarea placeholder="Preferences (solar, terrace, etc.)" className="w-full p-4 rounded h-32"></textarea>
            <button type="submit" className="w-full bg-emerald-600 py-4 rounded">Send Request →</button>
            {formSubmitted && <p className="text-emerald-400 text-center">✅ Request received! Team will contact soon.</p>}
          </form>
        </div>
      </section>
      <footer className="text-center py-12 text-zinc-500">Lumora Homes © • Built with Next.js on Vercel • Impressive & Ready for Business</footer>
    </div>
  );
 }