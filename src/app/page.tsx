"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { AtmosphereCanvas } from "../components/AtmosphereCanvas";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RainGenerator } from "../components/RainGenerator";
import {
  ShieldAlert,
  Cpu,
  Wind,
  Droplet,
  Compass,
  Activity,
  TrendingUp,
  MapPin,
  Database,
  ArrowRight,
  Send,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t, dir } = useLanguage();
  const [isRaining, setIsRaining] = useState(false);
  const [humidity, setHumidity] = useState(48);
  const [ionization, setIonization] = useState(35);
  const [contactForm, setContactForm] = useState({ name: "", agency: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: "", agency: "", message: "" });
    }, 4000);
  };

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      {/* Background Interactive Simulator */}
      <AtmosphereCanvas
        isRaining={isRaining}
        humidity={humidity}
        ionization={ionization}
      />

      {/* Cybernetic Telemetry Navigation */}
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      {/* 1. HERO SECTION: Immersive Earth Deck */}
      <section className="relative min-h-screen pt-36 pb-20 px-4 flex flex-col justify-between items-center max-w-[1400px] mx-auto w-full text-center">
        {/* Dynamic Telemetry Accents */}
        <div className="absolute top-28 left-4 font-mono text-[9px] text-slate-500 hidden xl:flex flex-col gap-1 items-start text-left">
          <span>// COMPLIANCE: WCAG AAA</span>
          <span>// REGION: GLOBAL_SOVEREIGN</span>
          <span>// TELEMETRY: SYNC_OK</span>
        </div>

        <div className="absolute top-28 right-4 font-mono text-[9px] text-slate-500 hidden xl:flex flex-col gap-1 items-end text-right">
          <span>IONIZATION GRID V12.4</span>
          <span>ATMOSPHERE TEMP: 18.4°C</span>
          <span>BAROMETRIC DRIFT: NEGATIVE</span>
        </div>

        {/* Center Contents */}
        <div className="my-auto space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            <Activity className="w-3 h-3 animate-pulse" /> PLANETARY WATER INITIATIVE
          </div>

          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-slate-100 uppercase">
            {t("heroTitle")}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/technology"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 hover:border-cyan-400/60 text-xs font-mono tracking-widest text-cyan-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              EXPLORE SCIENCE
            </Link>
            <button
              onClick={() => {
                const element = document.getElementById("configurator");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500/10 text-xs font-mono tracking-widest text-slate-300 transition-colors"
            >
              RUN SIMULATION
            </button>
          </div>
        </div>

        {/* Bottom Telemetry HUD */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-8 mt-12 text-left">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">WIND SPEED</span>
            <div className="text-xl font-mono text-slate-200 flex items-center gap-2">
              <Wind className="w-4 h-4 text-cyan-400" />
              {(humidity * 0.24 + 12).toFixed(1)} km/h
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">PRECIPITATION METRIC</span>
            <div className="text-xl font-mono text-slate-200 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-cyan-400" />
              {isRaining ? "8.4 mm/h" : "0.0 mm/h"}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">CLOUD POTENTIAL</span>
            <div className="text-xl font-mono text-slate-200 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              {((humidity * ionization) / 10).toFixed(0)}%
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">TARGET SYSTEM COORD</span>
            <div className="text-xl font-mono text-slate-200 flex items-center gap-2">
              <Compass className="w-4 h-4 text-slate-400" />
              A.R.-920
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION: The Hydrological Crisis */}
      <section className="py-24 px-4 max-w-[1400px] mx-auto w-full relative">
        {/* Visual mesh overlay */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" /> STATUS LEVEL: URGENT
            </span>
            <h2 className="text-4xl font-light tracking-tight uppercase text-slate-100 leading-tight">
              {t("probTitle")}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {t("probSubtitle")}
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-2xl p-6 bg-slate-900/40 backdrop-blur-xl">
              <div className="text-3xl font-bold font-mono text-cyan-400 mb-2">{t("probStat1")}</div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">{t("probLabel1")}</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-slate-900/40 backdrop-blur-xl">
              <div className="text-3xl font-bold font-mono text-cyan-400 mb-2">{t("probStat2")}</div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">{t("probLabel2")}</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-slate-900/40 backdrop-blur-xl">
              <div className="text-3xl font-bold font-mono text-cyan-400 mb-2">{t("probStat3")}</div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">{t("probLabel3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCIENCE SECTION: Atmospheric Coalescence */}
      <section className="py-24 px-4 bg-slate-950/60 border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">EMPIRICAL PHYSICS</span>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-slate-100">
              {t("sciTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t("sciSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="border border-white/10 rounded-2xl p-6 bg-slate-900/40 hover:border-cyan-500/20 transition-all duration-300">
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block mb-3">STAGE 01 // EMISSION</span>
              <h3 className="text-lg font-light text-slate-100 mb-2">{t("sciStep1Title")}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t("sciStep1Desc")}</p>
            </div>

            {/* Step 2 */}
            <div className="border border-white/10 rounded-2xl p-6 bg-slate-900/40 hover:border-cyan-500/20 transition-all duration-300">
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block mb-3">STAGE 02 // CONDENSATION</span>
              <h3 className="text-lg font-light text-slate-100 mb-2">{t("sciStep2Title")}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t("sciStep2Desc")}</p>
            </div>

            {/* Step 3 */}
            <div className="border border-white/10 rounded-2xl p-6 bg-slate-900/40 hover:border-cyan-500/20 transition-all duration-300">
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block mb-3">STAGE 03 // PRECIPITATION</span>
              <h3 className="text-lg font-light text-slate-100 mb-2">{t("sciStep3Title")}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t("sciStep3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONFIGURATOR: The Sovereign Simulator */}
      <section id="configurator" className="py-24 px-4 max-w-[1400px] mx-auto w-full">
        <RainGenerator
          isRaining={isRaining}
          onRainChange={setIsRaining}
          humidity={humidity}
          onHumidityChange={setHumidity}
          ionization={ionization}
          onIonizationChange={setIonization}
        />
      </section>

      {/* 5. ECOLOGICAL COEXISTENCE */}
      <section className="py-24 px-4 bg-slate-950/40 border-t border-white/5 relative">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> ENVIRONMENTAL COMPLIANCE: LEVEL A-1
            </span>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-slate-100 leading-tight">
              {t("ecoTitle")}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("ecoSubtitle")}
            </p>
            <div className="pt-4">
              <Link
                href="/sustainability"
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 uppercase"
              >
                READ ECOLOGICAL AUDITS <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-md">
              <div className="text-2xl font-bold font-mono text-emerald-400">{t("ecoStat1")}</div>
              <div>
                <p className="text-xs text-slate-400 font-light mt-1">{t("ecoLabel1")}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-md">
              <div className="text-2xl font-bold font-mono text-emerald-400">{t("ecoStat2")}</div>
              <div>
                <p className="text-xs text-slate-400 font-light mt-1">{t("ecoLabel2")}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-md">
              <div className="text-2xl font-bold font-mono text-emerald-400">{t("ecoStat3")}</div>
              <div>
                <p className="text-xs text-slate-400 font-light mt-1">{t("ecoLabel3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES: Deployments */}
      <section className="py-24 px-4 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">VALIDATED PROJECTS</span>
            <h2 className="text-3xl font-light uppercase tracking-tight text-slate-100 mt-1">
              {t("caseTitle")}
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors hidden sm:inline"
          >
            VIEW ALL CASES //
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="border border-white/10 rounded-2xl bg-slate-900/40 p-6 flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" /> GCC // UAE
              </div>
              <h3 className="text-lg font-light text-slate-100 mb-2">{t("case1Title")}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t("case1Desc")}</p>
            </div>
            <div className="border-t border-white/5 mt-6 pt-4 flex justify-between items-center text-[10px] font-mono text-cyan-400">
              <span>PRECIP_INDEX: +24.3%</span>
              <span className="text-slate-500">ACTIVE FEED</span>
            </div>
          </div>

          {/* Case 2 */}
          <div className="border border-white/10 rounded-2xl bg-slate-900/40 p-6 flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" /> GCC // KSA
              </div>
              <h3 className="text-lg font-light text-slate-100 mb-2">{t("case2Title")}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t("case2Desc")}</p>
            </div>
            <div className="border-t border-white/5 mt-6 pt-4 flex justify-between items-center text-[10px] font-mono text-cyan-400">
              <span>AGRI_RECOVER: 15k HA</span>
              <span className="text-slate-500">ACTIVE FEED</span>
            </div>
          </div>

          {/* Case 3 */}
          <div className="border border-white/10 rounded-2xl bg-slate-900/40 p-6 flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" /> APAC // AUS
              </div>
              <h3 className="text-lg font-light text-slate-100 mb-2">{t("case3Title")}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t("case3Desc")}</p>
            </div>
            <div className="border-t border-white/5 mt-6 pt-4 flex justify-between items-center text-[10px] font-mono text-cyan-400">
              <span>ECO_RESERVE: SUSTAINED</span>
              <span className="text-slate-500">ACTIVE FEED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / INQUIRY */}
      <section className="py-24 px-4 bg-slate-950/60 border-t border-white/5 relative">
        <div className="max-w-xl mx-auto w-full text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex justify-center items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" /> SECURED SOVEREIGN CHANNEL
            </span>
            <h2 className="text-3xl font-light uppercase tracking-tight text-slate-100">
              INITIATE COMMUNICATIONS
            </h2>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              Route inquiries regarding sovereign programs, climate contracts, or research proposals directly to operations center.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-mono text-xs flex flex-col items-center gap-2">
              <Activity className="w-6 h-6 animate-pulse" />
              TRANSMISSION RECEIVED // SECURE GATEWAY OPENED // COORDINATES RECORDED
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Name / Representative</label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="e.g. Director General Al-Mansoori"
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Government Agency / Enterprise</label>
                <input
                  type="text"
                  required
                  value={contactForm.agency}
                  onChange={(e) => setContactForm({ ...contactForm, agency: e.target.value })}
                  placeholder="e.g. Ministry of Water Infrastructure"
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Secure Message Transmission</label>
                <textarea
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Initiate treaty proposal, scientific inquiry, or program assessment request..."
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-mono text-xs tracking-widest font-black transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" /> SECURE SEND TRANSMISSION
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Cybernetic Telemetry Footer */}
      <Footer />
    </div>
  );
}
