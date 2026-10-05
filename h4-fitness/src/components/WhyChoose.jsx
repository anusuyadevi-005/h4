import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDumbbell, FaBolt, FaFire, FaHeartbeat, FaUsers, FaChartLine } from "react-icons/fa";

const services = [
  { icon: <FaDumbbell />, title: "Strength Training", desc: "Build raw power and muscle with free weights and guided programs." },
  { icon: <FaBolt />,     title: "HIIT Workouts",     desc: "High-intensity sessions designed to torch fat and boost metabolism." },
  { icon: <FaFire />,     title: "Weight Loss",        desc: "Customized programs combining cardio, strength and nutrition guidance." },
  { icon: <FaHeartbeat />,title: "Cardio Zone",        desc: "State-of-the-art treadmills, ellipticals and cycling bikes." },
  { icon: <FaUsers />,    title: "Group Classes",      desc: "Zumba, aerobics, and functional fitness batch sessions." },
  { icon: <FaChartLine />,title: "InBody Analysis",    desc: "Medical-grade body composition analysis to track progress." },
];

const checklist = [
  "Certified personal trainers on floor daily",
  "Premium modern equipment — 50+ machines",
  "Flexible batch timings for all schedules",
  "InBody medical-grade body analysis",
  "Nutrition & diet counseling",
  "Open every day: 5AM to 11PM",
];

const quickStats = [
  { num: "1500+", label: "Members" },
  { num: "10+",   label: "Trainers" },
  { num: "50+",   label: "Machines" },
];

function WhyChoose() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "96px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      {/* Background animated elements */}
      <motion.div 
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 grid-bg" 
        style={{ opacity: 0.12, backgroundSize: "100px 100px" }} 
      />
      
      <motion.div
        animate={{ x: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 pointer-events-none"
        style={{ width: "33%", height: "100%", background: "linear-gradient(to left, rgba(245,197,24,0.08), transparent)" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div ref={ref} style={{ marginBottom: "56px" }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            style={{
              color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px",
              fontSize: 11, fontWeight: 600, marginBottom: 12,
            }}
          >
            Why H4 Fitness?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.3 }}
            className="display-font"
            style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, margin: 0 }}
          >
            BUILT FOR YOUR{" "}
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="gradient-text" 
              style={{ backgroundSize: "200% auto" }}
            >
              SUCCESS
            </motion.span>
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT — description + checklist + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              At H4 Fitness Studio, we provide everything you need to achieve your fitness goals —
              world-class equipment, expert trainers, and a community that pushes you to be your best.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, type: "spring" }}
                  whileHover={{ x: 10, color: "#fff" }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "default" }}
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    style={{
                      width: 20, height: 20, borderRadius: "50%", background: "#f5c518",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2,
                    }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#000" }} />
                  </motion.div>
                  <span style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, transition: "color 0.3s" }}>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {quickStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.15, type: "spring" }}
                  whileHover={{ y: -8, scale: 1.05, boxShadow: "0 10px 20px rgba(245,197,24,0.15)", borderColor: "#f5c518" }}
                  style={{
                    background: "#111", border: "1px solid #222", borderRadius: 12,
                    padding: "16px 8px", textAlign: "center", transition: "border-color 0.3s"
                  }}
                >
                  <p className="gradient-text" style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>{stat.num}</p>
                  <p style={{ color: "#555", fontSize: 10, marginTop: 4, textTransform: "uppercase", letterSpacing: "1.5px" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — 2×3 services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  backgroundColor: "#161616",
                  borderColor: "rgba(245,197,24,0.5)",
                  boxShadow: "0 15px 30px rgba(245,197,24,0.1)",
                }}
                className="group"
                style={{
                  background: "#111", border: "1px solid #222", borderRadius: 16,
                  padding: "20px", cursor: "default", transition: "background 0.3s, border-color 0.3s",
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: 44, height: 44, background: "rgba(245,197,24,0.1)",
                    borderRadius: 10, display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#f5c518", fontSize: 18,
                    marginBottom: 14, transition: "background 0.3s, color 0.3s",
                  }}
                >
                  {s.icon}
                </motion.div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;