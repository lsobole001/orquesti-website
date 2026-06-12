import { useEffect, useRef, useState } from 'react';
import {
  MessageCircle,
  FileSpreadsheet,
  Calendar,
  DollarSign,
  Building2,
  FileText,
  AlertTriangle,
  Users,
  Handshake,
  CreditCard,
  Wallet,
  Receipt,
  Landmark,
  CalendarClock,
  CheckCircle2,
  Plus,
} from 'lucide-react';

const disconnectedTools = [
  { icon: MessageCircle, name: 'WhatsApp', x: '8%', y: '18%' },
  { icon: FileSpreadsheet, name: 'Excel', x: '62%', y: '12%' },
  { icon: Calendar, name: 'Calendars', x: '30%', y: '34%' },
  { icon: DollarSign, name: 'Payroll', x: '60%', y: '42%' },
  { icon: Building2, name: 'Banking', x: '6%', y: '68%' },
  { icon: FileText, name: 'Invoicing', x: '52%', y: '72%' },
];

// Dashed lines connecting the disconnected tools chaotically
const dashedLines = [
  { x1: '22%', y1: '24%', x2: '68%', y2: '20%' },
  { x1: '22%', y1: '24%', x2: '40%', y2: '40%' },
  { x1: '68%', y1: '20%', x2: '40%', y2: '40%' },
  { x1: '40%', y1: '40%', x2: '68%', y2: '48%' },
  { x1: '18%', y1: '72%', x2: '40%', y2: '40%' },
  { x1: '18%', y1: '72%', x2: '62%', y2: '78%' },
  { x1: '68%', y1: '48%', x2: '62%', y2: '78%' },
  { x1: '22%', y1: '24%', x2: '18%', y2: '72%' },
  { x1: '68%', y1: '20%', x2: '62%', y2: '78%' },
];

const orbitModules = [
  { icon: Receipt, label: 'Invoicing', colorClass: 'text-blue-400 bg-blue-400/10 border-blue-500/30', angle: 0 },
  { icon: Users, label: 'People', colorClass: 'text-green-400 bg-green-400/10 border-green-500/30', angle: 60 },
  { icon: Handshake, label: 'Contracts', colorClass: 'text-violet-400 bg-violet-400/10 border-violet-500/30', angle: 120 },
  { icon: CreditCard, label: 'Reconciliation', colorClass: 'text-orange-400 bg-orange-400/10 border-orange-500/30', angle: 180 },
  { icon: Wallet, label: 'Payments', colorClass: 'text-teal-400 bg-teal-400/10 border-teal-500/30', angle: 240 },
  { icon: CalendarClock, label: 'Scheduling', colorClass: 'text-amber-400 bg-amber-400/10 border-amber-500/30', angle: 300 },
];

function OrbitHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [exploded, setExploded] = useState(false);
  const [radius, setRadius] = useState(0);

  const getRadius = () => {
    if (typeof window === 'undefined') return 140;
    if (window.innerWidth < 480) return 100;
    if (window.innerWidth < 640) return 120;
    return 140;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !exploded) {
          setTimeout(() => {
            setRadius(getRadius());
            setExploded(true);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [exploded]);

  useEffect(() => {
    if (!exploded) return;
    const onResize = () => setRadius(getRadius());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [exploded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Pulsing rings behind center */}
      <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-amber-500/10 animate-ping-slow pointer-events-none" />
      <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-amber-500/15 animate-ping-fast pointer-events-none" />

      {/* Center node */}
      <div className="absolute z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-500 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.4)] cursor-default">
        <Plus size={28} className="text-navy-950 font-bold" strokeWidth={3} />
      </div>

      {/* Orbit modules */}
      {orbitModules.map((mod, i) => {
        const rad = (mod.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <div
            key={mod.label}
            className="absolute z-20 transition-all duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translate(${exploded ? x : 0}px, ${exploded ? y : 0}px)`,
              opacity: exploded ? 1 : 0,
              transitionDelay: `${i * 60}ms`,
            }}
          >
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm bg-navy-800/80 ${mod.colorClass} text-xs font-medium whitespace-nowrap shadow-lg`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${mod.colorClass.split(' ')[0].replace('text-', 'bg-')}`} />
              {mod.label}
            </div>
          </div>
        );
      })}

      {/* "Entered once" badge */}
      <div
        className="absolute bottom-4 right-4 z-20 transition-all duration-700 delay-700"
        style={{ opacity: exploded ? 1 : 0 }}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
          <CheckCircle2 size={12} />
          Entered once
        </div>
      </div>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Your operation is <span className="text-gradient-amber">fragmented</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            When information lives across disconnected tools, errors multiply and visibility disappears.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {/* LEFT — disconnected tools */}
          <div className="relative rounded-2xl overflow-hidden glass border border-white/10" style={{ minHeight: '360px' }}>
            {/* Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-800/80 border border-white/10 text-xs text-white/60 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Before — 6 disconnected tools
            </div>

            {/* SVG dashed lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {dashedLines.map((line, i) => (
                <line
                  key={i}
                  x1={line.x1} y1={line.y1}
                  x2={line.x2} y2={line.y2}
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="0.4"
                  strokeDasharray="1.5,1.5"
                />
              ))}
            </svg>

            {/* Tool pills */}
            {disconnectedTools.map((tool, i) => (
              <div
                key={tool.name}
                className="absolute z-10 flex items-center gap-2 px-3 py-2 rounded-xl bg-navy-800/80 border border-white/10 backdrop-blur-sm text-sm text-white/70 shadow-lg"
                style={{ left: tool.x, top: tool.y }}
              >
                <tool.icon size={16} className="shrink-0 text-white/40" />
                {tool.name}
              </div>
            ))}

            {/* Error badge on Invoicing */}
            <div
              className="absolute z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-[11px] font-medium"
              style={{ left: '52%', top: '82%' }}
            >
              <AlertTriangle size={11} />
              Data re-entered 4×
            </div>
          </div>

          {/* RIGHT — Orquesti hub */}
          <div className="relative rounded-2xl overflow-hidden glass-strong border border-amber-500/20 glow-amber" style={{ minHeight: '360px' }}>
            {/* Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs text-amber-400 backdrop-blur-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              With Orquesti — one connected system
            </div>

            <OrbitHub />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.5; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes ping-fast {
          0% { transform: scale(0.85); opacity: 0.6; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-fast {
          animation: ping-fast 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
}
