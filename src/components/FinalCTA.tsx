import { ArrowRight, Shield, Cloud, Zap } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 border border-amber-500/20 glow-amber text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Stop managing your operation across <span className="text-gradient-amber">multiple systems</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Centralize candidates, contracts, scheduling, payments, invoicing and reconciliation in one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/25 group text-lg"
            >
              Create Free Account
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 text-lg"
            >
              Book a Demo
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Shield, text: 'Free plan available' },
              { icon: Cloud, text: 'No credit card required' },
              { icon: Zap, text: 'Fast onboarding' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-white/40">
                <item.icon size={16} className="text-amber-500/60" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
