import { ArrowRight, Bell, Sparkles, Globe, Rocket } from 'lucide-react';

const trustItems = [
  { icon: Bell, text: 'Early access notification' },
  { icon: Sparkles, text: 'Launch pricing exclusive' },
  { icon: Globe, text: 'Cloud-based platform' },
  { icon: Rocket, text: 'Be first to try it' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-amber-400 border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse-slow" />
                Designed for Home Care Operations
              </span>
            </div>

            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Manage your entire operation from{' '}
              <span className="text-gradient-amber">a single platform</span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
              From candidate recruitment to bank reconciliation. Orquesti connects people,
              contracts, schedules, payments and invoicing in one integrated workflow.
            </p>

            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-3">
              <a
                href="#signup"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 group"
              >
                Join Waitlist
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="animate-fade-in-up animate-delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-xs text-white/40">
                  <item.icon size={14} className="text-amber-500/60 shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in animate-delay-300 relative">
            <div className="relative rounded-xl overflow-hidden mockup-shadow">
              <div className="bg-navy-800/80 border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-[10px] text-white/30 ml-2">Orquesti — Schedule & Payments</span>
                </div>
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/40">Week Overview</p>
                      <p className="text-sm font-semibold">June 8 — June 14, 2026</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-1 rounded bg-amber-500/20 text-amber-400 font-medium">5 Active</span>
                      <span className="text-[10px] px-2 py-1 rounded bg-teal-500/20 text-teal-400 font-medium">12 Scheduled</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <div key={day} className="text-center text-[9px] text-white/30 pb-1">{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded text-[8px] flex items-center justify-center ${
                          i >= 7 && i < 14
                            ? i % 2 === 0 ? 'bg-amber-500/20 text-amber-300' : 'bg-teal-500/15 text-teal-300'
                            : i >= 14 && i < 21 ? 'bg-white/5 text-white/20'
                            : 'text-white/10'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <p className="text-[10px] text-white/40">Payment Cycle</p>
                      <p className="text-sm font-semibold text-amber-400">$24,580.00</p>
                      <p className="text-[9px] text-white/30 mt-1">8 employees · 142 hours</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <p className="text-[10px] text-white/40">Invoiced</p>
                      <p className="text-sm font-semibold text-teal-400">$31,200.00</p>
                      <p className="text-[9px] text-white/30 mt-1">6 clients · 94% collected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-amber-500/10 blur-2xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
