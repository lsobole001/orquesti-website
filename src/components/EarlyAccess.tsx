import { useState } from 'react';
import { Mail, Bell, ArrowRight, Check } from 'lucide-react';

export default function EarlyAccess() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="signup" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 border border-amber-500/20 glow-amber text-center">
          {!submitted ? (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400 mb-6">
                <Bell size={14} />
                Coming Soon
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Orquesti will be ready soon
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Be the first to know when we launch. Join the waitlist and we'll notify you as soon as Orquesti is available.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 group whitespace-nowrap"
                  >
                    Notify Me
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/40">
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-teal-400" />
                  Early access priority
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-teal-400" />
                  Exclusive launch pricing
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-teal-400" />
                  No spam, ever
                </span>
              </div>
            </>
          ) : (
            <div className="py-8">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-teal-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">You're on the list!</h3>
              <p className="text-white/50 text-lg">
                We'll let you know as soon as Orquesti is ready. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
