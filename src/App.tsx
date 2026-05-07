/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FreeTrial from './pages/FreeTrial';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Placeholders for other pages
const About = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">About ChessMed Academy</div>;
const Programs = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">Global Chess Programs</div>;
const PersonalCoaching = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">1-on-1 Elite Coaching</div>;
const GroupClasses = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">Collaborative Group Batches</div>;
const SchoolPrograms = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">School Chess Partnerships</div>;
const TournamentTraining = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">Tournament Preparation</div>;
const Achievements = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">Student Success Hall of Fame</div>;
const Testimonials = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">What Our Community Says</div>;
const Blog = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">ChessMaster Insights & Guides</div>;
const FAQ = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">Frequently Asked Questions</div>;
const Careers = () => <div className="pt-40 pb-20 text-center text-4xl font-display font-bold">Join Our Global Team of Coaches</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="personal-coaching" element={<PersonalCoaching />} />
          <Route path="group-classes" element={<GroupClasses />} />
          <Route path="school-programs" element={<SchoolPrograms />} />
          <Route path="tournament-training" element={<TournamentTraining />} />
          <Route path="student-achievements" element={<Achievements />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-free-trial" element={<FreeTrial />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
