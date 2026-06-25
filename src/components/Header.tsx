"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage, Language } from "../context/LanguageContext";
import { Globe, ShieldAlert, Crosshair, ChevronDown, Menu, X, CloudRain } from "lucide-react";

interface HeaderProps {
  isRaining: boolean;
  onRainToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isRaining, onRainToggle }) => {
  const { t, language, setLanguage, dir } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: t("navHome"), href: "/" },
    { label: t("navTech"), href: "/technology" },
    { label: t("navResearch"), href: "/research" },
    { label: t("navClimate"), href: "/climate" },
    { label: t("navSolutions"), href: "/solutions" },
    { label: t("navCases"), href: "/case-studies" },
    { label: t("navGov"), href: "/government" },
    { label: t("navSustain"), href: "/sustainability" },
    { label: t("navInvestors"), href: "/investors" },
    { label: t("navNews"), href: "/news" },
    { label: t("navCareers"), href: "/careers" },
    { label: t("navContact"), href: "/contact" },
  ];

  const languagesList: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية (Arabic)" },
    { code: "hi", label: "हिन्दी (Hindi)" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "zh", label: "中文" },
  ];

  const activeLangLabel = languagesList.find((l) => l.code === language)?.label || "English";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md transition-all duration-300">
      {/* Top telemetry bar */}
      <div className="max-w-[1400px] mx-auto px-4 py-1.5 flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400 border-b border-white/5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Crosshair className="w-3 h-3 text-cyan-400" /> {t("lat")}
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">{t("lon")}</span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className={`flex items-center gap-1.5 font-semibold ${isRaining ? "text-emerald-400 animate-pulse" : "text-cyan-400"
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isRaining ? "bg-emerald-400" : "bg-cyan-400"
                }`}
            />
            {isRaining ? t("statusActive") : t("statusNominal")}
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="text-slate-950 font-mono font-black text-sm tracking-tighter">AR</span>
          </div>
          <span className="font-extrabold text-base tracking-widest text-slate-100 group-hover:text-cyan-400 transition-colors">
            {t("brand")}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.slice(0, 7).map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-xs tracking-wider text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}

          {/* More menu items trigger dropdown if needed, or simple scrolling. Let's list primary pages. */}
          <div className="relative group">
            <button className="text-xs tracking-wider text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono uppercase">
              MORE <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-slate-900/90 border border-white/10 rounded-xl py-2 backdrop-blur-xl shadow-xl hidden group-hover:block transition-all">
              {menuItems.slice(7).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Actions (Language dropdown + Precipitation trigger + Mobile Menu trigger) */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-cyan-500/10 text-xs font-mono text-slate-300 transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">{activeLangLabel}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langOpen && (
              <div
                className={`absolute top-full mt-2 w-40 bg-slate-900 border border-white/10 rounded-xl py-1.5 shadow-2xl backdrop-blur-2xl z-50 ${dir === "rtl" ? "left-0" : "right-0"
                  }`}
              >
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors block ${language === lang.code
                        ? "text-cyan-400 font-semibold bg-cyan-500/10"
                        : "text-slate-300 hover:text-cyan-400 hover:bg-white/5"
                      } ${dir === "rtl" ? "text-right" : "text-left"}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Rainfall trigger */}
          <button
            onClick={onRainToggle}
            className={`hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 ${isRaining
                ? "bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30"
                : "bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"
              }`}
          >
            <CloudRain className="w-4 h-4 animate-bounce" />
            <span className="hidden lg:inline">
              {isRaining ? t("btnStopRain") : t("btnTriggerRain")}
            </span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 border-b border-white/10 py-6 px-6 backdrop-blur-xl animate-fade-in z-50">
          <nav className="flex flex-col gap-4 mb-6">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-slate-200 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => {
              onRainToggle();
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-mono text-xs tracking-widest transition-all ${isRaining
                ? "bg-rose-500/25 border border-rose-500/50 text-rose-300"
                : "bg-cyan-500/20 border border-cyan-500/40 text-cyan-300"
              }`}
          >
            <CloudRain className="w-4 h-4" />
            {isRaining ? t("btnStopRain") : t("btnTriggerRain")}
          </button>
        </div>
      )}
    </header>
  );
};
