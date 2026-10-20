import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaDumbbell, FaStar, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const trainers = [
  {
    id:   1,
    name: "",
    role: "Head Trainer & Founder",
    speciality: "Strength & Conditioning",
    exp:  "10+ Yrs",
    branch: "medavakkam",
    branchLabel: "Medavakkam Branch",
    img:  "/trainers/founder.jpg",
    rating: 5,
    certifications: ["ISSA Certified", "Nutrition Coach"],
    desc: "Certified fitness expert specializing in strength training, muscle building, and weight loss transformations.",
    whatsapp: "tel:+919840431433",
    isFounder: true,
  },
  {
    id:   2,
    name: "Anand Raj",
    role: "Manager – Leading the Gym Team",
    speciality: "Strength & Body Transformation",
    exp:  "CPT",
    branch: "semmancheri",
    branchLabel: "Semmancheri Branch",
    img:  "/trainers/anand-raj.jpg",
    objectPosition: "28% 32%",
    rating: 5,
    certifications: ["CPT Certified"],
    desc: "Managing the Team and Personal Trainer specializing in strength training, muscle building, and body transformation. Dedicated to personalized workout guidance, helping members build strength and achieve their fitness goals.",
    whatsapp: "tel:+919840431433",
    isManager: true,
  },
  {
    id:   3,
    name: "Saravanan",
    role: "Senior Personal Trainer",
    speciality: "Muscle Building & Fat Loss",
    exp:  "5 Yrs",
    branch: "semmancheri",
    branchLabel: "Semmancheri Branch",
    img:  "/trainers/trainer1.jpg",
    rating: 5,
    certifications: ["CPT Level 2 Certified"],
    desc: "Specialized in Muscle Building, Fat Loss, and Posture Correction, with expertise in Natural and Enhanced Bodybuilding.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   4,
    name: "Alen",
    role: "Senior Personal Trainer",
    speciality: "Functional & HIIT Training",
    exp:  "5+ Yrs",
    branch: "semmancheri",
    branchLabel: "Semmancheri Branch",
    img:  "/trainers/trainer2.jpg",
    rating: 5,
    certifications: ["CPT Certified"],
    desc: "CPT certified Senior Personal Trainer specializing in functional training, high-intensity workouts, and total fitness conditioning.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   5,
    name: "Simma",
    role: "Fitness Trainer",
    speciality: "Muscle Building & Weight Loss",
    exp:  "CPT",
    branch: "semmancheri",
    branchLabel: "Semmancheri Branch",
    img:  "/trainers/simma.jpg",
    objectPosition: "center 20%",
    rating: 5,
    certifications: ["CPT Certified"],
    desc: "Specialized in Muscle Building and Weight Loss. Dedicated to personalized workout coaching and physique transformation.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   6,
    name: "Raghu",
    role: "Fitness Trainer",
    speciality: "Muscle Building, Weight Loss & Gain",
    exp:  "4+ Yrs",
    branch: "semmancheri",
    branchLabel: "Semmancheri Branch",
    img:  "/trainers/raghu.jpg",
    objectPosition: "center 20%",
    rating: 5,
    certifications: ["Certified Personal Trainer", "Scientific Muscle Building Workshop"],
    desc: "Specialist in Muscle Building, Weight Loss & Weight Gain. Strength & Conditioning, Body Recomposition & Wellness.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   7,
    name: "",
    role: "Fitness Trainer",
    speciality: "General Fitness",
    exp:  "3+ Yrs",
    branch: "medavakkam",
    branchLabel: "Medavakkam Branch",
    img:  "/trainers/trainer5.jpg",
    rating: 5,
    certifications: ["Certified Personal Trainer"],
    desc: "Passionate about helping individuals achieve their general fitness and wellness goals.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   8,
    name: "Sadhanan",
    role: "Women Trainer",
    speciality: "Women's Fitness",
    exp:  "5+ Yrs",
    branch: "semmancheri",
    branchLabel: "Semmancheri Branch",
    img:  "/trainers/sadhanan.jpg",
    objectPosition: "center 28%",
    rating: 5,
    certifications: ["CPT Level 1 Certified"],
    desc: "CPT Level 1 Certified trainer specializing in women's health, fitness, and strength training.",
    whatsapp: "tel:+919840431433",
  },
  {
    id:   9,
    name: "",
    role: "Fitness Trainer",
    speciality: "Strength Training",
    exp:  "4+ Yrs",
    branch: "medavakkam",
    branchLabel: "Medavakkam Branch",
    img:  "/trainers/trainer7.jpg",
    rating: 5,
    certifications: ["ISSA Certified"],
    desc: "Focuses on building strength and muscle mass through tailored workout plans.",
    whatsapp: "tel:+919840431433",
  },
];

