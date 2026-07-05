import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDumbbell, FaStar, FaInstagram, FaWhatsapp } from "react-icons/fa";

const trainers = [
  {
    id:   1,
    name: "R. Hariharasudhan",
    role: "Head Trainer & Founder",
    speciality: "Strength & Conditioning",
    exp:  "10+ Yrs",
    img:  "/trainer1.png",
    rating: 5,
    certifications: ["ISSA Certified", "Nutrition Coach"],
    desc: "Certified fitness expert specializing in strength training, muscle building, and weight loss transformations.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   2,
    name: "Priya Lakshmi",
    role: "Fitness Trainer",
    speciality: "HIIT & Functional Fitness",
    exp:  "6+ Yrs",
    img:  "/trainer2.png",
    rating: 5,
    certifications: ["ACE Certified", "Zumba Instructor"],
    desc: "Expert in HIIT, cardio programs, and functional movement. Passionate about women's fitness.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   3,
    name: "Karthik Rajan",
    role: "Senior Trainer",
    speciality: "Bodybuilding & Nutrition",
    exp:  "8+ Yrs",
    img:  "/trainer3.png",
    rating: 5,
    certifications: ["NSCA-CPT", "Sports Nutrition"],
    desc: "Competitive bodybuilder and certified trainer helping members achieve their physique goals.",
    whatsapp: "tel:+919840431433",
  },
];

function TrainerCard({ trainer, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Alternate entry direction based on index
  const getInitialOffset = () => {
    if (index === 0) return { x: -60, y: 0 };
    if (index === 2) return { x: 60, y: 0 };
    return { x: 0, y: 60 };
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialOffset(), scale: 0.95 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        boxShadow: "0 30px 60px rgba(245,197,24,0.15)",
        borderColor: "rgba(245,197,24,0.5)"
      }}
      style={{
        display:       "flex",
        flexDirection: "column",
        background:    "#111",
        border:        "1px solid #222",
        borderRadius:  18,
        overflow:      "hidden",
        transition:    "border-color 0.3s",
      }}
      className="group"
    >
      {/* Image */}
      <div style={{ position: "relative", height: 260, overflow: "hidden", flexShrink: 0 }}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={trainer.img}
          alt={trainer.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #111 0%, transparent 60%)" }} />

        {/* Experience badge */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{
            position: "absolute", top: 12, right: 12,
            background: "#f5c518", color: "#000",
            fontSize: 10, fontWeight: 900,
            padding: "4px 10px", borderRadius: "999px",
            textTransform: "uppercase", letterSpacing: "1px",
          }}
        >
          {trainer.exp}
        </motion.div>

        {/* Social icons */}
        <div style={{
          position: "absolute", bottom: 12, right: 12,
          display: "flex", gap: 8,
        }}>
          <motion.a
            whileHover={{ scale: 1.15, backgroundColor: "#f5c518", color: "#000" }}
            href={trainer.whatsapp}
            style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 14, textDecoration: "none",
            }}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, backgroundColor: "#e1306c", color: "#fff" }}
            href="#"
            style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 14, textDecoration: "none",
            }}
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Stars */}
        <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
          {[...Array(trainer.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.4 + (i * 0.1), type: "spring" }}
            >
              <FaStar style={{ color: "#f5c518", fontSize: 11 }} />
            </motion.div>
          ))}
        </div>

        <h3 style={{ fontSize: 17, fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.2 }}>
          {trainer.name}
        </h3>
        <p style={{ color: "#f5c518", fontWeight: 600, fontSize: 12, marginTop: 4, marginBottom: 8 }}>
          {trainer.role}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <FaDumbbell style={{ color: "#f5c518", fontSize: 10, flexShrink: 0 }} />
          </motion.div>
          <span style={{ color: "#555", fontSize: 12 }}>{trainer.speciality}</span>
        </div>

        <p style={{ color: "#777", fontSize: 12, lineHeight: 1.65, flex: 1, margin: 0 }}>
          {trainer.desc}
        </p>

        {/* Certifications */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
          {trainer.certifications.map(cert => (
            <span
              key={cert}
              style={{
                background: "rgba(245,197,24,0.08)",
                border: "1px solid rgba(245,197,24,0.25)",
                color: "#f5c518",
                fontSize: 10, fontWeight: 600,
                padding: "4px 10px", borderRadius: "999px",
              }}
            >
              {cert}
            </span>
          ))}
        </div>

        {/* Book CTA */}
        <motion.a
          whileHover={{ scale: 1.03, backgroundColor: "#f5c518", color: "#000", borderColor: "#f5c518" }}
          whileTap={{ scale: 0.98 }}
          href={trainer.whatsapp}
          style={{
            marginTop: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(245,197,24,0.3)",
            color: "#f5c518",
            fontWeight: 700, fontSize: 11,
            padding: "10px", borderRadius: 12,
            textDecoration: "none",
            textTransform: "uppercase", letterSpacing: "1.5px",
            transition: "background 0.3s, color 0.3s, border-color 0.3s",
          }}
        >
          Book a Session
        </motion.a>
      </div>
    </motion.div>
  );
}

function Trainers() {
  const headRef = useRef(null);
  const inView  = useInView(headRef, { once: true });

  return (
    <section id="trainers" style={{ padding: "96px 0", background: "#080808", position: "relative", overflow: "hidden" }}>
      <motion.div 
        animate={{ backgroundPosition: ["0% 100%", "100% 0%"] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 grid-bg" 
        style={{ opacity: 0.12, backgroundSize: "120px 120px" }} 
      />

      {/* Decorative side lights */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ position: "absolute", left: "-10%", top: "20%", width: 300, height: 300, background: "#f5c518", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }}
      />
      <motion.div 
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.4, 1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        style={{ position: "absolute", right: "-10%", bottom: "10%", width: 300, height: 300, background: "#f5c518", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 11, fontWeight: 600, marginBottom: 12 }}
          >
            Our Experts
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            className="display-font"
            style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 64px)", margin: 0 }}
          >
            MEET OUR{" "}
            <motion.span 
              animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="gradient-text"
              style={{ backgroundSize: "200% auto" }}
            >
              TRAINERS
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ color: "#777", fontSize: 14, marginTop: 12, maxWidth: 400, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}
          >
            Certified professionals dedicated to your transformation journey.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            style={{ width: 64, height: 2, background: "#f5c518", margin: "20px auto 0" }}
          />
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {trainers.map((trainer, i) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Trainers;