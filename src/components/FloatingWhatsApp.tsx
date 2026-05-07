import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/yournumber"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 text-white hover:brightness-110 transition-all cursor-pointer"
    >
      <MessageSquare className="w-8 h-8 fill-current" />
      <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-primary text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 animate-bounce">
        Online
      </span>
    </motion.a>
  );
}
