"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Layers, Droplet, Sprout, Landmark, ShieldCheck } from "lucide-react";

export default function Solutions() {
  const [isRaining, setIsRaining] = useState(false);

  const solutionList = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-400" />,
      title: "Agricultural Yield Stabilization",
      desc: "Guarantees crop watering patterns during critical transpiration phases. Decreases Reliance on costly irrigation systems by inducing micro-precipitation clouds over catchment zones.",
      metrics: "Average crop yield increase: +28%"
    },
    {
      icon: <Landmark className="w-6 h-6 text-cyan-400" />,
      title: "Sovereign Aquifer Recharge",
      desc: "Directs heavy precipitation loops over natural structural aquifers, recharging underground reserves to safeguard municipal drinking supplies in GCC and Middle East deserts.",
      metrics: "Aquifer level recharge rate: +24.3%"
    },
    {
      icon: <Droplet className="w-6 h-6 text-indigo-400" />,
      title: "Industrial & Hydroelectric Assurance",
      desc: "Replenishes reservoirs feeding major hydroelectric plants and manufacturing zones, protecting regional energy grids against drought-induced load shedding.",
      metrics: "Hydroelectric capacity boost: +12%"
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={50} ionization={40} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">OPERATIONAL APPLICATION</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            SYSTEM SOLUTIONS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Scalable meteorological engineering systems engineered to protect agricultural, regional municipal, and global sovereign water reserves.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionList.map((sol, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl bg-slate-900/40 p-6 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-xl w-fit">{sol.icon}</div>
                <h3 className="text-xl font-light text-slate-200">{sol.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{sol.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> {sol.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
