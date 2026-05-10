import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, ArrowRight, ShieldCheck, Activity, Globe, Command, Cpu, Play } from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#F7F5F2]">
      {/* INSTITUTIONAL OVERLAY */}
      <div className="paper-texture" />
      
      {/* DYNAMIC SCROLL PROGRESS RAIL */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-black/5 z-40 hidden lg:block">
        <motion.div 
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="w-full h-full bg-black/40" 
        />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 vertical-rl text-[7px] tracking-[0.4em] uppercase text-black/20 font-mono">
          PAGE_PROGRESS
        </div>
      </div>

      {/* 1. THE HEADER */}
      <header className="fixed top-0 left-0 w-full p-10 flex justify-between items-start z-50 mix-blend-difference pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-1 pointer-events-auto cursor-default"
        >
          <div className="text-[11px] tracking-[0.6em] font-medium uppercase text-white">A R K Z E T</div>
          <div className="text-[7px] tracking-[0.3em] font-mono uppercase text-white/40">INFRASTRUCTURE_GROUP // V.2026.04</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="flex items-start gap-12 pointer-events-auto"
        >
          <div className="hidden md:flex flex-col items-end gap-1 text-white">
             <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[8px] tracking-[0.2em] font-mono uppercase font-bold">SYSTEM_ACTIVE</span>
             </div>
             <span className="text-[7px] tracking-[0.1em] font-mono text-white/30 uppercase opacity-50 group-hover:opacity-100 transition-opacity">ENCRYPTION: AES_256_GCM</span>
          </div>
          <button className="text-white/40 hover:text-white transition-all duration-700 hover:scale-110 active:scale-95 group relative">
            <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <Command size={16} />
          </button>
        </motion.div>
      </header>

      {/* 2. THE HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center px-8 z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center"
        >
          <Reveal>
             <div className="institutional-label mb-8">MANIFESTO_SERIES_001</div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="font-serif text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-[-0.03em] mb-12 text-[#0A0A0A]">
              The Latency Leak.
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-xl md:text-2xl font-light text-black/50 tracking-tight max-w-2xl mx-auto leading-relaxed italic border-x border-black/5 px-12">
              Why elite clinical moats are bleeding high-ticket capital to analog infrastructure.
            </p>
          </Reveal>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[8px] tracking-[0.4em] uppercase font-mono text-black">SCROLL_TO_INITIALIZE</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={14} className="text-black" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. THE DIAGNOSTIC (Left-aligned) */}
      <section className="py-48 max-w-7xl mx-auto px-8 lg:px-24 border-t border-black/[0.03]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 translate-y-2">
            <Reveal>
              <div className="institutional-label mb-4">DIAGNOSTIC_PROTOCOL_A</div>
              <h2 className="font-serif text-5xl md:text-6xl text-[#0A0A0A] leading-tight">The 9-to-5 Bottleneck</h2>
              <div className="mt-8 w-12 h-[1px] bg-black/10" />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.3}>
              <div className="editorial-max-width">
                <p className="text-2xl font-light leading-[1.7] text-black/80 mb-12 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:text-black">
                  You have built a serious clinical authority in your market. But operationally, your digital intake is bound by human limitations. When an affluent prospect researches your high-ticket protocols at 11 PM and is ready to pull the trigger, they are met with a static web form. 
                </p>
                <p className="text-xl font-light leading-[1.7] text-black/60">
                  You are forcing a highly impulsive, cash-pay buyer to wait twelve hours for your staff to return to the office. By morning, the impulse has died, and the capital has moved to an inferior competitor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. THE FRICTION (Asymmetrical) */}
      <section className="py-48 bg-black/[0.01]">
        <div className="max-w-7xl mx-auto px-8 lg:px-24 flex flex-col items-end">
          <div className="w-full lg:w-3/4 border-r border-black/5 pr-12 lg:pr-24 py-12">
            <Reveal>
              <div className="institutional-label mb-4 text-right">DIAGNOSTIC_PROTOCOL_B</div>
              <h2 className="font-serif text-5xl md:text-6xl text-[#0A0A0A] text-right mb-16 italic">The Human Limitation</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-2xl font-light leading-[1.8] text-black/80 max-w-3xl ml-auto text-right mb-12 tracking-tight">
                "Even during operational hours, your front desk staff are not trained closers. They hesitate during complex financial discussions. They are uncomfortable navigating multi-thousand-dollar commitments over the phone."
              </p>
              <div className="flex justify-end gap-16 items-center">
                <div className="hidden md:flex flex-col gap-1 items-end">
                  <span className="text-[10px] font-mono text-black/20 uppercase">Leakage_Estimate</span>
                  <span className="text-xl font-mono text-red-900/60 tracking-tighter">$240,000 / ANNUM</span>
                </div>
                <p className="text-lg font-light text-black/40 max-w-md text-right">
                  Relying on manual callbacks for premium patient acquisition is an unscalable, high-friction model that quietly costs high-ticket clinics revenue daily.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

       {/* 6. THE ARCHITECTURE (Advanced Grid) */}
       <section className="py-64 max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <Reveal>
              <div className="institutional-label mb-6">INFRASTRUCTURE_LAYER</div>
              <h2 className="font-serif text-5xl md:text-7xl mb-12 text-[#0A0A0A] tracking-tighter">Sovereign AI Infrastructure</h2>
              <div className="flex flex-col gap-8 mt-16">
                {[
                  { icon: ShieldCheck, title: "Closed-Loop Integrity", desc: "Sovereign data silos for sensitive clinical records." },
                  { icon: Activity, title: "Real-Time Synthesis", desc: "Autonomous patient profiling before the first clinical contact." },
                  { icon: Globe, title: "Global Latency Zero", desc: "24/7 engagement across all time zones with zero delay." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="p-3 border border-black/5 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500 text-black">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-black">
                        {item.title}
                      </h4>
                      <p className="text-sm font-light text-black/50 tracking-tight leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="relative">
             <Reveal delay={0.4}>
                <p className="text-2xl font-light leading-[1.8] text-black mb-12">
                  We do not run marketing campaigns. We engineer closed-loop, autonomous AI infrastructures specifically for elite regenerative and aesthetic clinics. 
                </p>
                <p className="text-lg font-light text-black/60 leading-relaxed">
                  We deploy a 24/7 autonomous concierge that intercepts every inbound lead, flawlessly navigates compliance, and effortlessly handles the exact high-ticket financial conversations your staff avoids.
                </p>
             </Reveal>
             
             {/* Abstract Grid Decor */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-black/[0.02] grid grid-cols-6 grid-rows-6 pointer-events-none">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-black/[0.02]" />
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 7. THE RESULT (Focused Impact) */}
      <section className="py-64 border-t border-black/[0.03] text-center px-8 flex flex-col items-center">
        <Reveal>
          <div className="institutional-label mb-12">OUTPUT_VERIFICATION</div>
          <h2 className="font-serif text-[8vw] lg:text-[6vw] mb-12 inline-block relative text-[#0A0A0A]">
            Zero Bloat. Total Capture.
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -bottom-4 left-0 h-[1px] bg-black/10" 
            />
          </h2>
        </Reveal>
        <Reveal delay={0.3} className="editorial-max-width mt-16 px-4">
          <p className="text-2xl md:text-3xl font-light leading-[1.8] text-black/60 italic tracking-tight">
            "Our infrastructure bypasses manual intake entirely. It drops fully funded, pre-cleared patients directly onto your calendar alongside a predictive psychological profile. You do not manage it. You do not train it."
          </p>
        </Reveal>
      </section>

      {/* 8. THE COMMAND (CTA) */}
      <section className="py-72 flex flex-col items-center bg-black/[0.01] border-y border-black/[0.03]">
        <Reveal className="flex flex-col items-center px-8">
          <h3 className="font-serif text-3xl md:text-5xl mb-16 text-[#0A0A0A] tracking-tight">Secure the Perimeter.</h3>
          
          <div className="text-center">
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-[3px] h-[3px] bg-black/40 rounded-full" />
              ))}
            </div>
            <p className="font-mono text-[9px] tracking-[0.5em] text-black/30 uppercase max-w-sm mx-auto leading-relaxed">
              Confidentiality_Agreement_Mandatory // 0xPROTO_009_V
            </p>
          </div>
        </Reveal>
      </section>

      {/* 9. THE FOOTER */}
      <footer className="py-24 px-10 border-t border-black/5 bg-[#F7F5F2] relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="flex flex-col gap-4">
             <div className="text-[12px] tracking-[0.8em] font-medium uppercase text-black">A R K Z E T</div>
             <div className="text-[8px] tracking-[0.3em] font-mono uppercase text-black/20">PRIVATE_INFRASTRUCTURE_GROUP</div>
             <div className="mt-8 text-[8px] tracking-[0.2em] font-mono uppercase text-black/20">2026© ALL RIGHTS RESERVED</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 w-full md:w-auto">
             <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-black/20 uppercase tracking-[0.4em]">Protocol</span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-black/60">Briefing.v7.4</span>
             </div>
             <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-black/20 uppercase tracking-[0.4em]">Security</span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-black/60">Institutional_Silo</span>
             </div>
             <div className="flex flex-col gap-4 text-left sm:text-right">
                <span className="text-[10px] font-mono text-black/20 uppercase tracking-[0.4em]">Network_Stats</span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-black/60">Ping: 7.2ms // 0%_LOSS</span>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 border-t border-black/[0.03] pt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-20">
          <span className="text-[7px] tracking-[0.6em] font-mono uppercase">ESTABLISHED // SILICON_VALLEY // LONDON</span>
          <span className="text-[7px] tracking-[0.6em] font-mono uppercase mt-4 md:mt-0">TRANSMISSION_SECURE_NODE_01</span>
        </div>
      </footer>
    </div>
  );
}
