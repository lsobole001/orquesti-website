import {
  UserPlus, Users, FileCheck, CalendarClock, Wallet, Receipt, Landmark, ArrowDown,
} from 'lucide-react';

const stages = [
  { icon: UserPlus, label: 'Candidates', color: 'from-violet-500 to-purple-600', bg: 'bg-violet-500/15', border: 'border-violet-500/20', text: 'text-violet-400' },
  { icon: Users, label: 'Employees', color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-500/15', border: 'border-blue-500/20', text: 'text-blue-400' },
  { icon: FileCheck, label: 'Contracts', color: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-500/15', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  { icon: CalendarClock, label: 'Scheduling', color: 'from-teal-500 to-cyan-600', bg: 'bg-teal-500/15', border: 'border-teal-500/20', text: 'text-teal-400' },
  { icon: Wallet, label: 'Payments', color: 'from-amber-500 to-orange-600', bg: 'bg-amber-500/15', border: 'border-amber-500/20', text: 'text-amber-400' },
  { icon: Receipt, label: 'Invoicing', color: 'from-orange-500 to-red-600', bg: 'bg-orange-500/15', border: 'border-orange-500/20', text: 'text-orange-400' },
  { icon: Landmark, label: 'Reconciliation', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-500/15', border: 'border-emerald-500/20', text: 'text-emerald-400' },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            One workflow. <span className="text-gradient-amber">One source of truth.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Information is entered once and flows automatically through the entire operation.
          </p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:flex items-center justify-center gap-0">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center">
              <div className={`group relative flex flex-col items-center gap-3 p-5 rounded-xl ${stage.bg} border ${stage.border} transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                  <stage.icon size={22} className="text-white" />
                </div>
                <span className={`text-xs font-semibold ${stage.text}`}>{stage.label}</span>
              </div>
              {i < stages.length - 1 && (
                <div className="flex items-center px-1">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-white/20 to-white/10" />
                  <ArrowDown size={14} className="text-white/20 rotate-[-90deg]" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-white/10 to-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden flex flex-col items-center gap-0">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex flex-col items-center">
              <div className={`group relative flex items-center gap-3 p-4 rounded-xl ${stage.bg} border ${stage.border} transition-all duration-300 w-full max-w-xs`}>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg shrink-0`}>
                  <stage.icon size={18} className="text-white" />
                </div>
                <span className={`text-sm font-semibold ${stage.text}`}>{stage.label}</span>
              </div>
              {i < stages.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <ArrowDown size={16} className="text-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
            Information is entered once and flows automatically through the entire operation.
            No more re-entering data. No more disconnected systems. No more blind spots.
          </p>
        </div>
      </div>
    </section>
  );
}
