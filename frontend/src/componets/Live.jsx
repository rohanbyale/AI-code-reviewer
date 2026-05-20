import React, { useState } from 'react';

const CodePreview = () => {
  const [activeFile, setActiveFile] = useState('auth_service.ts');

  const files = ['auth_service.ts', 'database.config.js', 'api_route.py'];

  return (
    <section className="bg-[#050505] py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decorative Lines - Hidden on mobile to prevent overflow */}
      <div className="hidden lg:block absolute top-1/4 -right-20 w-px h-64 bg-gradient-to-b from-transparent via-zinc-800 to-transparent rotate-45 pointer-events-none" />
      <div className="hidden lg:block absolute bottom-1/4 -left-20 w-px h-64 bg-gradient-to-b from-transparent via-zinc-800 to-transparent -rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-8">
          <div className="max-w-xl">
            <h2 className="text-[#d9ff41] font-mono text-xs uppercase tracking-[0.4em] mb-4">Live Preview</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
              Witness the <br /> <span className="text-zinc-600">Intelligence.</span>
            </h3>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed">
            Real-time analysis as you type. Our engine identifies structural flaws and suggests modern, type-safe alternatives instantly.
          </p>
        </div>

        {/* IDE Mockup Container */}
        <div className="relative rounded-2xl md:rounded-[2.5rem] border border-zinc-800 bg-[#0c0c0e] overflow-hidden shadow-2xl">
          
          {/* 1. IDE Header/Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 py-3 bg-zinc-900/50 border-b border-zinc-800 gap-4">
            <div className="flex gap-4 md:gap-6 overflow-x-auto w-full sm:w-auto no-scrollbar">
              {files.map(file => (
                <button 
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`text-[11px] md:text-xs font-mono whitespace-nowrap pb-1 transition-colors relative ${activeFile === file ? 'text-[#d9ff41]' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {file}
                  {activeFile === file && <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-[#d9ff41]" />}
                </button>
              ))}
            </div>
            <div className="hidden sm:flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            </div>
          </div>

          {/* 2. Main IDE Content - Grid changes to 1 col on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
            
            {/* Left Side: Original Code */}
            <div className="p-6 md:p-10 lg:p-12 bg-zinc-900/10">
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Original Source</span>
              </div>
              
              <div className="font-mono text-xs md:text-sm leading-relaxed space-y-1 overflow-x-auto">
                <div className="flex gap-4"><span className="text-zinc-700 select-none">01</span><span><span className="text-purple-400">function</span> <span className="text-blue-400">validateUser</span>(user) {'{'}</span></div>
                <div className="flex gap-4"><span className="text-zinc-700 select-none">02</span><span className="text-zinc-500 italic">  // Logic issue here</span></div>
                <div className="flex gap-4 bg-red-500/10 -mx-4 px-4 py-0.5"><span className="text-zinc-600 select-none">03</span><span>  <span className="text-purple-400">if</span> (user.role == <span className="text-green-400">'admin'</span>) {'{'}</span></div>
                <div className="flex gap-4 bg-red-500/10 -mx-4 px-4 py-0.5"><span className="text-zinc-600 select-none">04</span><span>    <span className="text-purple-400">return</span> <span className="text-blue-400">true</span>;</span></div>
                <div className="flex gap-4"><span className="text-zinc-700 select-none">05</span><span>  {'}'}</span></div>
                <div className="flex gap-4"><span className="text-zinc-700 select-none">06</span><span>  <span className="text-purple-400">return</span> <span className="text-blue-400">false</span>;</span></div>
                <div className="flex gap-4"><span className="text-zinc-700 select-none">07</span><span>{'}'}</span></div>
              </div>
            </div>

            {/* Right Side: AI Fixed Code */}
            <div className="p-6 md:p-10 lg:p-12 bg-[#d9ff41]/[0.02]">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d9ff41] shadow-[0_0_10px_rgba(217,255,65,0.4)]" />
                  <span className="text-[10px] font-mono text-[#d9ff41] uppercase tracking-[0.2em]">Lumina Suggestion</span>
                </div>
                <button className="text-[10px] bg-[#d9ff41] text-black px-4 py-1.5 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg active:scale-95">
                  APPLY FIX
                </button>
              </div>

              <div className="font-mono text-xs md:text-sm leading-relaxed space-y-1 overflow-x-auto">
                <div className="flex gap-4"><span className="text-zinc-700 select-none">01</span><span><span className="text-purple-400">export const</span> <span className="text-blue-400">validateUser</span> = (user: User) ={">"} {'{'}</span></div>
                <div className="flex gap-4"><span className="text-zinc-700 select-none">02</span><span className="text-zinc-500 italic">  // Resolved: Strict equality</span></div>
                <div className="flex gap-4 bg-[#d9ff41]/10 -mx-4 px-4 py-0.5"><span className="text-zinc-600 select-none">03</span><span>  <span className="text-purple-400">return</span> user.role === <span className="text-green-400">'admin'</span>;</span></div>
                <div className="flex gap-4"><span className="text-zinc-700 select-none">04</span><span>{'}'};</span></div>
                
                {/* AI Reasoning Popover */}
                <div className="mt-10 md:mt-12 p-5 md:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 relative shadow-2xl">
                  {/* Tooltip Arrow - Hidden on small screens if layout shifts */}
                  <div className="hidden md:block absolute -top-3 left-6 w-6 h-6 bg-zinc-900 border-l border-t border-zinc-800 rotate-45" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#d9ff41]/10 flex items-center justify-center flex-shrink-0">
                       <span className="text-[#d9ff41] text-[10px] font-bold">AI</span>
                    </div>
                    <div>
                      <h5 className="text-white text-xs font-bold mb-1">Optimization Found</h5>
                      <p className="text-zinc-500 text-[11px] leading-relaxed italic">
                        "Replaced imperative if-statement with a declarative boolean return. Implemented strict equality (===) to prevent type coercion vulnerabilities."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. IDE Footer Status Bar */}
          <div className="px-6 py-2 bg-zinc-950 border-t border-zinc-800 flex justify-between items-center text-[10px] font-mono text-zinc-600">
             <div className="flex gap-4">
                <span>Ln 3, Col 12</span>
                <span>UTF-8</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d9ff41]" />
                <span>AI Connected</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePreview;