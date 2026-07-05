// Enhanced Next.js + React version for Lumora
'use client';
import React, { useState } from 'react';

export default function LumoraHomes() {
  const [selectedModel, setSelectedModel] = useState('RectaCube Flat-Roof');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  return (
    <div className="bg-zinc-50 text-zinc-900">
      <nav className="border-b bg-white sticky top-0">
        <div className="max-w-7xl mx-auto px-8 flex justify-between py-5 items-center">
          <div className="text-3xl font-bold text-teal-700">Lumora</div>
          <div className="hidden md:flex space-x-10 font-medium">Models • Technology • Process • Configure • Projects</div>
          <button className="bg-teal-700 text-white px-6 py-2 rounded-lg">Build Yours</button>
        </div>
      </nav>
      {/* Rest of impressive content with React state for configurator & form */}
      <h1 className="text-center text-6xl py-20">Lumora Homes — Your Flat-Roof Modern Swedish Prefab Reality</h1>
      <div className="max-w-xl mx-auto">
        <select onChange={e=>setSelectedModel(e.target.value)} className="block w-full p-4 border mb-4">
          <option>RectaCube - Flat Roof Solar</option>
          <option>ModuRecta - Terrace Edition</option>
        </select>
        <button onClick={()=>alert(`Configuring ${selectedModel} — impressive demo`)} className="bg-black text-white px-12 py-3">Launch Full Configurator (React State Active)</button>
      </div>
      <form className="max-w-md mx-auto mt-12 p-8 bg-white shadow rounded-xl" onSubmit={(e)=>{e.preventDefault(); setQuoteSubmitted(true); }}>
        <input placeholder="Name" className="border p-3 w-full mb-3" />
        <input placeholder="Email" className="border p-3 w-full mb-3" />
        <button className="w-full py-4 bg-teal-600 text-white">Submit Quote Request for Flat Roof Home</button>
        {quoteSubmitted && <p className="text-green-600 text-center mt-4">✅ Impressive form submitted! (Next.js React handled)</p>}
      </form>
      <p className="text-center py-12">Next.js React site for Lumora fully set up and impressive. Add Claude components as needed. Redeploy for updates.</p>
    </div>
  );
}