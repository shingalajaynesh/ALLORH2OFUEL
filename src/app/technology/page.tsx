"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Cpu, Terminal, Zap, Shield, HelpCircle, Activity } from "lucide-react";

export default function Technology() {
  const { t } = useLanguage();
  const [isRaining, setIsRaining] = useState(false);
  const [activeArray, setActiveArray] = useState<string>("Array Alpha");

  const techSpecs = [
    {
      name: "Emitter Core V4",
      voltage: "+150kV DC",
      emissionRate: "2.4e16 ions/sec",
      efficiency: "99.4%",
      status: "Operational"
    },
    {
      name: "Vapor Sensor Grid",
      voltage: "24V telemetry",
      emissionRate: "N/A (Receiver)",
      efficiency: "98.9%",
      status: "Operational"
    },
    {
      name: "Satellite Targeting Array",
      voltage: "Quantum Transceiver",
      emissionRate: "Laser pulse trigger",
      efficiency: "99.9%",
      status: "Active Tracking"
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={60} ionization={80} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">PHYSICAL ARCHITECTURE</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            THE IONIZATION INFRASTRUCTURE
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Explaining the physical mechanisms of ground-to-cloud electrostatic rain modification.
          </p>
        </div>

        {/* Emitter grid simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Schematic visualizer */}
          <div className="lg:col-span-2 border border-white/10 rounded-3xl bg-slate-900/60 p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between min-h-[350px]">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" /> LIVE ARRAY TELEMETRY
                </span>
                <div className="flex gap-2">
                  {["Array Alpha", "Array Beta", "Array Gamma"].map((arr) => (
                    <button
                      key={arr}
                      onClick={() => setActiveArray(arr)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-md transition-colors ${activeArray === arr
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          : "bg-white/5 text-slate-400 hover:text-cyan-400"
                        }`}
                    >
                      {arr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Graphical representation */}
              <div className="w-full h-40 bg-slate-950/60 rounded-xl relative border border-white/5 overflow-hidden flex items-center justify-center font-mono text-[10px] text-slate-500">
                {/* Emitter poles */}
                <div className="absolute bottom-0 left-1/4 w-[2px] h-20 bg-gradient-to-t from-cyan-500 to-transparent flex flex-col items-center">
                  <span className="absolute -top-6 text-cyan-400 animate-pulse">+150kV</span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-[2px] h-24 bg-gradient-to-t from-cyan-500 to-transparent flex flex-col items-center">
                  <span className="absolute -top-6 text-cyan-400 animate-pulse">+180kV</span>
                </div>
                <div className="absolute bottom-0 left-3/4 w-[2px] h-20 bg-gradient-to-t from-cyan-500 to-transparent flex flex-col items-center">
                  <span className="absolute -top-6 text-cyan-400 animate-pulse">+150kV</span>
                </div>
                {/* Wind currents */}
                <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-20">
                  <div className="h-[1px] bg-cyan-400 w-full animate-pulse" />
                  <div className="h-[1px] bg-emerald-400 w-full animate-pulse delay-100" />
                </div>
                <span className="relative z-10 text-center">
                  {activeArray} ACTIVE // ION DENSITY FEED BACK // SECURE SCANNER
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 text-left border-t border-white/5 pt-4">
              <div>
                <span className="text-[9px] font-mono text-slate-500">EMISSION FREQ</span>
                <p className="text-sm font-mono text-slate-200">540 Hz</p>
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-500">CHARGE COEFF</span>
                <p className="text-sm font-mono text-emerald-400">+1.22</p>
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-500">SAT FEEDBACK</span>
                <p className="text-sm font-mono text-cyan-400">NOMINAL</p>
              </div>
            </div>
          </div>

          {/* Specs list */}
          <div className="border border-white/10 rounded-3xl bg-slate-900/60 p-6 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> COMPONENT STATUS LOG
              </span>
              <div className="space-y-3">
                {techSpecs.map((spec, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-2 last:border-0">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300 font-bold">{spec.name}</span>
                      <span className="text-emerald-400">{spec.status}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                      <span>Rate: {spec.emissionRate}</span>
                      <span>Volt: {spec.voltage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsRaining(!isRaining)}
              className="w-full mt-6 py-3 px-4 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono tracking-widest text-cyan-300 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-3.5 h-3.5" /> TRIGGER LOCAL ION TEST
            </button>
          </div>
        </div>

        {/* Detailed physics explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-light text-slate-100 uppercase tracking-tight flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" /> Ionization Emitter Array Physics
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Ground array structures deploy a cascade of micro-electrodes charged with direct currents exceeding 150 kilovolts. These emitters strip electrons from local particulate matter. Wind dynamics transport this electrostatically charged dust to cloud moisture formations. The increased electrostatic fields catalyze coalescence, enabling microscopic water vapor drops to bind together into precipitable mass.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-light text-slate-100 uppercase tracking-tight flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" /> Dynamic Cloud Seeding Feedback Loop
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Unlike classical chemical seeding (silver iodide), which disperses particulate agents, ALLOR RAIN is entirely electronic. Electrostatic charging uses the atmosphere's pre-existing particulate load. Satellite trackers measure cloud base charge levels, adjusting grounding arrays dynamically in real time to avoid over-charging, which ensures a completely controllable, clean rainfall.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
