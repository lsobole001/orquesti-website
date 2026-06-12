import { Heart, Shield, SprayCan, Wrench, Users, Home } from 'lucide-react';

const industries = [
  { icon: Heart, name: 'Home Care', description: 'Domiciliary care agencies managing caregivers, patients and recurring visits.', featured: true, gradient: 'from-amber-500 to-orange-600' },
  { icon: Home, name: 'Senior Care', description: 'Residential and assisted living facilities with complex staffing needs.', featured: false, gradient: 'from-rose-500 to-pink-600' },
  { icon: Users, name: 'Staffing', description: 'Temporary and permanent staffing agencies with high-volume placement workflows.', featured: false, gradient: 'from-blue-500 to-indigo-600' },
  { icon: Shield, name: 'Security Services', description: 'Security companies managing guard rotations, site coverage and compliance.', featured: false, gradient: 'from-slate-400 to-slate-600' },
  { icon: SprayCan, name: 'Cleaning Services', description: 'Commercial and residential cleaning companies with recurring service schedules.', featured: false, gradient: 'from-teal-500 to-cyan-600' },
  { icon: Wrench, name: 'Technical Services', description: 'Field service providers managing technicians, parts and service contracts.', featured: false, gradient: 'from-violet-500 to-purple-600' },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Designed for service businesses with <span className="text-gradient-amber">operational staff</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Built for companies that manage field personnel and recurring services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                industry.featured
                  ? 'glass-strong border-2 border-amber-500/30 glow-amber'
                  : 'glass border border-white/5 hover:border-white/10'
              }`}
            >
              {industry.featured && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-500/20 text-[10px] font-semibold text-amber-400 border border-amber-500/20">
                  Primary Market
                </div>
              )}
              <div className="p-6 sm:p-7">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <industry.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
