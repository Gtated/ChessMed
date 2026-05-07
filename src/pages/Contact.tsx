import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, Globe, ArrowRight, Instagram, Facebook, Linkedin, Youtube, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 italic text-brand-gold">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Have questions about our curriculum or coach pairings? Our team is available 24/7 across global time zones.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {[
                { icon: MessageSquare, title: "Quick Chat", text: "Reach us on WhatsApp for instant replies.", detail: "+1 (234) 567-890", link: "https://wa.me/yournumber", color: "text-[#25D366]" },
                { icon: Mail, title: "Email Support", text: "Best for school partnerships & inquiries.", detail: "support@chessmed.com", link: "mailto:support@chessmed.com", color: "text-brand-accent" },
                { icon: Globe, title: "Working Hours", text: "Global support team active 24/7.", detail: "Monday - Sunday", color: "text-brand-gold" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 glass-card border-white/5 hover:border-brand-accent/20 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm mb-2">{item.text}</p>
                    <p className="text-brand-accent font-bold tracking-wide">{item.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-8 glass-card bg-brand-accent/5 border-brand-accent/20">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <MapPin className="text-brand-accent w-5 h-5" /> Global Headquarters
              </h4>
              <p className="text-gray-400 leading-relaxed mb-8">
                123 Mastery Plaza, Chess District,<br/>
                Suite 404, Delaware, DE 19801<br/>
                United States
              </p>
              <div className="flex gap-6">
                {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center h-full flex flex-col justify-center items-center gap-6 border-brand-accent"
              >
                <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold">Message Sent!</h2>
                <p className="text-gray-400">Thank you for reaching out. A ChessMed strategist will respond within 2-4 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send another</button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 md:p-12 space-y-8"
              >
                <h3 className="text-2xl font-bold mb-4 underline underline-offset-8 decoration-brand-accent decoration-2">Send an Inquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Full Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Alex Rivera" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors" placeholder="alex@email.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Subject</label>
                  <select className="w-full bg-brand-secondary border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Program Recommendation</option>
                    <option>School Partnerships</option>
                    <option>Technical Support</option>
                    <option>Careers / Coaching</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">How can we help?</label>
                  <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="Tell us about your chess goals..."></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-5 text-xl flex items-center justify-center gap-3">
                  Send Message <Send className="w-6 h-6" />
                </button>

                <p className="text-center text-xs text-gray-500 font-medium">
                  We typically respond to inquiries within 4 working hours.
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
