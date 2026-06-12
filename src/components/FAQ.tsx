import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How is Orquesti different from scheduling software?',
    answer: 'Scheduling tools only manage shifts. Orquesti manages the entire operational lifecycle — from candidate recruitment through contracts, scheduling, payments, invoicing and bank reconciliation. Information flows automatically between each stage, eliminating re-entry and errors.',
  },
  {
    question: 'Do I need technical knowledge to use Orquesti?',
    answer: 'No. Orquesti is designed to be intuitive and easy to use. No special technical knowledge is required.  Tours will guide yout to take full advantage of the features',
  },
  {
    question: 'How does the free plan work?',
    answer: 'The free plan forever includes all the functionality with limits in the number of employees. No credit card is required to start, and you can upgrade as your operation grows.',
  },
  {
    question: 'Do I need to install any software to use Orquesti?',
    answer: "No. You can access Orquesti through your preferred web browser on both mobile and desktop devices.",
  },
  {
    question: 'Can I import my existing data?',
    answer: 'Yes. Orquesti allows you to import data from Excel and other common file formats, making migration quick and easy.',
  },
  {
    question: 'Is my data secure?',
    answer: 'All data is encrypted at rest and in transit. We use cloud infrastructure with enterprise-grade security, regular backups and strict access controls. Your operational data never leaves our secure environment.',
  },
    {
    question: 'Can I customize Orquesti for my company?',
    answer: 'Yes. Orquesti offers multiple customization options, including templates, custom fields, company branding, custom URLs, and company-specific settings.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Frequently asked <span className="text-gradient-amber">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass rounded-xl border border-white/5 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-medium text-white/80 pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-white/30 shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
