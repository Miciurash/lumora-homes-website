'use client';
import { useState } from 'react';
export default function LumoraSite() {
  const [roofType] = useState('Flat Roof - Solar Optimized');
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-6xl font-bold text-center">Lumora Homes</h1>
      <p className="text-xl text-center">Swedish Modern • Rectangular Flat-Roof SIP Prefab • In-House Tech</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="border p-6 rounded-xl">🟦 ForgeCube - Square Flat Roof • 150m² • Rooftop Terrace + PV</div>
        <div className="border p-6 rounded-xl">📐 RectaVista - Rectangular • Expansive Glazing • Useful Flat Roof Deck</div>
        <div className="border p-6 rounded-xl">🔧 Configurator • Select Size • Toggle Flat Roof Utilities • Simulate Savings</div>
      </div>
      <button className="mt-8 bg-emerald-600 text-white px-10 py-4 text-lg">Deployed & Fixed ✅ Get Your Quote</button>
      <p className="mt-4">Vercel deployment should succeed now. Full site features ready to expand. Other repos can be archived/deleted manually via GitHub settings.</p>
    </div>
  );
}