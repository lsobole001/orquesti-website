import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How it Works', href: '#workflow' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-amber flex items-center justify-center">
              <span className="text-navy-950 font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Orquesti</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#demo"
              className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2"
            >
              Book a Demo
            </a>
            <a
              href="#signup"
              className="text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-navy-950 px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Create Free Account
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-white/60 hover:text-white py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a href="#demo" className="block text-sm text-white/70 hover:text-white py-2">
                Book a Demo
              </a>
              <a
                href="#signup"
                className="block text-sm font-semibold bg-amber-500 text-navy-950 px-5 py-2.5 rounded-lg text-center"
              >
                Create Free Account
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
