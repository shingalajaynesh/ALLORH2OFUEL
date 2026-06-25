"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { TrendingUp, Award, Activity, Shield } from "lucide-react";

export default function Investors() {
  const [isRaining, setIsRaining] = useState(false);

  const marketMetrics = [
    { label: "Target Market Size (GCC & APAC)", val: "$14.2 Billion" },
    { label: "Carbon Offset Potential", val: "4.8M Metric Tons" },
    { label: "Project IRR (Sovereign)", val: "22.4%" },
    { label: "Secured Funding Round (Series A)", val: "$45 Million" }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={30} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">FINANCIAL PORTAL</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            INVESTOR ASSURANCE & ESG
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Market capitalization projections, ESG scaling pathways, and seed funding telemetries.
          </p>
        </div>

        {/* Projections Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {marketMetrics.map((mt, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl bg-slate-900/40 p-6 backdrop-blur-md hover:border-cyan-500/20 transition-all duration-300"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2">{mt.label}</span>
              <span className="text-2xl font-mono font-bold text-cyan-400">{mt.val}</span>
            </div>
          ))}
        </div>

        {/* Investment Rationale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-light text-slate-100 uppercase tracking-tight flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" /> Scalable Global Market Demand
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              By 2030, global freshwater demands are projected to outstrip supply by 40%. Traditional water desalination requires heavy fossil fuel structures and yields corrosive brine residuals. ALLOR RAIN's weather modification presents a lower-cost, clean alternative that acts directly on regional atmospheres, securing sovereign water reserves at scale.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-light text-slate-100 uppercase tracking-tight flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" /> Regulatory ESG Conformance
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Our projects align with ESG directives, enabling sovereign states to claim carbon offsets via green restoration and regional reforestation loops. Every drop generated is recorded and cross-verified via satellite and ground humidity sensors, ensuring audit trails for carbon-credit emission offsets.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
