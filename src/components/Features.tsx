import {
  UserPlus, Heart, CalendarClock, Wallet, Receipt, Landmark,
  MessageCircle, Tag, FileCheck, MapPin, Clock, AlertTriangle,
  CheckCircle2, TrendingUp, Filter, Search,
} from 'lucide-react';

const features = [
  {
    icon: UserPlus, label: 'Talent Database',
    title: 'Build your talent database automatically',
    description: 'Reduce administrative work and build a reusable talent pool.',
    items: [
      { icon: MessageCircle, text: 'Candidate self-registration' },
      { icon: FileCheck, text: 'Digital employee profiles' },
      { icon: Tag, text: 'Tags and groups' },
      { icon: Clock, text: 'Contract history' },
      { icon: MessageCircle, text: 'WhatsApp communication' },
    ],
    color: 'from-violet-500 to-purple-600', accent: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', mockup: 'talent',
  },
  {
    icon: Heart, label: 'Patients & Contracts',
    title: 'Manage patients and contracts',
    description: 'Everything needed to manage a client relationship in one place.',
    items: [
      { icon: Heart, text: 'Patient information' },
      { icon: MessageCircle, text: 'Contact details' },
      { icon: MapPin, text: 'Locations' },
      { icon: Clock, text: 'Service history' },
      { icon: CalendarClock, text: 'Schedule templates' },
    ],
    color: 'from-cyan-500 to-blue-600', accent: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', mockup: 'patients',
  },
  {
    icon: CalendarClock, label: 'Scheduling',
    title: 'Stop building schedules from scratch',
    description: 'Focus on exceptions instead of manual scheduling.',
    items: [
      { icon: CalendarClock, text: 'Automatic schedule generation' },
      { icon: FileCheck, text: 'Reusable templates' },
      { icon: AlertTriangle, text: 'Conflict detection' },
      { icon: CheckCircle2, text: 'Demand coverage validation' },
      { icon: AlertTriangle, text: 'Priority alerts' },
    ],
    color: 'from-teal-500 to-emerald-600', accent: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/20', mockup: 'schedule',
  },
  {
    icon: Wallet, label: 'Payments',
    title: 'Automatic employee payments',
    description: 'Reduce payroll errors and save hours every cycle.',
    items: [
      { icon: Wallet, text: 'Payment calculations' },
      { icon: FileCheck, text: 'Custom rules' },
      { icon: TrendingUp, text: 'Adjustments' },
      { icon: TrendingUp, text: 'Variations' },
      { icon: Clock, text: 'Historical records' },
    ],
    color: 'from-amber-500 to-orange-600', accent: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', mockup: 'payments',
  },
  {
    icon: Receipt, label: 'Invoicing',
    title: 'Automatic invoicing',
    description: 'Faster invoicing with fewer discrepancies.',
    items: [
      { icon: Receipt, text: 'Generate invoices from completed work' },
      { icon: Search, text: 'Full traceability' },
      { icon: Clock, text: 'Historical records' },
      { icon: Filter, text: 'Advanced filtering' },
    ],
    color: 'from-orange-500 to-red-600', accent: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', mockup: 'invoicing',
  },
  {
    icon: Landmark, label: 'Reconciliation',
    title: 'Bank reconciliation',
    description: 'Spend minutes instead of hours reconciling accounts.',
    items: [
      { icon: Landmark, text: 'Automatic reconciliation' },
      { icon: AlertTriangle, text: 'Difference detection' },
      { icon: TrendingUp, text: 'Financial visibility' },
      { icon: FileCheck, text: 'Audit trail' },
    ],
    color: 'from-emerald-500 to-teal-600', accent: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', mockup: 'reconciliation',
  },
];

