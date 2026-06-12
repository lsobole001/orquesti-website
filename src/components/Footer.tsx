export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg gradient-amber flex items-center justify-center">
                <span className="text-navy-950 font-bold text-xs">O</span>
              </div>
              <span className="text-lg font-bold">Orquesti</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Complete operational management for service businesses with field personnel.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/70">Platform</h4>
            <ul className="space-y-2.5">
              {['Candidates', 'Contracts', 'Scheduling', 'Payments', 'Invoicing', 'Reconciliation'].map(item => (
                <li key={item}><a href="#features" className="text-sm text-white/40 hover:text-white/70 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/70">Industries</h4>
            <ul className="space-y-2.5">
              {['Home Care', 'Senior Care', 'Staffing', 'Security', 'Cleaning', 'Technical Services'].map(item => (
                <li key={item}><a href="#industries" className="text-sm text-white/40 hover:text-white/70 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/70">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Blog', 'Careers', 'Contact', 'Privacy', 'Terms'].map(item => (
                <li key={item}><a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; 2026 Orquesti. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
