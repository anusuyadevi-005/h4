import { useEffect } from "react";
import { motion } from "framer-motion";
import Membership from "../components/Membership";
import Footer from "../components/Footer";

function MembershipPage() {
  useEffect(() => {
    document.title = "Membership Plans – H4 Fitness Studio";
  }, []);

  return (
    <main className="page-wrapper bg-black min-h-screen flex flex-col">
      {/* ── Page Hero / Banner ── */}
      <section style={{ position: "relative", padding: "96px 0", background: "#000", overflow: "hidden" }}>
        <div 
          style={{ 
            position: "absolute", inset: 0, 
            backgroundImage: "url('/gym/gym6.jpg')", 
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 
          }} 
        />
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(245,197,24,0.05), transparent)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: 1, height: "100%", background: "linear-gradient(to bottom, transparent, rgba(245,197,24,0.3), transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 12, fontWeight: 600, marginBottom: 12 }}
          >
            Join The Club
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="display-font"
            style={{ color: "#fff", fontSize: "clamp(42px, 6vw, 80px)", margin: 0, lineHeight: 1.1 }}
          >
            OUR <span className="gradient-text">MEMBERSHIPS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            style={{ color: "#999", marginTop: 12, fontSize: 16, maxWidth: 540, lineHeight: 1.7 }}
          >
            Choose the perfect plan to unlock your potential. Transparent pricing, no hidden fees, premium facilities.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, type: "spring" }}
            style={{ width: 64, height: 2, background: "#f5c518", marginTop: 20 }}
          />
        </div>
      </section>

      <div className="flex-1 py-12 lg:py-16 mb-20 lg:mb-32">
        <Membership />
      </div>
      <Footer />
    </main>
  );
}

export default MembershipPage;
