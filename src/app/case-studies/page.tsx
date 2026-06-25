"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { MapPin, Calendar, Award, CheckCircle } from "lucide-react";

export default function CaseStudies() {
  const [isRaining, setIsRaining] = useState(false);

  const cases = [
    {
      region: "UAE // AL HAJAR MOUNTAINS",
      title: "Sovereign Aquifer Recharge Campaign",
      duration: "12-Month Scheduled Runs",
      summary: "Deployed 12 ground ionization arrays coupled with real-time satellite telemetry tracking moisture channels. Induced 45 rain events, yielding a 24.3% increase in ground moisture density and raising catchment levels significantly.",
      precip: "+24.3% recharge boost",
      status: "Verified by Ministry of Energy"
    },
    {
      region: "SAUDI ARABIA // NAJD PLATEAU",
      title: "Arid Arable Land Reclamation",
      duration: "18-Month Deployment",
      summary: "Induced targeted micro-precipitation sequences during the winter and spring periods to restore 15,000 hectares of desertified soils, supporting stable wheat cultivation without groundwater depletion.",
      precip: "15,000 Hectares Recovered",
      status: "Verified by Agricultural Union"
    },
    {
      region: "AUSTRALIA // MURRAY-DARLING BASIN",
      title: "River Basin Flow Mitigation Campaign",
      duration: "8-Month Drought Rescue Run",
      summary: "Mitigated critical dry runs in Australia's vital river system. Deployed cloud physics coalescence arrays to replenish drying lakes, protecting native biodiversity indices and crop water channels.",
      precip: "Nominal Flow Restored",
      status: "Ecological Compliance Approved"
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={70} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">EMPIRICAL PROOF</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            CASE STUDIES & OPERATIONS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Documented results from weather engineering arrays deployed across arid and desert regions globally.
          </p>
        </div>

        {/* Case Cards */}
        <div className="space-y-8">
          {cases.map((cs, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row gap-8 justify-between hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" /> {cs.region}
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {cs.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-slate-200">{cs.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{cs.summary}</p>
              </div>

              <div className="flex flex-col justify-between items-start md:items-end gap-6 md:w-64 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8 text-left md:text-right">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">MEASURED IMPACT</span>
                  <div className="text-lg font-mono text-emerald-400 font-bold flex items-center md:justify-end gap-1.5">
                    <Award className="w-4 h-4" /> {cs.precip}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">COMPLIANCE CODE</span>
                  <div className="text-xs font-mono text-slate-300 flex items-center md:justify-end gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> {cs.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
