"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AtmosphereCanvas } from "../../components/AtmosphereCanvas";
import { Calendar, User, Newspaper, ArrowRight } from "lucide-react";

export default function News() {
  const [isRaining, setIsRaining] = useState(false);

  const posts = [
    {
      date: "June 14, 2026",
      category: "SOVEREIGN SIGNATURES",
      title: "ALLOR RAIN Signs Historic Weather Accord with GCC Environmental Taskforce",
      summary: "A joint treaty deploying 34 new ionization emitter arrays across the Al Hajar mountain belt to stabilize ground aquifers and recharge reserves ahead of dry cycles."
    },
    {
      date: "May 28, 2026",
      category: "SCIENTIFIC REVIEWS",
      title: "Atmospheric Journal Publishes Safety Audit of Electrostatic Precipitation Loops",
      summary: "Peer reviews verify that low-voltage ionization currents do not disrupt insect biological migrations or local soil chemistry profiles."
    },
    {
      date: "April 02, 2026",
      category: "COMPANY ROUNDS",
      title: "ALLOR RAIN Secures $45M Series A to Expand Satellite Tracking Infrastructure",
      summary: "Funding will accelerate developments in AI atmospheric wind forecasting networks, integrating ground array setups with live satellite feeds."
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative z-10 min-h-screen">
      <AtmosphereCanvas isRaining={isRaining} humidity={40} ionization={30} />
      <Header isRaining={isRaining} onRainToggle={() => setIsRaining(!isRaining)} />

      <main className="max-w-[1200px] mx-auto px-4 pt-36 pb-20 w-full flex-1 space-y-16">
        {/* Title */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">NEWSROOM</span>
          <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-tight text-slate-100">
            PRESS RELEASES & ANNOUNCEMENTS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Latest operational highlights, research papers publishing updates, and international weather modifications accords.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl bg-slate-900/40 p-6 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="text-cyan-400">{post.category}</span>
                </div>
                <h3 className="text-lg font-light text-slate-200 hover:text-cyan-400 transition-colors cursor-pointer leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{post.summary}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                <span className="flex items-center gap-1 cursor-pointer hover:text-cyan-300 transition-colors">
                  READ ARTICLE <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
