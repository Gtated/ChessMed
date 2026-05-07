import { motion } from 'motion/react';
import { ShieldCheck, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

export default function BookFreeTrial() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-12 max-w-2xl mx-auto border-brand-accent shadow-2xl shadow-brand-accent/20"
        >
          <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="text-brand-accent w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-4">You're on the list!</h1>
          <p className="text-xl text-gray-400 mb-8">Our education consultant will contact you via WhatsApp within the next 4 working hours to schedule your session.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-secondary">Return Home</a>
            <a href="https://wa.me/yournumber" className="btn-gold flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight italic text-brand-accent">
              Start Your Child's <br/>Chess Journey Today.
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Experience the ChessMed difference with a 30-minute 1-on-1 trial session. No credit card required, just a passion for mastery.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { icon: ShieldCheck, title: "Skill Assessment", text: "Get an professional evaluation of your current skill level." },
                { icon: Globe, title: "Global Training", text: "Learn from FIDE certified coaches from across the globe." },
                { icon: Clock, title: "Flexible Timings", text: "We adjust to your time zone and schedule." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 border-brand-gold/30">
              <p className="text-gray-400 text-sm mb-4 leading-relaxed italic">
                "Finding a structured academy was tough until we found ChessMed. The level assessment was spot-on and my son is now competing in state matches."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">M</div>
                <div>
                  <p className="text-white font-bold text-sm">Melissa Wright</p>
                  <p className="text-gray-500 text-xs">Parent, United Kingdom</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-12 border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8 text-center underline decoration-brand-accent underline-offset-8">Trial Registration</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Parent Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-brand-accent text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Student Age</label>
                  <input required type="number" min="4" max="20" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-brand-accent text-white" placeholder="8" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">WhatsApp Number (with country code)</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-brand-accent text-white" placeholder="+1 234 567 890" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Current Skill Level</label>
                <select className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-brand-accent text-white appearance-none cursor-pointer">
                  <option className="bg-brand-secondary">Absolute Beginner</option>
                  <option className="bg-brand-secondary">Knows Piece Moves</option>
                  <option className="bg-brand-secondary">Played Casual Games</option>
                  <option className="bg-brand-secondary">Intermediate (Rated)</option>
                  <option className="bg-brand-secondary">Advanced Competitive</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Country</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-brand-accent text-white" placeholder="USA" />
              </div>

              <button type="submit" className="w-full btn-primary py-5 text-xl flex items-center justify-center gap-3">
                Book Free Trial Session <ArrowRight className="w-6 h-6" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-accent" /> Secure Data</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-brand-accent" /> Confirm in 4h</span>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
