import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Globe, BarChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
              <Trophy className="w-4 h-4" />
              <span>International Chess Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Build <span className="text-brand-accent italic">Strategic Thinkers</span> Through Chess
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              From first moves to tournament wins. Train with global FIDE-rated coaches in a structured, result-oriented academy. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-free-trial" className="btn-primary text-lg px-8 py-4 text-center">
                Book Free Trial
              </Link>
              <Link to="/programs" className="btn-secondary text-lg px-8 py-4 text-center">
                Explore Programs
              </Link>
            </div>

            {/* Social Proof Badges */}
            <div className="mt-12 flex flex-wrap gap-8 items-center pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <Users className="text-brand-accent w-6 h-6" />
                <div>
                  <div className="text-white font-bold leading-none">5000+</div>
                  <div className="text-gray-500 text-xs uppercase tracking-tighter">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-brand-accent w-6 h-6" />
                <div>
                  <div className="text-white font-bold leading-none">25+</div>
                  <div className="text-gray-500 text-xs uppercase tracking-tighter">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BarChart className="text-brand-accent w-6 h-6" />
                <div>
                  <div className="text-white font-bold leading-none">400+</div>
                  <div className="text-gray-500 text-xs uppercase tracking-tighter">Avg Rating Gain</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Visual Chess Artwork Placeholder */}
            <div className="relative z-10 glass-card p-1 aspect-square sm:aspect-[4/5] lg:aspect-square overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1000" 
                alt="Chess Master" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 flex items-center justify-between border-brand-gold/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                      <Trophy className="text-brand-gold w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-gold font-bold uppercase tracking-widest">Next Tournament</p>
                      <p className="text-white font-bold">ChessMed Grand Prix '26</p>
                    </div>
                  </div>
                  <Link to="/book-free-trial" className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white">
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-accent/20 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-brand-gold/20 rounded-xl rotate-12 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
  );
}
