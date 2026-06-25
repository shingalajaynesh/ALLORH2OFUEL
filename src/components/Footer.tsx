"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { ShieldCheck, HardDrive, Cpu, Compass } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/80 backdrop-blur-md py-12 px-4 relative overflow-hidden mt-20">
      {/* Decorative accent grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Brand Information */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <span className="text-slate-950 font-mono font-black text-xs">AR</span>
            </div>
            <span className="font-bold text-sm tracking-widest text-slate-100">{t("brand")}</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col gap-2 pt-2 text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> {t("footNotice")}
            </span>
            <span className="flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-slate-500" /> SECURE DECK / ENCRYPTED SATELLITE FEED LINK
            </span>
          </div>
        </div>

        {/* Dynamic Telemetry Status */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            REGIONAL STATUS
          </h4>
          <ul className="space-y-2 text-xs font-mono text-slate-400">
            <li className="flex justify-between items-center">
              <span>Sector G-12 (UAE):</span>
              <span className="text-emerald-400">NOMINAL (+24%)</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Sector S-04 (KSA):</span>
              <span className="text-emerald-400">OPTIMIZING</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Sector A-88 (AUS):</span>
              <span className="text-cyan-400">STANDBY</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Ionization Array Grid:</span>
              <span className="text-emerald-400">ONLINE [98.2%]</span>
            </li>
          </ul>
        </div>

        {/* Site Map Triage */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            RESOURCES
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
            <Link href="/technology" className="hover:text-cyan-400 transition-colors">
              Core Tech
            </Link>
            <Link href="/research" className="hover:text-cyan-400 transition-colors">
              Research Papers
            </Link>
            <Link href="/solutions" className="hover:text-cyan-400 transition-colors">
              Solutions
            </Link>
            <Link href="/sustainability" className="hover:text-cyan-400 transition-colors">
              Ecology
            </Link>
            <Link href="/investors" className="hover:text-cyan-400 transition-colors">
              Investors
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Underline Copyright */}
      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 text-[10px] font-mono text-slate-500">
        <span>{t("footCopy")}</span>
        <div className="flex gap-4">
          <span className="hover:text-cyan-400 cursor-pointer">PRIVACY PROTOCOL</span>
          <span>//</span>
          <span className="hover:text-cyan-400 cursor-pointer">SATELLITE COMPLIANCE</span>
        </div>
      </div>
    </footer>
  );
};
