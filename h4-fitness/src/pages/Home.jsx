import { useEffect } from "react";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "H4 Fitness Studio – Premier Gym in Medavakkam & Semmancheri, Chennai";
  }, []);

  return (
    <main>
      <Hero />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;