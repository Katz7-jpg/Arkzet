import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { ChevronDown, ArrowRight, ShieldCheck, Activity, Globe, Command, Cpu, Terminal, Fingerprint, Layers, Clock } from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative bg-[#050505] text-[#A3A3A3] font-sans selection:bg-white selection:text-black">
      <div className="noise-overlay" />
      <div className="ambient-flare" />
      
      {/* MOUSE GLOW */}
      <motion.div 
        style={{ 
          left: mouseX, 
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%" 
        }}
        className="fixed w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none z-0 hidden lg:block"
      />

      {/* HEADER: MINIMALIST INSTITUTIONAL */}
      <header className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-50 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col pointer-events-auto cursor-default"
        >
          <div className="text-[12px] tracking-[0.8em] font-medium text-white uppercase mb-1">A R K Z E T</div>
          <div className="text-[7px] tracking-[0.4em] font-mono text-white/20 uppercase">SECURE_NETWORK_V2</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex items-center gap-10 pointer-events-auto"
        >
          <div className="hidden lg:flex items-center gap-2 font-mono text-[7px] tracking-widest text-white/30 uppercase">
             <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
             NODE_OP: ACTIVE
          </div>
          <button className="text-white/40 hover:text-white transition-all group p-2 border border-white/5 bg-white/5 rounded-sm">
            <Terminal size={14} />
          </button>
        </motion.div>
      </header>

      {/* HERO: CINEMATIC REVEAL */}
      <section className="relative h-screen flex flex-col justify-center items-center px-8 z-10 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="text-center">
          <Reveal>
             <div className="institutional-label mb-10 text-white/40">INFRASTRUCTURE_PROTOCOL_01</div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="font-serif text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.8] tracking-[-0.04em] mb-12 text-white italic">
              The Latency Leak.
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
               <div className="h-[1px] w-24 bg-white/10 hidden md:block" />
               <p className="text-lg md:text-xl font-light text-white/40 tracking-tight max-w-xl leading-relaxed italic">
                 Why elite clinical moats are bleeding high-ticket capital to analog infrastructure.
               </p>
               <div className="h-[1px] w-24 bg-white/10 hidden md:block" />
            </div>
          </Reveal>
        </motion.div>

        {/* BOTTOM DECOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="absolute bottom-12 flex flex-col items-center gap-4 border-l border-white/10 pl-6 h-24 justify-end"
        >
          <span className="text-[8px] tracking-[0.5em] uppercase font-mono text-white/20 vertical-rl">BEGIN_TRANSMISSION</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <div className="w-[1px] h-8 bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* DIAGNOSTIC: LAYERED GRID */}
      <section className="py-64 relative z-10 max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-10 h-[1px] bg-white/20" />
                 <span className="institutional-label">CORE_FAILURE_SYNC</span>
              </div>
              <h2 className="font-serif text-6xl md:text-8xl text-white leading-none mb-12">The <br /> Bottleneck.</h2>
              <p className="text-xl font-light text-white/50 leading-relaxed max-w-md">
                You have built a serious clinical authority in your market. But operationally, your digital intake is bound by human limitations.
              </p>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 space-y-24">
            <Reveal delay={0.4}>
              <div className="luxe-card p-12 md:p-16 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                 <h3 className="font-serif text-3xl text-white mb-8 italic">The Human Limitation</h3>
                 <p className="text-lg font-light text-white/40 leading-relaxed border-l border-white/10 pl-10 mb-12">
                   "When an affluent prospect researches your high-ticket protocols at 11 PM and is ready to pull the trigger, they are met with a static web form. You are forcing a highly impulsive, cash-pay buyer to wait twelve hours for your staff to return to the office. By morning, the impulse has died, and the capital has moved to an inferior competitor."
                 </p>
                 <div className="flex items-center gap-8 text-white/20 font-mono text-[9px] tracking-widest uppercase">
                   <div className="flex items-center gap-2">
                     <Clock className="w-3 h-3 text-red-900" />
                     OP_TIME: 9-5
                   </div>
                   <div className="flex items-center gap-2">
                     <Fingerprint className="w-3 h-3 text-red-900" />
                     INPUT: ANALOG
                   </div>
                 </div>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="grid grid-cols-2 gap-8">
                 <div className="luxe-card p-8 flex flex-col gap-6">
                    <Layers size={18} className="text-white/20" />
                    <div>
                       <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-2">Leakage_Surface</div>
                       <div className="text-3xl font-light text-white tracking-tighter">92.4%</div>
                    </div>
                 </div>
                 <div className="luxe-card p-8 flex flex-col gap-6">
                    <Cpu size={18} className="text-white/20" />
                    <div>
                       <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-2">Efficiency_Gain</div>
                       <div className="text-3xl font-light text-white tracking-tighter">+480%</div>
                    </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE FRICTION: DEEP QUOTE */}
      <section className="py-64 max-w-7xl mx-auto px-8 lg:px-24">
        <Reveal>
          <div className="flex justify-end">
            <div className="w-full lg:w-2/3 text-right">
               <div className="institutional-label mb-8">DIAGNOSTIC_PROTOCOL_B</div>
               <h3 className="font-serif text-4xl md:text-6xl text-white mb-12 italic leading-tight">"Even during operational hours, your front desk staff are not trained closers."</h3>
               <p className="text-xl font-light text-white/40 leading-relaxed border-r border-white/10 pr-10 mb-12">
                 They hesitate during complex financial discussions. They are uncomfortable navigating multi-thousand-dollar commitments over the phone. Relying on manual callbacks for premium patient acquisition is an unscalable, high-friction model that quietly costs hundreds of thousands in leaked revenue annually.
               </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ARCHITECTURE: FULL WIDTH PROTOCOL */}
      <section className="py-64 bg-white/[0.01] border-y border-white/[0.03] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.01] blur-[150px] -rotate-45" />
        
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
           <Reveal className="text-center mb-32">
              <div className="institutional-label mb-8">INFRASTRUCTURE_ARCHITECTURE</div>
              <h2 className="font-serif text-6xl md:text-8xl text-white tracking-tight">Sovereign AI Infrastructure</h2>
              <p className="text-xl font-light text-white/40 max-w-2xl mx-auto mt-12">
                We do not run marketing campaigns. We engineer closed-loop, autonomous AI infrastructures specifically for elite regenerative and aesthetic clinics.
              </p>
           </Reveal>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
              {[
                { title: "Autonomous Concierge", icon: Activity, iconColor: "text-blue-500", desc: "Intercepts every inbound lead, flawlessly navigates compliance, and handles the high-ticket financial conversations your staff avoids." },
                { title: "Security Protocols", icon: ShieldCheck, iconColor: "text-green-500", desc: "End-to-end encryption with sovereign medical data silos for sensitive clinical records." },
                { title: "Capture Efficiency", icon: ArrowRight, iconColor: "text-white", desc: "Autonomous financial resolution with zero staff intervention, dropping pre-cleared patients directly onto your calendar." }
              ].map((item, i) => (
                <div key={i} className="bg-[#050505] p-16 flex flex-col gap-10 hover:bg-white/[0.02] transition-colors duration-700 group">
                   <div className={`w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 ${item.iconColor}`}>
                     <item.icon size={20} />
                   </div>
                   <div>
                     <h4 className="text-xs uppercase tracking-[0.3em] font-medium text-white mb-6 underline underline-offset-8 decoration-white/10">{item.title}</h4>
                     <p className="text-sm font-light text-white/30 leading-relaxed pr-8">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* THE RESULT: FOCUSED IMPACT */}
      <section className="py-64 text-center px-8 border-b border-white/[0.03]">
        <Reveal>
          <div className="institutional-label mb-12">OUTPUT_VERIFICATION</div>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-16 underline decoration-white/10 underline-offset-[20px]">Zero Bloat. Total Capture.</h2>
          <p className="text-2xl md:text-3xl font-light leading-[1.8] text-white/40 italic max-w-4xl mx-auto">
             "Our infrastructure bypasses manual intake entirely. It drops fully funded, pre-cleared patients directly onto your calendar alongside a predictive psychological profile. You do not manage it. You do not train it. You wake up to a schedule of cash-ready patients waiting for your clinical approval."
          </p>
        </Reveal>
      </section>

      {/* CTA SECTION */}
      <section className="py-64 flex flex-col items-center justify-center text-center px-8">
        <Reveal>
           <h2 className="font-serif text-5xl md:text-7xl text-white mb-20 italic">Secure the Perimeter.</h2>
           <button className="pill-button group relative overflow-hidden">
             <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Request Architecture Briefing</span>
             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
           </button>
        </Reveal>
      </section>

      {/* FOOTER: THE SECURE NODE */}
      <footer className="py-32 px-12 lg:px-24 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
           <div className="flex flex-col gap-12">
              <Reveal>
                 <div className="text-[14px] tracking-[1em] font-medium text-white uppercase mb-4">A R K Z E T</div>
                 <p className="text-sm font-light text-white/20 max-w-md leading-relaxed tracking-tight">
                   Engineered for elite clinical leaders. Private. Secure. Autonomous.
                 </p>
              </Reveal>
              
              <div className="flex items-center gap-12 border-t border-white/5 pt-12">
                 <div className="flex flex-col gap-2">
                    <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.4em]">NETWORK_STATUS</span>
                    <span className="text-[10px] text-green-500/60 font-mono">STABLE_CONNECTION</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.4em]">ENCRYPTION</span>
                    <span className="text-[10px] text-white/40 font-mono">TLS_1.3_ACTIVE</span>
                 </div>
              </div>
           </div>

           <div className="flex flex-col items-end gap-16">
              <div className="text-right flex flex-col gap-2">
                 <span className="text-[6px] font-mono text-white/10 uppercase tracking-[0.8em]">ARKZET INFRASTRUCTURE GROUP © 2026</span>
                 <span className="text-[6px] font-mono text-white/10 uppercase tracking-[0.4em]">PRIVATE_ACCESS_ONLY // NO_PUBLIC_LOGS</span>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

