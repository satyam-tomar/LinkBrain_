import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Showcase from './sections/Showcase';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

// App.jsx
export default function App() {
  return (
    /* REMOVED overflow-x-hidden from here */
    <div className="font-sans bg-white text-gray-900"> 
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  );
}