"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Heart, Leaf, ShieldAlert, Cpu } from "lucide-react";

export default function Sustainability() {
  const [isRaining, setIsRaining] = useState(false);

  const audits = [
    {
      icon: <Leaf className="w-5 h-5 text-emerald-400" />,
      title: "100% Chemical Free Operations",
      desc: "Our ionization arrays emit pure electrostatic charges directly into air currents, utilizing pre-existing cloud dust. Zero usage of silver iodide, dry ice, or heavy aerosol pollutants."
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      title: "Biological Coexistence Audits",
      desc: "Routine ecological tracking across GCC mountains confirms that artificial precipitation matches local biology cycles, preserving biodiversity without altering long-term atmospheric dynamics."
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Low Carbon Footprint Arrays",
      desc: "Emitters run on solar energy buffers, drawing minor power grid resources (less than 2.4kW per emitter array node). Entire system remains carbon neutral."
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={50} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">ECOLOGICAL COEXISTENCE</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            SUSTAINABILITY & AUDITS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Ensuring planetary climate stabilization by respecting atmospheric physics, local biology, and ecological balances.
          </p>
        </div>

        {/* Audits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audits.map((aud, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl bg-slate-900/40 p-6 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-xl w-fit">{aud.icon}</div>
                <h3 className="text-lg font-light text-slate-200">{aud.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{aud.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                AUDITED: PASSED NOMINAL
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