function FeatureMockup({ type }: { type: string }) {
  if (type === 'talent') {
    return (
      <div className="bg-navy-800/60 rounded-xl p-6 space-y-4 border border-white/5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/70">Candidate Pipeline</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-400">24 new</span>
        </div>
        {['Maria Santos', 'James Cooper', 'Aisha Khan'].map((name, i) => (
          <div key={name} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${i === 0 ? 'bg-violet-500/20 text-violet-300' : i === 1 ? 'bg-blue-500/20 text-blue-300' : 'bg-amber-500/20 text-amber-300'}`}>
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white/80 truncate">{name}</p>
              <p className="text-xs text-white/40">{['Interview scheduled', 'Profile complete', 'New registration'][i]}</p>
            </div>
            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-violet-400' : i === 1 ? 'bg-green-400' : 'bg-amber-400'}`} />
          </div>
        ))}
      </div>
    );
  }
  if (type === 'patients') {
    return (
      <div className="bg-navy-800/60 rounded-xl p-6 space-y-4 border border-white/5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/70">Active Clients</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400">64 total</span>
        </div>
        {['Eleanor Wright', 'Robert Chen', 'Patricia Moore'].map((name, i) => (
          <div key={name} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs font-semibold text-cyan-300">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white/80 truncate">{name}</p>
              <p className="text-xs text-white/40">{['3 services/week', 'Daily care', '2 services/week'][i]}</p>
            </div>
            <MapPin size={16} className="text-white/30" />
          </div>
        ))}
      </div>
    );
  }
  if (type === 'schedule') {
    return (
      <div className="bg-navy-800/60 rounded-xl p-6 space-y-4 border border-white/5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/70">Week Schedule</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-400">92% coverage</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
            <div key={day} className="text-center text-xs text-white/40 pb-2">{day}</div>
          ))}
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className={`h-10 rounded flex items-center justify-center text-xs font-medium ${
              i % 5 === 0 ? 'bg-teal-500/20 text-teal-300' :
              i % 5 === 1 ? 'bg-amber-500/15 text-amber-300' :
              i % 5 === 2 ? 'bg-violet-500/15 text-violet-300' :
              'bg-white/5 text-white/30'
            }`}>
              {['AM', 'PM', 'AM', 'PM', 'AM'][i % 5]}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-teal-500/40" /> Assigned</div>
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-amber-500/40" /> Pending</div>
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-red-500/40" /> Conflict</div>
        </div>
      </div>
    );
  }
  if (type === 'payments') {
    return (
      <div className="bg-navy-800/60 rounded-xl p-6 space-y-4 border border-white/5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/70">Payment Cycle</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400">Calculating</span>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Maria Santos', hours: '38h', amount: '$1,520' },
            { name: 'James Cooper', hours: '42h', amount: '$1,680' },
            { name: 'Aisha Khan', hours: '36h', amount: '$1,440' },
          ].map(emp => (
            <div key={emp.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
              <span className="text-sm text-white/70">{emp.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/40">{emp.hours}</span>
                <span className="text-sm font-semibold text-amber-400">{emp.amount}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-xs text-white/40">Total</span>
          <span className="text-base font-bold text-amber-400">$4,640.00</span>
        </div>
      </div>
    );
  }
  if (type === 'invoicing') {
    return (
      <div className="bg-navy-800/60 rounded-xl p-6 space-y-4 border border-white/5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/70">Invoices</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400">3 pending</span>
        </div>
        {[
          { id: 'INV-241', client: 'Sunrise Care', amount: '$4,200', status: 'Paid' },
          { id: 'INV-242', client: 'Golden Years', amount: '$3,800', status: 'Pending' },
          { id: 'INV-243', client: 'HomeFirst', amount: '$2,950', status: 'Overdue' },
        ].map(inv => (
          <div key={inv.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-sm font-medium text-white/70">{inv.id}</p>
              <p className="text-xs text-white/40">{inv.client}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-white/80">{inv.amount}</p>
              <p className={`text-xs ${inv.status === 'Paid' ? 'text-emerald-400' : inv.status === 'Overdue' ? 'text-red-400' : 'text-amber-400'}`}>{inv.status}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="bg-navy-800/60 rounded-xl p-6 space-y-4 border border-white/5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/70">Reconciliation</span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400">94% matched</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/10">
          <span className="text-sm text-white/70">Bank deposit Jun 10</span>
          <span className="text-sm text-emerald-400">$8,400.00</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/10 border border-amber-500/10">
          <span className="text-sm text-white/70">Unmatched payment</span>
          <span className="text-sm text-amber-400">$340.00</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
          <span className="text-sm text-white/70">Bank deposit Jun 8</span>
          <span className="text-sm text-emerald-400">$12,600.00</span>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything your operation <span className="text-gradient-amber">needs to run</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Six integrated modules that work together as one system.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`group relative rounded-2xl overflow-hidden glass border ${feature.border} transition-all duration-300 hover:border-opacity-40`}
            >
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <feature.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <span className={`text-xs font-medium ${feature.accent} uppercase tracking-wider`}>{feature.label}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{feature.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      {feature.items.map((item) => (
                        <div key={item.text} className="flex items-center gap-3 text-sm sm:text-base text-white/60">
                          <item.icon size={16} className={`${feature.accent} shrink-0`} />
                          {item.text}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-white/40 italic">{feature.description}</p>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <FeatureMockup type={feature.mockup} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
