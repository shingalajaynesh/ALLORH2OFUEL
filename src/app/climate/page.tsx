"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Compass, Cloud, Sun, Eye, Navigation, Activity } from "lucide-react";

export default function ClimateIntelligence() {
  const [isRaining, setIsRaining] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Middle East");

  const regionalData: Record<string, { humidity: string; temp: string; waterIndex: string; stability: string }> = {
    "Middle East": { humidity: "34%", temp: "42°C", waterIndex: "Critical [0.12]", stability: "Nominal" },
    "North Africa": { humidity: "28%", temp: "39°C", waterIndex: "Severe [0.18]", stability: "Nominal" },
    "Central Australia": { humidity: "22%", temp: "38°C", waterIndex: "Critical [0.08]", stability: "Optimizing" },
    "Western India": { humidity: "65%", temp: "31°C", waterIndex: "Moderate [0.44]", stability: "Active Sync" },
  };

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={60} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">REAL-TIME TELEMETRY</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            CLIMATE INTELLIGENCE SYSTEM
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Synchronized satellite feeds mapping water vapor currents, thermal indexes, and regional precipitation targets.
          </p>
        </div>

        {/* Intelligence Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Virtual Earth map container */}
          <div className="lg:col-span-2 border border-white/10 rounded-3xl bg-slate-900/60 p-6 backdrop-blur-md relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" /> PLANETARY WEATHER TRACKER
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase">SAT FEED ID: ALLOR-E-09</span>
              </div>

              {/* Map visual mock */}
              <div className="w-full h-64 bg-slate-950/60 rounded-xl relative border border-white/5 overflow-hidden flex items-center justify-center">
                {/* SVG Earth Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Simulated Radar scanner sweep */}
                <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-cyan-500/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-cyan-500/5" />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-2 border-cyan-500/40 animate-spin" />
                </div>

                <div className="relative z-10 text-center font-mono space-y-2">
                  <span className="text-cyan-400 animate-pulse text-[10px] block">SCANNING SECTORS...</span>
                  <div className="flex gap-2 justify-center">
                    {Object.keys(regionalData).map((reg) => (
                      <button
                        key={reg}
                        onClick={() => setSelectedRegion(reg)}
                        className={`text-[9px] px-2 py-1 rounded border transition-all ${selectedRegion === reg
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                            : "bg-white/5 text-slate-500 border-white/5 hover:text-cyan-400"
                          }`}
                      >
                        {reg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>SCAN RAD: 5400 km</span>
              <span>GEO-STATIONARY ORBIT (35,786 km)</span>
            </div>
          </div>

          {/* Regional details card */}
          <div className="border border-white/10 rounded-3xl bg-slate-900/60 p-6 backdrop-blur-md flex flex-col justify-between text-left">
            <div className="space-y-6">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 uppercase">
                <Activity className="w-3.5 h-3.5" /> Region Analytics: {selectedRegion}
              </span>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-slate-400">Atmospheric Humidity</span>
                  <span className="text-xs font-mono text-slate-200">{regionalData[selectedRegion].humidity}</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-slate-400">Mean Temperature</span>
                  <span className="text-xs font-mono text-slate-200">{regionalData[selectedRegion].temp}</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-slate-400">Water Deficit Index</span>
                  <span className="text-xs font-mono text-rose-400">{regionalData[selectedRegion].waterIndex}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-xs text-slate-400">System Stability</span>
                  <span className="text-xs font-mono text-emerald-400">{regionalData[selectedRegion].stability}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsRaining(!isRaining)}
              className="w-full mt-8 py-3.5 px-4 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono tracking-widest text-cyan-300 transition-all flex items-center justify-center gap-2"
            >
              <Eye className="w-3.5 h-3.5" /> SIMULATE PRECIPITATION ON TARGET
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
