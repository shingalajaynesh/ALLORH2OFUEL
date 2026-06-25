"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Lock, Send, Terminal, HelpCircle, Activity } from "lucide-react";

export default function Contact() {
  const [isRaining, setIsRaining] = useState(false);
  const [form, setForm] = useState({ name: "", agency: "", email: "", sector: "Sovereign Program", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", agency: "", email: "", sector: "Sovereign Program", message: "" });
    }, 4000);
  };

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={30} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-1 space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" /> SECURE TUNNEL ONLINE
            </span>
            <h1 className="text-4xl font-light uppercase tracking-tight text-slate-100 leading-tight">
              SECURE DECK INTAKE
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Routing sovereign hydrological tenders, climate intelligence proposals, and research inquiries.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
            <div>
              <span className="text-slate-400 block mb-1">ENCRYPTION PROTOCOL:</span>
              <span>Quantum AES-GCM-256 Bit</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">AUDIT DIRECTIVES:</span>
              <span>Planetary Environmental Security League</span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-2 border border-white/10 rounded-3xl bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          {submitted ? (
            <div className="py-20 text-center font-mono space-y-4 text-emerald-400 text-xs flex flex-col items-center justify-center">
              <Activity className="w-8 h-8 animate-pulse mb-2" />
              <span>TRANSMISSION ROUTED SECURELY</span>
              <span className="text-slate-500 text-[10px]">COORDINATES RECORDED: [24.4518° N, 54.3774° E]</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2">Representative Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Dr. Priya Sharma"
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2">Government / Institution</label>
                  <input
                    type="text"
                    required
                    value={form.agency}
                    onChange={(e) => setForm({ ...form, agency: e.target.value })}
                    placeholder="e.g. Ministry of Environment"
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2">Secure Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. representative@gov.ae"
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2">Inquiry Sector</label>
                  <select
                    value={form.sector}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-400 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Sovereign Program">Sovereign Program</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="ESG / Investment">ESG / Investment</option>
                    <option value="General Query">General Query</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2">Treaty Proposal / Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Provide detailed description of project coordinates, rainfall deficits, or scientific requirements..."
                  className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-mono text-xs tracking-widest font-black transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" /> INITIATE SECURED HANDSHAKE
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
