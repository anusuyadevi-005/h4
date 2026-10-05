import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaDumbbell, FaFire, FaBolt, FaHeartbeat, FaWeight, FaBicycle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../components/Footer";

const machines = [
  {
    id: 1, name: "Multi-Station Gym Machines", brand: "Impulse", category: "Strength", icon: <FaDumbbell />, img: "/gym/gym1.jpg",
    desc: "Premium multi-station gym machines featuring shoulder press, lat pulldown, chest fly and more — all in a sleek, space-optimized layout with mirror panels.",
    specs: ["Multiple Stations", "Adjustable Weights", "Mirror Panels", "Anti-slip Flooring", "Commercial Grade"],
    badge: "Strength", badgeColor: "#f5c518", badgeBg: "rgba(245, 197, 24, 0.1)",
  },
  {
    id: 2, name: "Functional Trainer Station", brand: "Impulse", category: "Functional", icon: <FaBolt />, img: "/gym/gym2.jpg",
    desc: "Heavy-duty dual cable functional trainer with full adjustable pulley system. Ideal for crossovers, rows, and 360° functional fitness training.",
    specs: ["Dual Cable Stacks", "360° Adjustable", "Multiple Grips", "Steel Frame", "Anti-slip Base"],
    badge: "Functional", badgeColor: "#10b981", badgeBg: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: 3, name: "H4 Branded Dumbbells Set", brand: "H4 Fitness", category: "Free Weights", icon: <FaDumbbell />, img: "/gym/gym3.jpg",
    desc: "Exclusive H4 Fitness Studio branded dumbbells from 2.5 kg to 50 kg. Custom-designed with the H4 logo in yellow — built for durability and comfort.",
    specs: ["Range: 2.5–50 kg", "H4 Branded", "Anti-Roll Shape", "Knurled Handle", "Multi-tier Rack"],
    badge: "Free Weights", badgeColor: "#f97316", badgeBg: "rgba(249, 115, 22, 0.1)",
  },
  {
    id: 4, name: "Smith Machine / Squat Rack", brand: "Impulse", category: "Strength", icon: <FaWeight />, img: "/gym/gym4.jpg",
    desc: "Professional Smith machine with integrated squat rack, motivational wall mural backdrop. Perfect for squats, bench press and shoulder press with safety features.",
    specs: ["Guided Bar Path", "Safety Catchers", "Weight Pegs", "Adjustable Bench", "Olympic Bar Included"],
    badge: "Strength", badgeColor: "#f5c518", badgeBg: "rgba(245, 197, 24, 0.1)",
  },
  {
    id: 5, name: "Cable Crossover Machine", brand: "Impulse", category: "Functional", icon: <FaBolt />, img: "/gym/gym5.jpg",
    desc: "Premium cable crossover with dual adjustable pulleys across full height range. Target chest, shoulders, arms, and back with unmatched range of motion.",
    specs: ["Full-Height Adjust", "Dual Pulleys", "Heavy Weight Stack", "Multiple Attachments", "Steel Construction"],
    badge: "Functional", badgeColor: "#10b981", badgeBg: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: 6, name: "Professional Treadmill", brand: "Life Fitness", category: "Cardio", icon: <FaBicycle />, img: "/gym/gym6.jpg",
    desc: "Commercial-grade treadmill with speed up to 20 km/h, incline to 15%, built-in heart rate monitor, and 15+ workout programs. Perfect for warm-up, fat burn, and interval training.",
    specs: ["Speed: 0.5–20 km/h", "Incline: 0–15%", "Programs: 15+", "Heart Rate Monitor", "LCD Display"],
    badge: "Cardio", badgeColor: "#0ea5e9", badgeBg: "rgba(14, 165, 233, 0.1)",
  },
  {
    id: 7, name: "Olympic Bench Press", brand: "Technogym", category: "Strength", icon: <FaDumbbell />, img: "/gym/gym9.jpg",
    desc: "Heavy-duty Olympic bench press with safety catchers, adjustable height, and 200kg capacity. Ideal for chest development, tricep press, and upper body training.",
    specs: ["Max Load: 200 kg", "Adjustable Height", "Safety Catchers", "Olympic Bar: 20 kg", "Anti-slip Pad"],
    badge: "Strength", badgeColor: "#f5c518", badgeBg: "rgba(245, 197, 24, 0.1)",
  },
  {
    id: 8, name: "InBody 270 Body Analyzer", brand: "InBody", category: "Technology", icon: <FaFire />, img: "/gym/gym7.jpg",
    desc: "Medical-grade body composition analyzer providing detailed muscle mass, body fat %, visceral fat, and body water insights. Used by professionals worldwide.",
    specs: ["Medical Accuracy", "Muscle Mass Data", "Body Fat %", "Visceral Fat Level", "Water Analysis"],
    badge: "Technology", badgeColor: "#ec4899", badgeBg: "rgba(236, 72, 153, 0.1)",
  },
];

const categories = ["All", "Cardio", "Strength", "Functional", "Free Weights", "Technology"];

