import { motion } from 'motion/react';
import { Quote, Star, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Parent of 8yr old Student",
    text: "ChessMed has transformed my son's concentration. The coaches are incredibly patient and the structured curriculum is world-class.",
    rating: 5,
    country: "USA"
  },
  {
    name: "David Chen",
    role: "Intermediate Student",
    text: "I gained 300 ELO points in just 4 months. The tactical sessions and game analysis are the best I've ever experienced.",
    rating: 5,
    country: "Canada"
  },
  {
    name: "Anita Sharma",
    role: "Parent of Competitive Player",
    text: "Excellent tournament support. My daughter qualified for the state championship thanks to the prep sessions here.",
    rating: 5,
    country: "India"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 italic text-brand-accent">Voices of Success</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Join a global community of ambitious students and satisfied parents.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col h-full relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-accent/10 group-hover:text-brand-accent/20 transition-colors" />
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-gold flex items-center justify-center text-brand-primary font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role} • {item.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 border-brand-accent shadow-2xl shadow-brand-accent/20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Master the Game?</h2>
          <p className="text-xl text-gray-400 mb-12">
            The first step to becoming a master is making your first move. Book your free trial session today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/book-free-trial" className="btn-primary flex items-center gap-2 group px-10 py-5 text-xl">
              Book Your Free Trial <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://wa.me/yournumber" 
              className="btn-secondary flex items-center gap-3 px-10 py-5 text-xl"
            >
              <MessageSquare className="w-6 h-6 text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            No commitment required. Free 30-min skills assessment included.
          </p>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-brand-accent/20 blur-[100px] pointer-events-none" />
    </section>
  );
}
