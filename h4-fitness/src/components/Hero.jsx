import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const HERO_IMAGES = [
  "/gym/gym1.jpg",  // H4 Fitness – machine floor (wide)
  "/gym/gym6.jpg",  // H4 Fitness – treadmills + motivation mural
  "/gym/gym3.jpg",  // H4 Fitness – branded dumbbell rack
  "/gym/gym2.jpg",  // H4 Fitness – cable area (low dramatic angle)
  "/gym/gym9.jpg",  // H4 Fitness – barbell plates + wellness wall
];

const words = ["STRONGER", "FASTER", "LEANER", "BETTER"];

const STATS = [
  { num: "2",     label: "Flagship Branches" },
  { num: "1500+", label: "Happy Members" },
  { num: "4.9★",  label: "310+ Google Reviews" },
  { num: "5AM–11PM", label: "Open Daily (Both Branches)" },
];

function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  
  // Typewriter states
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBgIndex(p => (p + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 50); // Fast delete speed
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause on complete word
        }
      }, 120); // Natural typing speed
    }
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      style={{ minHeight: "100vh" }}
      className="relative flex flex-col bg-black overflow-hidden"
    >
      {/* ── Background Slider ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGES[bgIndex]}')` }}
        />
      </AnimatePresence>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />
      <div className="absolute inset-0 grid-bg opacity-20 z-[1]" />

      {/* ── Floating particles ── */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-400/20 z-[1]"
          style={{
            left:   `${5 + i * 8}%`,
            top:    `${20 + (i % 5) * 15}%`,
            width:  3 + (i % 3),
            height: 3 + (i % 3),
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}

      {/* ── Left accent line ── */}
      <div className="absolute left-0 top-1/4 w-1 h-48 bg-gradient-to-b from-transparent via-yellow-400 to-transparent z-[1]" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container" style={{ paddingTop: "96px", paddingBottom: "80px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-[2px]">
              2 Flagship Branches in Chennai · Medavakkam & Semmancheri
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-black text-white leading-tight tracking-tight display-font"
            style={{ fontSize: "clamp(46px, 8vw, 84px)" }}
          >
            TRAIN TO BE
            <br />
            {/* Typewriter text wrapper */}
            <span className="inline-flex items-center" style={{ minHeight: "1.12em" }}>
              <span className="gradient-text yellow-glow-text">{text}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ display: "inline-block", width: "8px", height: "1em", backgroundColor: "#f5c518", marginLeft: "4px" }}
              />
            </span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-300 text-base md:text-lg mt-5 leading-relaxed"
            style={{ maxWidth: "520px" }}
          >
            Train with certified coaches, premium equipment and a motivating community across our{" "}
            <span className="text-yellow-400 font-semibold">Medavakkam & Semmancheri</span> studios.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link
              to="/contact"
              id="hero-join-btn"
              className="shimmer-btn flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-200 shadow-xl shadow-yellow-400/25"
            >
              Start Your Journey
              <FaArrowRight className="text-xs" />
            </Link>
            <Link
              to="/trainers"
              id="hero-trainers-btn"
              className="flex items-center gap-2.5 border-2 border-white/25 hover:border-yellow-400 text-white hover:text-yellow-400 transition-all duration-300 px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm"
            >
              <FaPlay className="text-xs" />
              Meet Trainers
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 mt-8"
          >
            <div className="flex" style={{ gap: "-8px" }}>
              {[1, 2, 3].map(n => (
                <img
                  key={n}
                  src={`/trainer${n}.png`}
                  alt="member"
                  className="w-9 h-9 rounded-full border-2 border-yellow-400 object-cover object-top"
                  style={{ marginLeft: n > 1 ? "-8px" : 0 }}
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} style={{ fontSize: "10px" }} />
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-0.5">
                <span className="text-white font-bold">1500+</span> happy members
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Slider dots ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setBgIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              bgIndex === i
                ? "w-2 h-8 bg-yellow-400 shadow-lg shadow-yellow-400/50"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-10 bg-black/85 backdrop-blur-md border-t border-yellow-400/20 flex-shrink-0"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center py-5"
                style={{
                  borderRight:  i < 3 ? "1px solid rgba(245,197,24,0.15)" : undefined,
                  borderTop:    i >= 2 ? "1px solid rgba(245,197,24,0.15)" : undefined,
                }}
              >
                <p className="text-2xl md:text-3xl font-black gradient-text display-font">
                  {stat.num}
                </p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;