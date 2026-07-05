import { useEffect } from "react";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "H4 Fitness Studio – Premium Gym in Medavakkam, Chennai";
  }, []);

  return (
    <main>
      <Hero />
      <WhyChoose />
      <Trainers />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;