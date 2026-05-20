import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "Senior Architect @ Vercel",
      text: "Lumina didn't just find bugs; it taught my team better patterns. It's like having a Principal Engineer reviewing every single line in real-time.",
      avatar: "AR"
    },
    {
      name: "Sarah Chen",
      role: "CTO @ Fintech OS",
      text: "The debt liquidation metrics are a game changer. We've reduced our legacy codebase by 30% in three months without a single regression.",
      avatar: "SC"
    },
    {
      name: "Jordan Smyth",
      role: "DevOps Lead @ Stripe",
      text: "Integration was flawless. The AI reasoning popovers actually explain the 'why', which has cut our PR cycle time in half.",
      avatar: "JS"
    },
    {
      name: "Marcus Thorne",
      role: "Lead Dev @ Linear",
      text: "Clean, fast, and surprisingly accurate. The UI is a breath of fresh air compared to the cluttered enterprise tools we used to use.",
      avatar: "MT"
    }
  ];

  return (
    <section className="bg-[#050505] py-32 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-0 text-[20vh] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none">
        TRUSTED BY THE BEST • TRUSTED BY THE BEST
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <h2 className="text-[#d9ff41] font-mono text-xs uppercase tracking-[0.5em] mb-4">Wall of Love</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Built for teams <br /> 
          <span className="text-zinc-600">that ship.</span>
        </h3>
      </div>

      {/* The Infinite Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap gap-8 py-10 group-hover:pause">
          {[...reviews, ...reviews].map((rev, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] shrink-0 bg-[#0c0c0e] border border-zinc-800 p-8 rounded-[2.5rem] relative group/card transition-all duration-500 hover:border-[#d9ff41]/30 hover:-translate-y-2"
            >
              {/* Star Rating Glow */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-[#d9ff41] rounded-full shadow-[0_0_10px_#d9ff41] opacity-80" />
                ))}
              </div>

              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed whitespace-normal italic mb-8 tracking-tight">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center font-bold text-[#d9ff41] text-xs border border-zinc-700 group-hover/card:scale-110 transition-transform duration-500">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{rev.name}</h4>
                  <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>

              {/* Parallax-style Accent Decoration */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#d9ff41]/5 blur-3xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}} />

      {/* Final Social CTA */}
      <div className="mt-24 text-center">
        <p className="text-zinc-500 text-sm font-mono uppercase tracking-[0.3em]">
          Join 2,400+ Engineering Teams
        </p>
      </div>
    </section>
  );
};

export default Testimonials;