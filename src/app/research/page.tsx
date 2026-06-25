"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Search, Download, FileText, Calendar, User, Database } from "lucide-react";

interface Paper {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  abstract: string;
  fileSize: string;
}

export default function Research() {
  const [isRaining, setIsRaining] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const papers: Paper[] = [
    {
      id: "AR-2026-001",
      title: "Electrostatic Coalescence in Sub-Tropical Clouds: An Empirical Analysis",
      author: "Dr. Priya Sharma, Dr. Arthur Vance",
      date: "2026-04-12",
      category: "Physics",
      abstract: "This paper reports the results of ground-based ionization arrays in Abu Dhabi, verifying a 22.4% increase in drop coalescence rates via satellite tracking and electrostatic field sensor telemetry.",
      fileSize: "4.2 MB"
    },
    {
      id: "AR-2025-089",
      title: "Ecological Safety Audit of High-Voltage Emitter Arrays in Arid Mountain Belts",
      author: "Dr. Arthur Pendelton, Environmental Audit Collective",
      date: "2025-11-04",
      category: "Ecology",
      abstract: "A comprehensive multi-year biological audit confirming zero toxic metal residuals or soil contamination following repeated electrostatic rain precipitation sequences.",
      fileSize: "8.9 MB"
    },
    {
      id: "AR-2025-045",
      title: "Integrating AI Predictors with Closed-Loop Weather Ionization Arrays",
      author: "Lead Architect, ALLOR RAIN AI Lab",
      date: "2025-06-18",
      category: "AI & Predictors",
      abstract: "Deploying deep learning networks to compute real-time Perlin wind noise currents and charge vectors, optimizing operational energy consumption by 32%.",
      fileSize: "3.1 MB"
    },
    {
      id: "AR-2024-112",
      title: "Atmospheric Boundary Layer Electrification and Secondary Aerosol Formation",
      author: "Dr. Sarah Jenkins",
      date: "2024-09-30",
      category: "Physics",
      abstract: "Analyzing how artificial high-velocity ion currents interact with mineral aerosols to accelerate droplet nucleus development in arid regions.",
      fileSize: "5.5 MB"
    }
  ];

  const categories = ["All", "Physics", "Ecology", "AI & Predictors"];

  const filteredPapers = papers.filter((paper) => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || paper.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={45} ionization={50} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">SCIENTIFIC ARCHIVE</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            RESEARCH & PEER REVIEWS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Empirical validation, clinical trials, and environmental safety documentation concerning our rain modification platforms.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border-b border-white/5 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all ${activeCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-white/5 text-slate-400 border border-white/5 hover:text-cyan-400"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search scientific archive..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Papers Grid */}
        <div className="space-y-6">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="border border-white/10 rounded-3xl bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Category and ID */}
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {paper.category}
                    </span>
                    <span className="text-slate-500">{paper.id}</span>
                  </div>

                  <h3 className="text-xl font-light text-slate-200 hover:text-cyan-400 transition-colors cursor-pointer">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {paper.abstract}
                  </p>
                </div>

                {/* Footer details */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-slate-500" /> {paper.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" /> {paper.date}
                    </span>
                  </div>

                  <button
                    onClick={() => alert(`Simulating paper download: ${paper.id}`)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-cyan-500/10 text-cyan-300 hover:text-cyan-400 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF ({paper.fileSize})
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-xs font-mono text-slate-500">
              NO PAPERS MATCHING YOUR QUERY FOUND IN DATABASE // SECURE SYNC RETRY
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
