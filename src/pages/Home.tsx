import Hero from '../components/home/Hero';
import { TrustBar, WhyUs } from '../components/home/WhyUs';
import { ProgramsPreview, HowItWorks } from '../components/home/Programs';
import { Testimonials, FinalCTA } from '../components/home/SocialCTA';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustBar />
      <WhyUs />
      <ProgramsPreview />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </motion.div>
  );
}
