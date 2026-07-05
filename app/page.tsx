'use client';
import { useState } from 'react';
export default function LumoraSite() {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [config, setConfig] = useState({style: 'Rectangular Flat', size: 'Medium', feature: 'Solar + Terrace'});

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Hero */}
      <header className="bg-zinc-900 text-white py-24 text-center">
        <h1 className="text-7xl font-bold">Lumora Homes</h1>
        <p className="text-2xl mt-4">Swedish Modern • SIP Prefab • Practical Flat-Roof Designs</p>
        <p className="mt-2">Square & Rectangular • Solar-Ready • Rooftop Living • Built in Weeks</p>
        <button className="mt-8 bg-emerald-600 px-8 py-4 rounded-full text-lg">Start Your Configurator</button>
      </header>

      {/* Gallery with good images */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <img src="https://picsum.photos/id/1015/600/400" alt="Modern rectangular flat roof SIP home with large windows and solar panels in forest setting" className="rounded-xl" />
        <img src="https://picsum.photos/id/201/600/400" alt="Square cubic flat roof prefab house with rooftop terrace and wood cladding" className="rounded-xl" />
        <img src="https://picsum.photos/id/106/600/400" alt="Luxury elongated rectangular home flat roof, extensive glazing, practical open design" className="rounded-xl" />
        <p className="col-span-full text-center text-sm">High-quality placeholder images — replace with your professional renders of flat-roof Lumora models</p>
      </section>

      {/* Configurator + Form */}
      <section className="p-8 bg-white">
        <h2 className="text-3xl font-semibold">Build Your Lumora Home</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <select onChange={e => setConfig({...config, style: e.target.value})} className="border p-3 w-full">
              <option>Rectangular Flat-Roof</option>
              <option>Square Cube</option>
              <option>Elongated Villa + Terrace</option>
            </select>
            <button className="mt-4 bg-zinc-900 text-white px-6 py-3">Update Preview • See Savings</button>
          </div>
          <form className="space-y-4">
            <input placeholder="Name" className="border p-3 w-full" onChange={e=>setFormData({...formData, name: e.target.value})} />
            <input placeholder="Email" type="email" className="border p-3 w-full" />
            <textarea placeholder="Tell us about your site or preferences (flat roof, solar, size)" className="border p-3 w-full h-32" />
            <button type="submit" className="bg-emerald-600 text-white px-8 py-3 w-full">Get Quote & 3D Preview →</button>
            <p className="text-xs text-green-600">Form ready — connects to email or Supabase in next step</p>
          </form>
        </div>
      </section>

      <footer className="bg-zinc-900 text-white p-8 text-center">
        Lumora Homes © • Swedish SIP Prefab • Efficient Flat-Roof Innovation
        <div>Live on Vercel • GitHub repo updated</div>
      </footer>
    </div>
  );
}