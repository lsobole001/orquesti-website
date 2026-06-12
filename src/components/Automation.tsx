import {
  FileCheck, Receipt, Landmark, AlertTriangle, TrendingDown, CalendarClock,
  Bell, CheckCircle2, Clock, XCircle,
} from 'lucide-react';

const alerts = [
  { icon: FileCheck, text: 'New contract assigned to Maria Santos', type: 'info', time: '2m ago' },
  { icon: Receipt, text: 'Billing cycle closing in 3 days', type: 'warning', time: '1h ago' },
  { icon: Landmark, text: 'Pending reconciliation for June', type: 'warning', time: '2h ago' },
  { icon: AlertTriangle, text: 'Schedule conflict: Tuesday AM shift', type: 'error', time: '3h ago' },
  { icon: TrendingDown, text: 'Critical payment variation detected', type: 'error', time: '5h ago' },
  { icon: CalendarClock, text: 'Missing coverage: 3 unfilled slots', type: 'warning', time: '8h ago' },
];

const typeConfig = {
  info: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: 'text-blue-400' },
  warning: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: 'text-amber-400' },
  error: { bg: 'bg-red-500/10', border: 'border-red-500/20', icon: 'text-red-400' },
};

export default function Automation() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-amber-400 border border-amber-500/20">
              <Bell size={14} />
              Proactive Management
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              The platform tells you <span className="text-gradient-amber">what needs attention</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Stop chasing information across systems. Orquesti's notification center surfaces what matters,
              when it matters — so you manage by exception, not by habit.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: CheckCircle2, label: 'Auto-detected', color: 'text-teal-400' },
                { icon: Clock, label: 'Real-time', color: 'text-amber-400' },
                { icon: XCircle, label: 'Action-required', color: 'text-red-400' },
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center gap-2 p-3 rounded-xl glass">
                  <item.icon size={20} className={item.color} />
                  <span className="text-xs text-white/50 text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-strong rounded-2xl p-5 sm:p-6 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Bell size={16} className="text-amber-400" />
                  <span className="text-sm font-semibold">Notification Center</span>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-red-500/20 text-red-400 font-medium">6 new</span>
              </div>
              <div className="space-y-2">
                {alerts.map((alert, i) => {
                  const config = typeConfig[alert.type as keyof typeof typeConfig];
                  return (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-xl ${config.bg} border ${config.border} transition-all duration-200`}
                    >
                      <alert.icon size={16} className={`${config.icon} mt-0.5 shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/70">{alert.text}</p>
                        <p className="text-[10px] text-white/30 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-white/30">Showing 6 of 24 notifications</span>
                <span className="text-[10px] text-amber-400 font-medium cursor-pointer hover:text-amber-300">View all</span>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-amber-500/5 blur-2xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
