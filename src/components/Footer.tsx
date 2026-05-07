import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">CM</span>
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                Chess<span className="text-brand-accent">Med</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Empowering the next generation of strategic thinkers through world-class chess coaching and structured training.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Programs', href: '/programs' },
                { name: 'Group Classes', href: '/group-classes' },
                { name: 'Achievements', href: '/student-achievements' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Privacy Policy', href: '/privacy' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-brand-accent mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Email us</p>
                  <a href="mailto:contact@chessmed.com" className="text-white hover:text-brand-accent transition-colors">
                    contact@chessmed.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Call / WhatsApp</p>
                  <a href="tel:+1234567890" className="text-white hover:text-brand-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Headquarters</p>
                  <p className="text-white">Mastery Plaza, Delaware, US</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-semibold text-lg mb-6">Join our Newsletter</h4>
            <p className="text-gray-400 text-sm">Get free chess lessons, strategy guides, and academy updates.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-5 py-3 glass-card focus:outline-none focus:border-brand-accent transition-colors text-white"
              />
              <button className="w-full btn-primary text-sm py-4">Subscribe Now</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} ChessMed Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
