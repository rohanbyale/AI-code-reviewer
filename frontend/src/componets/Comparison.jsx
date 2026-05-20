import React from 'react';

const ImpactComparison = () => {
  const stats = [
    { label: "Lines Removed", val: "12", color: "text-red-500" },
    { label: "Performance", val: "+14%", color: "text-[#d9ff41]" },
    { label: "Memory", val: "-8%", color: "text-[#d9ff41]" },
    { label: "Security", val: "A+", color: "text-blue-400" }
  ];

  return (
    <section className="h-screen w-full bg-[#050505] flex flex-col relative overflow-hidden font-sans selection:bg-[#d9ff41] selection:text-black">
      
      {/* 1. Dynamic Background Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-800/50 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-800/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d9ff41]/5 blur-[160px] rounded-full opacity-20" />
      </div>

      {/* 2. Top Navigation/Header Context */}
      <div className="relative z-20 px-8 pt-8 flex justify-between items-end">
        <div>
          <h2 className="text-[#d9ff41] font-mono text-[10px] uppercase tracking-[0.6em] mb-2">Technical Proof</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Legacy <span className="text-zinc-700">vs</span> Optimized
          </h3>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Model: Lumina-v4-Turbo</p>
          <p className="text-zinc-600 text-[10px] font-mono">Analysis Time: 242ms</p>
        </div>
      </div>

      {/* 3. Main Comparison Engine (The H-Screen Core) */}
      <div className="flex-1 flex flex-col lg:flex-row mt-8 border-y border-zinc-800 bg-zinc-900/10 relative z-10">
        
        {/* LEFT: LEGACY */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 relative group">
          <div className="absolute top-6 left-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Source Debt</span>
          </div>

          <div className="space-y-2 font-mono text-sm md:text-lg leading-relaxed text-zinc-500">
            <div className="flex gap-6"><span className="w-6 text-zinc-800 select-none text-xs">01</span><span className="text-zinc-400">async function <span className="text-blue-400/80">handle</span>(data) {'{'}</span></div>
            <div className="flex gap-6 bg-red-950/20 py-1 -mx-4 px-4 border-l-2 border-red-900/50 italic">
               <span className="w-6 text-red-900/50 select-none text-xs">02</span>
               <span>let results = [];</span>
            </div>
            <div className="flex gap-6 bg-red-950/20 py-1 -mx-4 px-4 border-l-2 border-red-900/50 italic">
               <span className="w-6 text-red-900/50 select-none text-xs">03</span>
               <span>for (var i = 0; i &lt; data.length; i++) {'{'}</span>
            </div>
            <div className="flex gap-6 bg-red-950/20 py-1 -mx-4 px-4 border-l-2 border-red-900/50 italic">
               <span className="w-6 text-red-900/50 select-none text-xs">04</span>
               <span>  results.push(data[i].price);</span>
            </div>
            <div className="flex gap-6"><span className="w-6 text-zinc-800 select-none text-xs">05</span><span>{'}'}</span></div>
          </div>

          <div className="mt-12 space-y-3 opacity-60">
             <div className="h-px w-12 bg-red-900/50" />
             <p className="text-[11px] font-mono text-red-400 uppercase tracking-tighter">Issue: Imperative mutation pattern detected.</p>
          </div>
        </div>

        {/* CENTER ICON (The Intersection) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-zinc-700 rounded-full z-30 items-center justify-center">
            <div className="w-6 h-[1px] bg-[#d9ff41] rotate-90" />
            <div className="absolute inset-0 rounded-full border border-[#d9ff41]/20 animate-ping" />
        </div>

        {/* RIGHT: OPTIMIZED */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-[#d9ff41]/[0.01] relative overflow-hidden">
          {/* Subtle Scanning Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d9ff41]/30 to-transparent animate-scan" />
          
          <div className="absolute top-6 left-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d9ff41] shadow-[0_0_10px_#d9ff41]" />
            <span className="text-[10px] font-mono text-[#d9ff41] uppercase tracking-widest">AI Output</span>
          </div>

          <div className="space-y-2 font-mono text-sm md:text-lg leading-relaxed text-white">
            <div className="flex gap-6 opacity-40"><span className="w-6 text-zinc-800 select-none text-xs">01</span><span>const handle = (data) =&gt; {'{'}</span></div>
            <div className="flex gap-6 bg-[#d9ff41]/10 py-2 -mx-4 px-4 border-l-2 border-[#d9ff41] shadow-[0_0_30px_rgba(217,255,65,0.05)]">
               <span className="w-6 text-[#d9ff41]/50 select-none text-xs">02</span>
               <span className="font-bold tracking-tight text-[#d9ff41]">return data.map(item =&gt; item.price);</span>
            </div>
            <div className="flex gap-6 opacity-40"><span className="w-6 text-zinc-800 select-none text-xs">03</span><span>{'}'};</span></div>
          </div>

          <div className="mt-12">
             <button className="bg-[#d9ff41] text-black text-[10px] font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_#d9ff41] transition-all uppercase tracking-widest">
               Update Codebase
             </button>
          </div>
        </div>
      </div>

      {/* 4. Bottom Stats Bar (The Footer Context) */}
      <div className="h-32 md:h-40 bg-black flex items-center px-8 relative z-20 overflow-x-auto no-scrollbar">
        <div className="flex w-full justify-between items-center gap-12 min-w-max">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className={`text-2xl md:text-4xl font-bold tracking-tighter ${stat.color}`}>{stat.val}</span>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
          ))}
          <div className="h-12 w-px bg-zinc-800 hidden md:block" />
          <div className="flex items-center gap-4 group cursor-help">
             <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-[#d9ff41] transition-colors">
                <span className="text-white text-xs">?</span>
             </div>
             <div className="flex flex-col">
                <span className="text-white text-[11px] font-bold">Structural Score</span>
                <span className="text-zinc-600 text-[10px]">98/100 (+42 pts)</span>
             </div>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />

    </section>
  );
};

export default ImpactComparison;