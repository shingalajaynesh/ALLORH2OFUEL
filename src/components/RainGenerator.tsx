"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Sliders, HelpCircle, CloudRain, Shield, RefreshCw } from "lucide-react";

interface RainGeneratorProps {
  isRaining: boolean;
  onRainChange: (val: boolean) => void;
  humidity: number;
  onHumidityChange: (val: number) => void;
  ionization: number;
  onIonizationChange: (val: number) => void;
}

export const RainGenerator: React.FC<RainGeneratorProps> = ({
  isRaining,
  onRainChange,
  humidity,
  onHumidityChange,
  ionization,
  onIonizationChange,
}) => {
  const { t, dir } = useLanguage();
  const [drought, setDrought] = useState<number>(85); // 0-100
  const [area, setArea] = useState<number>(45); // 5km to 100km

  // Dynamic calculations based on parameters
  const calculatedVolume = (humidity * ionization * area * 12.5).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });
  const calculatedCost = (ionization * area * 420 + 2500).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  const calculatedLeadTime = Math.max(1, Math.round(48 - (humidity * 0.3 + ionization * 0.15))).toString();

  const handleReset = () => {
    setDrought(85);
    onHumidityChange(50);
    setArea(45);
    onIonizationChange(20);
    onRainChange(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.08)] relative overflow-hidden transition-all duration-300 hover:border-cyan-500/25">
      {/* Top telemetry border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <span className="text-[10px] tracking-widest text-cyan-400 font-mono flex items-center gap-1.5 uppercase">
            <Sliders className="w-3.5 h-3.5" /> SECURE CONTROL NODE // A-1
          </span>
          <h3 className="text-2xl font-light text-slate-100 tracking-tight mt-1">
            {t("configTitle")}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{t("configSubtitle")}</p>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-slate-400 font-mono hover:text-cyan-400 transition-colors flex items-center gap-1.5 border border-white/10 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/10"
        >
          <RefreshCw className="w-3 h-3" /> RESET PARAMETERS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders Area */}
        <div className="space-y-6">
          {/* Sliders Grid */}
          <div className="space-y-5">
            {/* Drought Index */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 tracking-wider">
                  {t("paramDrought")}
                </label>
                <span className="text-xs font-mono text-cyan-400">
                  {drought}% ({drought > 70 ? t("valHigh") : drought > 40 ? t("valMedium") : t("valLow")})
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={drought}
                onChange={(e) => setDrought(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
            </div>

            {/* Atmospheric Humidity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 tracking-wider">
                  {t("paramHumidity")}
                </label>
                <span className="text-xs font-mono text-cyan-400">{humidity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={humidity}
                onChange={(e) => onHumidityChange(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
            </div>

            {/* Target Area Radius */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 tracking-wider">
                  {t("paramArea")}
                </label>
                <span className="text-xs font-mono text-cyan-400">{area} km</span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
            </div>

            {/* Ionization Charge */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 tracking-wider">
                  {t("paramIonization")}
                </label>
                <span className="text-xs font-mono text-emerald-400">+{ionization * 0.2} kV</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={ionization}
                onChange={(e) => onIonizationChange(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Outputs Area */}
        <div className="flex flex-col justify-between border border-white/10 rounded-2xl p-6 bg-slate-950/40 relative overflow-hidden">
          {/* Neon scan effect */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-pulse" />

          {/* Results Grid */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-xs text-slate-400 font-mono tracking-wider flex items-center gap-1.5">
                <CloudRain className="w-3.5 h-3.5 text-cyan-400" /> {t("resultEstVolume")}
              </span>
              <span className="text-base font-mono text-cyan-400 font-bold">
                {calculatedVolume} m³
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-xs text-slate-400 font-mono tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> {t("resultEstCost")}
              </span>
              <span className="text-base font-mono text-emerald-400 font-bold">
                {calculatedCost}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400 font-mono tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" /> {t("resultEstTime")}
              </span>
              <span className="text-base font-mono text-slate-200">
                ~{calculatedLeadTime} Hours
              </span>
            </div>
          </div>

          {/* Large Action Button */}
          <button
            onClick={() => onRainChange(!isRaining)}
            className={`w-full mt-6 py-4 px-6 rounded-xl font-mono text-xs tracking-widest transition-all duration-300 relative overflow-hidden ${isRaining
                ? "bg-rose-500/25 border border-rose-500/50 text-rose-300 hover:bg-rose-500/35 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                : "bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              }`}
          >
            {isRaining ? t("btnStopRain") : t("btnTriggerRain")}
          </button>
        </div>
      </div>
    </div>
  );
};
