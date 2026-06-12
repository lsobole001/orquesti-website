import { ClipboardList, ShieldAlert, Eye } from 'lucide-react';

const benefits = [
  {
    icon: ClipboardList,
    title: 'Less Administrative Work',
    description: 'Enter information once and let it flow through the entire operation. No re-keying, no double entry, no chasing data across systems.',
    stat: '70%',
    statLabel: 'reduction in admin tasks',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    icon: ShieldAlert,
    title: 'Fewer Operational Errors',
    description: 'When data flows automatically between modules, manual errors disappear. Conflicts are detected before they become problems.',
    stat: '90%',
    statLabel: 'fewer payroll errors',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Eye,
    title: 'Complete Operational Visibility',
    description: 'See your entire operation in real time — from coverage gaps to payment cycles to reconciliation status. No blind spots.',
    stat: '100%',
    statLabel: 'financial traceability',
    gradient: 'from-violet-500 to-purple-600',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Run the business, <span className="text-gradient-amber">not the spreasheets</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Not marketing promises. Concrete outcomes from integrated operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative rounded-2xl glass border border-white/5 p-6 sm:p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                <benefit.icon size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{benefit.description}</p>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-end gap-2">
                  <span className={`text-3xl font-extrabold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                    {benefit.stat}
                  </span>
                  <span className="text-xs text-white/40 pb-1">{benefit.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
