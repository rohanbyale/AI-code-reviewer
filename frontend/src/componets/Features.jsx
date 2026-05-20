import React from 'react';

const FeaturesReview = () => {
  const features = [
    {
      id: "01",
      title: "Context-Aware Parsing",
      desc: "Paste your snippet and our engine immediately reconstructs the logic. It identifies language-specific anti-patterns, from React hook violations to Pythonic memory leaks, within milliseconds.",
      tech: "Direct Paste • Multi-Language • AST Mapping",
      accent: "border-blue-500/20",
      glow: "shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)]"
    },
    {
      id: "02",
      title: "Security & Logic Vulnerability",
      desc: "We don't just look for typos. Lumina performs an autonomous deep scan to detect SQL injections, race conditions, and improper error handling that standard linters miss.",
      tech: "Heuristic Analysis • OWASP Scanning • Logic Flow",
      accent: "border-[#d9ff41]/20",
      glow: "shadow-[0_0_50px_-12px_rgba(217,255,65,0.15)]"
    },
    {
      id: "03",
      title: "Production-Ready Refactors",
      desc: "Get more than just a comment. Lumina provides a side-by-side refactor of your code. Click 'Copy' to get optimized, clean, and documented code ready for your IDE.",
      tech: "Side-by-Side Diff • One-Click Copy • Documentation",
      accent: "border-purple-500/20",
      glow: "shadow-[0_0_50px_-12px_rgba(168,85,247,0.15)]"
    }
  ];

  return (
    <section className="bg-[#050505] py-32 px-6 relative overflow-hidden">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-[#d9ff41]/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#d9ff41] text-[10px] font-mono mb-6 uppercase tracking-widest">
            <span className="w-1 h-1 rounded-full bg-[#d9ff41] animate-pulse" />
            Static Analysis Protocol
          </div>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            Paste your code. <br /> 
            <span className="text-zinc-600 font-medium">Elevate your craft.</span>
          </h3>
          <p className="mt-8 text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
            No integration required. No repository access needed. Just instant, expert-level code reviews for developers who value privacy and speed.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Spine Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-[#d9ff41]/50 to-transparent animate-infinite-scroll" />
          </div>

          <div className="space-y-32">
            {features.map((feature, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-zinc-800 rounded-xl z-20 flex items-center justify-center rotate-45 transition-all duration-500 hover:border-[#d9ff41] shadow-[0_0_15px_rgba(0,0,0,1)] group">
                  <div className="w-2 h-2 bg-zinc-700 rounded-full -rotate-45 group-hover:bg-[#d9ff41] transition-colors" />
                </div>

                {/* Content Card */}
                <div className="flex-1 pl-12 md:pl-0 w-full">
                  <div className={`group relative p-8 md:p-10 rounded-[2.5rem] bg-[#0c0c0e] border ${feature.accent} ${feature.glow} transition-all duration-500 hover:scale-[1.02] hover:border-zinc-700`}>
                    
                    {/* Corner Number */}
                    <span className="text-6xl font-black text-white/[0.03] font-mono absolute top-4 right-8 select-none group-hover:text-[#d9ff41]/5 transition-colors">
                      {feature.id}
                    </span>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#d9ff41] transition-colors">
                      {feature.title}
                    </h4>
                    
                    <p className="text-zinc-500 leading-relaxed mb-8 text-sm md:text-base">
                      {feature.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {feature.tech.split(' • ').map((t, idx) => (
                         <div key={idx} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                           {t}
                         </div>
                       ))}
                    </div>

                    {/* Animated Scanning Line (Only on Hover) */}
                    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d9ff41]/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-down transition-opacity duration-1000" />
                  </div>
                </div>

                {/* Balance Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-48 text-center relative">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-px h-32 bg-gradient-to-b from-zinc-800 via-zinc-400 to-[#d9ff41]" />
            <div className="w-3 h-3 bg-[#d9ff41] rounded-full blur-[4px] animate-pulse" />
          </div>

          <div className="pt-10">
              <h4 className="text-3xl font-bold text-white mb-8 tracking-tight">Stop shipping technical debt.</h4>
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-[#d9ff41] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <button className="relative bg-[#d9ff41] text-black font-black px-12 py-5 rounded-2xl transition-all duration-300 active:scale-95 flex items-center gap-3">
                  Open the Editor
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
              </div>
              <p className="mt-6 text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">Private • Encrypted • Instant</p>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          from { transform: translateY(-100%); }
          to { transform: translateY(200%); }
        }
        @keyframes scan-down {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 4s linear infinite;
        }
        .group:hover .animate-scan-down {
          animation: scan-down 2s linear infinite;
        }
      `}} />
    </section>
  );
};

export default FeaturesReview;