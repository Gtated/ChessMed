import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap, Star, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: "Group Classes",
    subtitle: "Affordable & Collaborative",
    price: "80",
    period: "month",
    features: [
      "2 Live sessions per week",
      "Level-based batch placing",
      "Monthly performance report",
      "Weekly home assignments",
      "Internal tournament access",
      "Digital student portal"
    ],
    cta: "Join Group Course",
    icon: UsersIcon,
    highlight: false
  },
  {
    name: "Mastery Track",
    subtitle: "Most Popular Strategy",
    price: "150",
    period: "month",
    features: [
      "All Group Class features",
      "1 Personal game analysis session",
      "Custom repertoire building",
      "Elite tournament preparation",
      "Direct coach messaging",
      "Parent consultation calls"
    ],
    cta: "Join Mastery Track",
    icon: Zap,
    highlight: true
  },
  {
    name: "Personal Coaching",
    subtitle: "Exclusively 1-on-1",
    price: "240",
    period: "month",
    features: [
      "4 Intensive 1-on-1 sessions",
      "Fully personalized curriculum",
      "Advanced theoretical training",
      "Opening prep for tournaments",
      "24/7 strategic support",
      "Performance analytics dashboard"
    ],
    cta: "Join Elite Coaching",
    icon: Trophy,
    highlight: false
  }
];

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden text-white">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 italic text-white">Investment in <span className="text-brand-accent underline">Excellence</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Premium coaching shouldn't be complicated. Simple, transparent pricing for world-class chess training.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col relative ${plan.highlight ? 'border-brand-accent shadow-2xl shadow-brand-accent/10 ring-1 ring-brand-accent/50' : 'border-white/10'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 ${plan.highlight ? 'text-brand-accent' : 'text-brand-gold'}`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{plan.subtitle}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-gray-400 text-xl italic font-display">$</span>
                <span className="text-6xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-gray-500 font-medium tracking-wide">/{plan.period}</span>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-accent" />
                    </div>
                    <span className="text-gray-400 text-sm tracking-wide">{feat}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/book-free-trial" 
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${plan.highlight ? 'bg-brand-accent hover:bg-brand-accent-hover text-white shadow-xl shadow-brand-accent/20' : 'bg-white/5 border border-white/20 hover:bg-white/10 text-white'}`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pricing Trust Footer */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 pt-12 border-t border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
           <div className="flex items-center gap-2">
             <ShieldCheck className="w-5 h-5" /> <span className="text-xs uppercase font-bold tracking-widest">30-Day Money Back</span>
           </div>
           <div className="flex items-center gap-2">
             <Star className="w-5 h-5" /> <span className="text-xs uppercase font-bold tracking-widest">Global FIDE Coaches</span>
           </div>
           <div className="flex items-center gap-2">
             <Zap className="w-5 h-5" /> <span className="text-xs uppercase font-bold tracking-widest">No Termination Fees</span>
           </div>
        </div>
      </div>
    </div>
  );
}
