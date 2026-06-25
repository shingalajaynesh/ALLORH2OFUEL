"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { ShieldAlert, Landmark, FileCheck, HelpCircle } from "lucide-react";

export default function Government() {
  const [isRaining, setIsRaining] = useState(false);

  const programs = [
    {
      title: "Sovereign Hydrological Security Contracts",
      desc: "Comprehensive weather planning and operational precipitation grids designed for national ministries of environment. Includes array setups, satellite tracking infrastructure, and environmental monitoring systems."
    },
    {
      title: "Trans-Boundary Meteorological Accord Management",
      desc: "Pre-configured treaty outlines and legal frameworks designed to coordinate atmospheric resource allocation between neighboring sovereign nations, preventing clouds or rainfall intercept conflicts."
    },
    {
      title: "Arid Region Emergency Drought Mitigation",
      desc: "Emergency rapid response array systems for critical reservoir depleting periods. Ionization infrastructure deployed within 14 days of treaty signing to stabilize water basins."
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={60} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">SOVEREIGN FRAMEWORKS</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            GOVERNMENT & STATE PROGRAMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Standardized treaty contracts, hydrological planning matrices, and security models designed for ministries of state.
          </p>
        </div>

        {/* State programs checklist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl bg-slate-900/40 p-6 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-xl w-fit">
                  <Landmark className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-light text-slate-200">{prog.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{prog.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                <FileCheck className="w-4 h-4" /> COMPLIANT WITH UN WEATHER PROTOCOLS
              </div>
            </div>
          ))}
        </div>

        {/* Legal and boundary issues */}
        <div className="p-6 sm:p-8 rounded-3xl border border-rose-500/10 bg-rose-500/5 backdrop-blur-md max-w-3xl mx-auto space-y-4 text-left">
          <h3 className="text-lg font-light text-rose-300 uppercase tracking-tight flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-400" /> State Treaty Boundaries
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Atmospheric engineering works within active planetary systems. ALLOR RAIN complies with international covenants governing cloud management and weather modification. We ensure all arrays are positioned to respect cross-border weather channels, preventing resource intercept and securing sovereign transparency.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
