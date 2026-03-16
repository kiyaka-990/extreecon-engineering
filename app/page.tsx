import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyUs from '@/components/WhyUs';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import MapSection from '@/components/MapSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Portfolio />
      <WhyUs />
      <Team />
      <Testimonials />
      <MapSection />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
