import { motion } from 'motion/react';
import { ShieldCheck, Zap, Watch, BookOpen, Star } from 'lucide-react';

const stats = [
  { label: 'FIDE Rated Trainers', value: '50+', icon: ShieldCheck },
  { label: 'Classes Conducted', value: '100K+', icon: Zap },
  { label: 'Global Students', value: '5000+', icon: Star },
  { label: 'Satisfaction Rate', value: '98%', icon: ShieldCheck },
];

export function TrustBar() {
  return (
    <div className="bg-brand-secondary/50 border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-brand-accent text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const reasons = [
  {
    title: 'Structured Curriculum',
    desc: 'Level-based learning roadmap from beginner to GM level.',
    icon: BookOpen,
  },
  {
    title: 'Personalized Growth',
    desc: 'Custom improvement plans based on your natural playing style.',
    icon: Star,
  },
  {
    title: 'International Exposure',
    desc: 'Compete with students from 25+ countries regularly.',
    icon: ShieldCheck,
  },
  {
    title: 'Tournament Support',
    desc: 'Strategic preparation and game analysis for competitions.',
    icon: Zap,
  },
  {
    title: 'Interactive Learning',
    desc: 'Gamified classes using digital boards and puzzle solvers.',
    icon: Watch,
  },
  {
    title: 'Mindset Training',
    desc: 'Focus on discipline, patience, and psychological resilience.',
    icon: ShieldCheck,
  },
];

export function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Hundreds of Parents <br/><span className="text-brand-accent">Trust ChessMed</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We don't just teach moves; we cultivate masters. Our methodology combines professional coaching with modern ed-tech tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group hover:border-brand-accent/30 transition-all"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                <reason.icon className="text-brand-accent w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
