import React from 'react';

const CentralHero = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d9ff41] selection:text-black antialiased overflow-hidden">
      
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#d9ff41]/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#d9ff41] rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tighter">SYNTAX</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Engine</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <a href="#" className="hover:text-white transition-colors">Enterprise</a>
        </div>
        <button className="bg-white text-black text-sm font-bold px-6 py-2 rounded-full hover:bg-[#d9ff41] transition-all">
          Start Free
        </button>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#d9ff41] text-[10px] font-mono mb-8 uppercase tracking-widest">
          <span className="w-1 h-1 rounded-full bg-[#d9ff41] animate-pulse" />
          Autonomous Code Intelligence
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.95]">
          Review code at the <br />
          <span className="text-zinc-600">speed of thought.</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-xl mx-auto text-lg text-zinc-400 mb-12 leading-relaxed">
          The first AI code reviewer that understands complex architectural patterns, 
          identifies security leaks, and refactors logic in real-time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <button className="w-full sm:w-auto bg-[#d9ff41] text-black font-bold px-10 py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(217,255,65,0.3)] transition-all">
            Get Started for Free
          </button>
          <button className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-white font-bold px-10 py-4 rounded-2xl hover:bg-zinc-800 transition-all">
            Schedule Demo
          </button>
        </div>

        {/* Central Product Image/Mockup */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Subtle Glow behind image */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[#d9ff41]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          
          {/* Mockup Container */}
          <div className="relative bg-[#0c0c0e] border border-zinc-800 rounded-t-[2rem] p-4 pb-0 shadow-2xl overflow-hidden">
            {/* Header of Mockup */}
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/50 border-b border-zinc-800 rounded-t-[1.5rem]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">PR #142 — security_patch.ts</div>
            </div>

            {/* Content of Mockup */}
            <div className="p-8 text-left font-mono text-sm leading-relaxed">
              <div className="space-y-2 opacity-40">
                <p><span className="text-purple-400">export const</span> auth = <span className="text-blue-400">async</span> (req) ={">"} {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">const</span> token = req.headers[<span className="text-green-400">'authorization'</span>];</p>
              </div>
              
              {/* Highlighted AI Suggestion */}
              <div className="my-6 p-6 bg-[#d9ff41]/5 border border-[#d9ff41]/20 rounded-xl relative">
                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-[#d9ff41] rounded-full" />
                <p className="text-[#d9ff41] mb-2 text-xs font-bold uppercase tracking-tighter">Lumina Refactor Suggestion</p>
                <p className="text-zinc-200">
                  <span className="text-zinc-500 line-through mr-2">if (!token) return false;</span>
                  <span className="text-white">throw new <span className="text-purple-400">UnauthorizedError</span>(<span className="text-green-400">'Invalid Session'</span>);</span>
                </p>
                <p className="mt-4 text-[11px] text-zinc-500 italic">// Prevents silent failure in auth middleware</p>
              </div>

              <div className="space-y-2 opacity-40">
                <p className="pl-4">await <span className="text-blue-400">validate</span>(token);</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CentralHero;