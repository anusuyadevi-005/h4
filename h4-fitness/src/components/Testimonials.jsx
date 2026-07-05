import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1, name: "Ramesh Kumar",      role: "Lost 18kg in 4 months",       rating: 5, avatar: "RK",
    text: "H4 Fitness completely transformed my life. The trainers here are incredibly knowledgeable and the equipment is top-notch. I lost 18kg and feel like a completely different person. Best investment I've ever made!",
  },
  {
    id: 2, name: "Divya Shankar",     role: "Gained strength & confidence", rating: 5, avatar: "DS",
    text: "As a working woman, I was skeptical about gym. But H4's trainers made me feel so welcome. The HIIT sessions are amazing, and I've seen incredible results in just 3 months. Highly recommend to everyone!",
  },
  {
    id: 3, name: "Arun Balaji",       role: "Muscle Building Journey",      rating: 5, avatar: "AB",
    text: "The bodybuilding program here is exceptional. Karthik sir's guidance on nutrition and training has helped me gain 8kg of pure muscle. The atmosphere is motivating and the machines are always well-maintained.",
  },
  {
    id: 4, name: "Meena Prabhakaran", role: "Post-pregnancy fitness",       rating: 5, avatar: "MP",
    text: "After pregnancy, I was struggling to get back in shape. The trainers at H4 created a perfect customized plan for me. In 6 months, I'm back to my pre-pregnancy weight and feeling stronger than ever!",
  },
  {
    id: 5, name: "Suresh Venkat",     role: "Senior Member – 2 years",     rating: 5, avatar: "SV",
    text: "Been a member for 2 years now and I'm still amazed by the quality of service. The InBody analyzer helps me track my progress scientifically. The gym is always clean and the trainers genuinely care about your goals.",
  },
  {
    id: 6, name: "Anitha Raj",        role: "Weight Loss Success",          rating: 5, avatar: "AR",
    text: "Lost 12kg in 3 months with H4! The personalized diet plan + workout combo is fantastic. Hariharasudhan sir's motivational approach keeps you going even on difficult days. 100% recommended!",
  },
];

function TestimonialCard({ t, featured }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        background:   featured ? "linear-gradient(160deg,#1a1600,#0f0f0f)" : "linear-gradient(160deg,#131313,#0a0a0a)",
        border:       featured ? "1px solid rgba(245,197,24,0.55)" : "1px solid #1e1e1e",
        borderRadius: 20,
        padding:      "28px",
        position:     "relative",
        boxShadow:    featured ? "0 20px 60px rgba(245,197,24,0.1)" : "none",
        transition:   "border-color 0.3s, box-shadow 0.3s",
        height:       "100%",
        display:      "flex",
        flexDirection:"column",
      }}
      onMouseEnter={e => {
        if (!featured) {
          e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)";
          e.currentTarget.style.boxShadow = "0 10px 40px rgba(245,197,24,0.05)";
        }
      }}
      onMouseLeave={e => {
        if (!featured) {
          e.currentTarget.style.borderColor = "#1e1e1e";
          e.currentTarget.style.boxShadow = "none";
        }
      }}
    >
      {featured && (
        <div style={{
          position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
          background: "#f5c518", color: "#000",
          fontSize: 10, fontWeight: 900,
          padding: "4px 14px", borderRadius: "999px",
          textTransform: "uppercase", letterSpacing: "1.5px",
          whiteSpace: "nowrap",
        }}>
          Featured
        </div>
      )}

      <FaQuoteLeft style={{ color: "rgba(245,197,24,0.25)", fontSize: 44, marginBottom: 16 }} />

      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {[...Array(t.rating)].map((_, i) => (
          <FaStar key={i} style={{ color: "#f5c518", fontSize: 13 }} />
        ))}
      </div>

      <p style={{ color: "#bbb", fontSize: 13, lineHeight: 1.75, flex: 1, margin: 0 }}>{t.text}</p>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24 }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "#f5c518",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 900, fontSize: 13, color: "#000", flexShrink: 0,
        }}>
          {t.avatar}
        </div>
        <div>
          <p style={{ fontWeight: 700, color: "#fff", fontSize: 14, margin: 0 }}>{t.name}</p>
          <p style={{ color: "#f5c518", fontSize: 11, fontWeight: 600, marginTop: 2 }}>{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const [tuple, setTuple] = useState([0, 1]);
  const current = tuple[0];
  const direction = tuple[1];
  
  const headRef = useRef(null);
  const inView  = useInView(headRef, { once: true });

  const prev = () => setTuple([ (current - 1 + testimonials.length) % testimonials.length, -1 ]);
  const next = () => setTuple([ (current + 1) % testimonials.length, 1 ]);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section style={{ padding: "96px 0", background: "#0c0c0c", position: "relative", overflow: "hidden" }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1, height: 80, background: "linear-gradient(to bottom, #f5c518, transparent)" }} />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-160px", right: "-160px", width: 400, height: 400, background: "rgba(245,197,24,0.04)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", bottom: "-160px", left: "-160px", width: 400, height: 400, background: "rgba(245,197,24,0.04)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} 
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 11, fontWeight: 600, marginBottom: 12 }}
          >
            Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="display-font"
            style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 72px)", margin: 0 }}
          >
            WHAT OUR <span className="gradient-text">MEMBERS SAY</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{ width: 80, height: 3, background: "#f5c518", margin: "20px auto 0", borderRadius: 2 }}
          />
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 36,
          alignItems: "stretch",
        }}>
          <AnimatePresence mode="wait">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-${current}`}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0,  scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.9 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                style={{ height: "100%" }}
              >
                <TestimonialCard t={t} featured={i === 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <button
            onClick={prev}
            id="testimonial-prev"
            style={{
              width: 48, height: 48, borderRadius: "50%",
              border: "1px solid rgba(245,197,24,0.3)",
              background: "transparent", cursor: "pointer",
              color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.3s, border-color 0.3s, color 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f5c518"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = "#f5c518"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div style={{ display: "flex", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTuple([i, i > current ? 1 : -1])}
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: "999px",
                  background: i === current ? "#f5c518" : "#333",
                  border: "none", cursor: "pointer",
                  transition: "width 0.3s, background 0.3s",
                  padding: 0,
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            id="testimonial-next"
            style={{
              width: 48, height: 48, borderRadius: "50%",
              border: "1px solid rgba(245,197,24,0.3)",
              background: "transparent", cursor: "pointer",
              color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.3s, border-color 0.3s, color 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f5c518"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = "#f5c518"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;