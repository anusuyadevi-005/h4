import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone } from "react-icons/fa";

function CTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section style={{ padding: "96px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      {/* Animated glow blobs */}
      <motion.div
        animate={{ 
          scale: [1, 1.25, 1], 
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-160px", left: "-160px",
          width: 420, height: 420,
          background: "rgba(245,197,24,0.08)", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "-160px", right: "-160px",
          width: 420, height: 420,
          background: "rgba(245,197,24,0.08)", borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 760, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          style={{ 
            display: "inline-block", 
            padding: "6px 16px", borderRadius: "999px", 
            background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.3)",
            marginBottom: 24 
          }}
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 10, fontWeight: 800, margin: 0 }}
          >
            Limited Time Offer
          </motion.p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40, rotateX: -45 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
          className="display-font"
          style={{ color: "#fff", fontSize: "clamp(48px, 8vw, 88px)", margin: 0, lineHeight: 1, perspective: 1000 }}
        >
          START YOUR{" "}
          <motion.span 
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="gradient-text"
            style={{ backgroundSize: "200% auto" }}
          >
            FREE TRIAL
          </motion.span>
          <br />
          TODAY!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ color: "#888", fontSize: 16, marginTop: 24, lineHeight: 1.7, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}
        >
          Join 1500+ members who have transformed their lives at H4 Fitness Studio.
          Your first session is on us!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.45, type: "spring", bounce: 0.5 }}
          style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "center",
            gap: 20, marginTop: 40,
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              id="cta-join-btn"
              className="shimmer-btn"
              style={{
                display: "inline-flex", alignItems: "center",
                gap: 12, padding: "16px 40px",
                borderRadius: "999px", fontSize: 14,
                fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "2px", textDecoration: "none",
                boxShadow: "0 16px 48px rgba(245,197,24,0.3)",
              }}
            >
              Get Started Now
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FaArrowRight />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="tel:+919840431433"
              id="cta-call-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                border: "2px solid rgba(255,255,255,0.2)",
                color: "#fff",
                padding: "14px 36px", borderRadius: "999px",
                fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "2px", fontSize: 14,
                textDecoration: "none",
                transition: "border-color 0.3s, color 0.3s, background 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f5c518"; e.currentTarget.style.color = "#000"; e.currentTarget.style.background = "#f5c518"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "transparent"; }}
            >
              <FaPhone />
              Call Us Now
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ marginTop: 32 }}
        >
          <p style={{ color: "#444", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
            📍 No. 10/419, 1st Floor, Dr. Ramayanagar, Mambakkam–Medavakkam Main Road
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
