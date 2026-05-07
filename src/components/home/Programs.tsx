import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Users, Zap, BookOpen } from 'lucide-react';

const programs = [
  {
    title: 'Beginner Foundations',
    age: '5-12 Years',
    outcome: 'Learn basic strategy, notation, and tactics.',
    icon: Target,
    color: 'bg-blue-500',
  },
  {
    title: 'Intermediate Tactics',
    age: '7-14 Years',
    outcome: 'Master complex openings and middle-game concepts.',
    icon: Zap,
    color: 'bg-brand-accent',
  },
  {
    title: 'Advanced Competitive',
    age: '10+ Years',
    outcome: 'FIDE rating preparation and theoretical mastery.',
    icon: BookOpen,
    color: 'bg-brand-gold',
  },
  {
    title: 'Personal Coaching',
    age: 'All Ages',
    outcome: '1-on-1 intensive training with International Masters.',
    icon: Users,
    color: 'bg-purple-500',
  },
];

export function ProgramsPreview() {
  return (
    <section className="py-24 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Structured Programs for <br/><span className="text-brand-accent italic">Every Skill Level</span></h2>
            <p className="text-gray-400 max-w-xl">Whether you are making your first move or preparing for a Grand Prix, we have a path for you.</p>
          </div>
          <Link to="/programs" className="btn-secondary group">
            View All Programs <ChevronRight className="inline-block w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-1 group overflow-hidden"
            >
              <div className="p-8 h-full flex flex-col">
                <div className={`w-12 h-12 ${prog.color} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
                  <prog.icon className="text-white w-6 h-6" />
                </div>
                <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{prog.age}</div>
                <h3 className="text-xl font-bold mb-4">{prog.title}</h3>
                <p className="text-gray-400 text-sm mb-8 flex-grow">{prog.outcome}</p>
                <Link to="/book-free-trial" className="flex items-center gap-2 text-white font-semibold hover:text-brand-accent transition-colors">
                  Join Program <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: 'Free Trial', desc: 'Book a complimentary 1-on-1 session with a senior coach.' },
  { title: 'Assessment', desc: 'Our experts evaluate your current skill level and potential.' },
  { title: 'Placement', desc: 'Get placed in the perfect batch matched to your skill and age.' },
  { title: 'Growth', desc: 'Weekly classes with periodic assessments and performance tracking.' },
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey in <span className="text-brand-accent italic">4 Simple Steps</span></h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent via-brand-gold to-brand-accent opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 bg-brand-primary border-4 border-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-brand-accent transition-all">
                  <span className="text-2xl font-display font-bold text-white leading-none">{i + 1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