function TrainerCard({ trainer, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Alternate entry direction based on index
  const getInitialOffset = () => {
    if (index % 3 === 0) return { x: -50, y: 0 };
    if (index % 3 === 2) return { x: 50, y: 0 };
    return { x: 0, y: 50 };
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialOffset(), scale: 0.95 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.15, type: "spring", bounce: 0.4 }}
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
          alt={trainer.name || trainer.role}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background = "linear-gradient(135deg, #1a1a1a, #222)";
            e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px"><div style="width:80px;height:80px;border-radius:50%;background:#333;display:flex;align-items:center;justify-content:center;font-size:36px">👤</div><span style="color:#555;font-size:11px;letter-spacing:1px;text-transform:uppercase">Photo Coming Soon</span></div>`;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: trainer.objectPosition || "top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #111 0%, transparent 60%)" }} />


        {/* Founder / Manager badge */}
        {(trainer.isFounder || trainer.isManager) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, type: "spring" }}
            style={{
              position: "absolute", top: 12, left: 12,
              background: "linear-gradient(135deg, #f5c518, #e0a800)",
              color: "#000",
              fontSize: 9, fontWeight: 900,
              padding: "4px 10px", borderRadius: "999px",
              textTransform: "uppercase", letterSpacing: "1.5px",
              display: "flex", alignItems: "center", gap: 4,
              boxShadow: "0 2px 12px rgba(245,197,24,0.5)",
              zIndex: 2,
            }}
          >
            {trainer.isFounder ? "👑 Founder" : "⭐ Manager"}
          </motion.div>
        )}

        {/* Experience badge */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{
            position: "absolute", top: 12, right: 12,
            background: "#f5c518", color: "#000",
            fontSize: 10, fontWeight: 900,
            padding: "4px 10px", borderRadius: "999px",
            textTransform: "uppercase", letterSpacing: "1px",
            zIndex: 2,
          }}
        >
          {trainer.exp}
        </motion.div>

        {/* Social icons */}
        <div style={{
          position: "absolute", bottom: 12, right: 12,
          display: "flex", gap: 8,
          zIndex: 2,
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
        {/* Stars & Branch */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", gap: 3 }}>
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

          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            background: trainer.branch === "both" ? "rgba(245,197,24,0.12)" : "rgba(255,255,255,0.06)",
            color: trainer.branch === "both" ? "#f5c518" : "#aaa",
            fontSize: 9.5,
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: 999,
            border: trainer.branch === "both" ? "1px solid rgba(245,197,24,0.3)" : "1px solid rgba(255,255,255,0.1)"
          }}>
            <FaMapMarkerAlt style={{ fontSize: 9 }} />
            {trainer.branchLabel}
          </span>
        </div>

        {trainer.name ? (
          <h3 style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.2 }}>
            {trainer.name}
          </h3>
        ) : null}
        <p style={{ color: "#f5c518", fontWeight: 600, fontSize: 12, marginTop: trainer.name ? 4 : 0, marginBottom: 8 }}>
          {trainer.role}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <FaDumbbell style={{ color: "#f5c518", fontSize: 10, flexShrink: 0 }} />
          </motion.div>
          <span style={{ color: "#888", fontSize: 12 }}>{trainer.speciality}</span>
        </div>

        <p style={{ color: "#999", fontSize: 12.5, lineHeight: 1.65, flex: 1, margin: 0 }}>
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
  const [selectedBranch, setSelectedBranch] = useState("all");

  const filteredTrainers = trainers.filter(trainer => {
    if (selectedBranch === "all") return true;
    return trainer.branch === selectedBranch || trainer.branch === "both";
  });

  const medavakkamCount = trainers.filter(t => t.branch === "medavakkam" || t.branch === "both").length;
  const semmancheriCount = trainers.filter(t => t.branch === "semmancheri" || t.branch === "both").length;

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
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "40px" }}>
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
            style={{ color: "#777", fontSize: 14, marginTop: 12, maxWidth: 440, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}
          >
            Certified professionals dedicated to your transformation journey across both Medavakkam & Semmancheri.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            style={{ width: 64, height: 2, background: "#f5c518", margin: "20px auto 40px" }}
          />
          
          {/* Group Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            style={{
              width: "100%",
              maxWidth: "900px",
              margin: "0 auto 48px",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #333",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
            }}
          >
            <img 
              src="/trainers/team.jpg" 
              alt="H4 Fitness Team" 
              style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "500px", objectPosition: "center 20%" }} 
            />
          </motion.div>

          {/* Branch Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 16
            }}
          >
            {[
              { id: "all", label: "All Trainers", count: trainers.length },
              { id: "medavakkam", label: "Medavakkam Branch", count: medavakkamCount },
              { id: "semmancheri", label: "Semmancheri Branch", count: semmancheriCount },
            ].map(tab => {
              const isActive = selectedBranch === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedBranch(tab.id)}
                  style={{
                    background: isActive ? "#f5c518" : "#141414",
                    color: isActive ? "#000" : "#bbb",
                    border: isActive ? "1px solid #f5c518" : "1px solid #282828",
                    borderRadius: 999,
                    padding: "10px 22px",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.25s",
                    boxShadow: isActive ? "0 4px 20px rgba(245,197,24,0.3)" : "none"
                  }}
                >
                  {tab.id !== "all" && <FaMapMarkerAlt style={{ fontSize: 11 }} />}
                  <span>{tab.label}</span>
                  <span style={{
                    background: isActive ? "#000" : "#242424",
                    color: isActive ? "#f5c518" : "#888",
                    fontSize: 10.5,
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: 999
                  }}>
                    {tab.count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTrainers.map((trainer, i) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Trainers;