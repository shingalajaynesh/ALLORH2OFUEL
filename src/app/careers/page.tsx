"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Careers() {
  const [isRaining, setIsRaining] = useState(false);

  const jobs = [
    {
      title: "Lead Atmospheric Physicist // Ionization Systems",
      loc: "Abu Dhabi Hub, UAE",
      type: "Full-Time // On-Site",
      desc: "Lead mathematical modeling of ground ionization plume dispersion under high-voltage DC field constraints. Ph.D. in Fluid Dynamics or Meteorology required."
    },
    {
      title: "Lead Cloud Chemist // Aerosol Micro-Physics",
      loc: "Zurich Research Lab, Switzerland",
      type: "Full-Time // Hybrid",
      desc: "Model secondary aerosol nucleation dynamics and electrostatic attractions under shifting humidity variables. Deep understanding of cloud condensation nuclei (CCN) physics."
    },
    {
      title: "Senior AI Telemetry Architect // Wind Vector Prediction",
      loc: "Remote // Global Ops Hub",
      type: "Full-Time // Remote",
      desc: "Build machine learning models to analyze Perlin wind noise profiles and configure grounding array emitters dynamically. Mastery of Python, PyTorch, and spatial climate datasets."
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={30} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">CAREERS</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            JOIN WEATHER ENGINEERING OPERATIONS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Collaborate with climatologists, atmospheric physicists, and AI developers to stabilize planetary water systems.
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row gap-6 justify-between items-start md:items-center hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="space-y-3 flex-1 text-left">
                <h3 className="text-xl font-light text-slate-200">{job.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light max-w-2xl">{job.desc}</p>
                <div className="flex flex-wrap gap-4 text-[10px] font-mono text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {job.loc}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {job.type}
                  </span>
                </div>
              </div>

              <button
                onClick={() => alert(`Redirecting to application portal for: ${job.title}`)}
                className="w-full md:w-auto py-2.5 px-5 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500/10 text-xs font-mono text-cyan-300 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
              >
                APPLY FOR ROLE <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