function MachineCard({ machine, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.05, type: "spring", bounce: 0.4 }}
      whileHover={{ 
        y: -10, 
        scale: 1.02, 
        borderColor: "rgba(245,197,24,0.4)",
        boxShadow: "0 20px 40px rgba(245,197,24,0.15)"
      }}
      className="group"
      style={{
        display: "flex", flexDirection: "column",
        background: "#111", border: "1px solid #222",
        borderRadius: 16, overflow: "hidden",
        transition: "border-color 0.3s"
      }}
    >
      {/* Image fixed height */}
      <div style={{ position: "relative", height: 200, overflow: "hidden", flexShrink: 0 }}>
        <motion.img
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.6 }}
          src={machine.img} alt={machine.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,17,1), transparent 70%)" }} />

        {/* Category badge */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          style={{
            position: "absolute", top: 12, left: 12,
            fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: "999px",
            textTransform: "uppercase", letterSpacing: "1px",
            color: machine.badgeColor, background: machine.badgeBg, border: `1px solid ${machine.badgeColor}40`
          }}
        >
          {machine.badge}
        </motion.div>

        {/* Icon */}
        <motion.div 
          animate={{ rotate: [0, -15, 15, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: 12, right: 12,
            width: 32, height: 32, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
            color: "#f5c518", fontSize: 14
          }}
        >
          {machine.icon}
        </motion.div>
      </div>

      {/* Content wrapper */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: 20 }}>
        <p style={{ color: "#f5c518", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 4px" }}>
          {machine.brand}
        </p>
        <h3 style={{ color: "#fff", fontWeight: 900, fontSize: 16, lineHeight: 1.2, margin: "0 0 8px" }}>
          {machine.name}
        </h3>
        
        <AnimatePresence mode="wait">
          <motion.p 
            key={expanded ? "full" : "short"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ color: "#999", fontSize: 12, lineHeight: 1.6, margin: 0, overflow: "hidden" }}
          >
            {expanded ? machine.desc : machine.desc.slice(0, 90) + "…"}
          </motion.p>
        </AnimatePresence>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
          <AnimatePresence>
            {(expanded ? machine.specs : machine.specs.slice(0, 3)).map((spec, i) => (
              <motion.div 
                key={spec}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ delay: i * 0.05 }}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <div style={{ width: 4, height: 4, background: "#f5c518", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ color: "#777", fontSize: 11 }}>{spec}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ backgroundColor: "#f5c518", color: "#000", scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: 16, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            border: "1px solid rgba(245,197,24,0.25)", background: "transparent", color: "#f5c518",
            fontWeight: 700, padding: "10px", borderRadius: 12, cursor: "pointer",
            fontSize: 11, textTransform: "uppercase", letterSpacing: "1px",
            transition: "background 0.3s, color 0.3s"
          }}
        >
          {expanded ? (
            <><FaChevronUp style={{ fontSize: 10 }} /> Show Less</>
          ) : (
            <><FaChevronDown style={{ fontSize: 10 }} /> View Details</>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}

function Machinery() {
  useEffect(() => { document.title = "Machinery – H4 Fitness Studio Medavakkam"; }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const headRef = useRef(null);
  const inView  = useInView(headRef, { once: true });

  const [titleText, setTitleText] = useState("");
  const fullTitle = "PREMIUM MACHINES";
  useEffect(() => {
    if (inView && titleText.length < fullTitle.length) {
      const timeout = setTimeout(() => {
        setTitleText(fullTitle.substring(0, titleText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [titleText, inView]);

  const filtered = activeCategory === "All" ? machines : machines.filter((m) => m.category === activeCategory);

  return (
    <main className="page-wrapper">
      {/* ── Page Hero ── */}
      <section style={{ position: "relative", padding: "80px 0", background: "#000", overflow: "hidden" }}>
        <div 
          style={{ 
            position: "absolute", inset: 0, 
            backgroundImage: "url('/gym/gym6.jpg')", 
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3 
          }} 
        />
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 grid-bg" style={{ opacity: 0.15 }} 
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(245,197,24,0.04), transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} ref={headRef}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 12, fontWeight: 600, marginBottom: 12 }}
          >
            Equipment & Machinery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="display-font"
            style={{ color: "#fff", fontSize: "clamp(42px, 6vw, 80px)", margin: 0, lineHeight: 1.1 }}
          >
            <span className="inline-flex items-center" style={{ minHeight: "1.1em" }}>
              {titleText.substring(0, 8)}
              <span className="gradient-text">{titleText.substring(8)}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ display: "inline-block", width: "6px", height: "0.9em", backgroundColor: "#f5c518", marginLeft: "4px" }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            style={{ color: "#999", marginTop: 12, fontSize: 16, maxWidth: 540, lineHeight: 1.7 }}
          >
            50+ state-of-the-art machines from world-renowned brands, maintained
            to the highest standards.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.35, type: "spring" }}
            style={{ width: 64, height: 2, background: "#f5c518", marginTop: 20 }}
          />
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section style={{ padding: "64px 0", background: "#0a0a0a" }}>
        <div className="container">

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}
          >
            {categories.map((cat) => (
              <div key={cat} style={{ position: "relative" }}>
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ position: "absolute", inset: 0, background: "#f5c518", borderRadius: "999px" }}
                  />
                )}
                <motion.button
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    position: "relative",
                    padding: "8px 16px", borderRadius: "999px",
                    fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px",
                    border: activeCategory === cat ? "1px solid transparent" : "1px solid #333",
                    background: "transparent",
                    color: activeCategory === cat ? "#000" : "#999",
                    cursor: "pointer", transition: "color 0.25s",
                    zIndex: 1
                  }}
                >
                  {cat}
                </motion.button>
              </div>
            ))}
          </motion.div>

          {/* Machine grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-start"
          >
            <AnimatePresence>
              {filtered.map((machine, i) => (
                <MachineCard key={machine.id} machine={machine} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Machinery;