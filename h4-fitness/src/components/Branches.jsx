import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaStar, 
  FaWhatsapp, 
  FaDirections, 
  FaCheckCircle, 
  FaDumbbell 
} from "react-icons/fa";
import { branches } from "../data/branchesData";

function Branches() {
  const [activeBranchId, setActiveBranchId] = useState("medavakkam");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const activeBranch = branches.find(b => b.id === activeBranchId) || branches[0];

  return (
    <section 
      id="branches" 
      ref={sectionRef}
      style={{ 
        padding: "100px 0", 
        background: "#080808", 
        position: "relative", 
        overflow: "hidden" 
      }}
    >
      {/* Background ambient glows */}
      <motion.div 
        animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "10%", left: "-10%",
          width: 500, height: 500,
          background: "#f5c518", filter: "blur(160px)",
          borderRadius: "50%", pointerEvents: "none"
        }}
      />
      <motion.div 
        animate={{ opacity: [0.06, 0.14, 0.06], scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "5%", right: "-10%",
          width: 500, height: 500,
          background: "#f5c518", filter: "blur(180px)",
          borderRadius: "50%", pointerEvents: "none"
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(245,197,24,0.1)",
              border: "1px solid rgba(245,197,24,0.3)",
              marginBottom: 16
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5c518" }} />
            <span style={{ color: "#f5c518", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              2 Flagship Locations in Chennai
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="display-font"
            style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 68px)", margin: 0, lineHeight: 1.15 }}
          >
            OUR <span className="gradient-text">BRANCHES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ color: "#888", fontSize: 15, marginTop: 14, maxWidth: 580, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}
          >
            One united standard of excellence. Train at our premium fitness studios located in both{" "}
            <span style={{ color: "#f5c518", fontWeight: 600 }}>Medavakkam</span> and{" "}
            <span style={{ color: "#f5c518", fontWeight: 600 }}>Semmancheri</span>.
          </motion.p>
          <div style={{ width: 64, height: 2, background: "#f5c518", margin: "20px auto 0" }} />
        </div>

        {/* Branch Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28, marginBottom: 48 }}>
          {branches.map((branch, idx) => {
            const isSelected = branch.id === activeBranchId;
            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.7 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveBranchId(branch.id)}
                style={{
                  background: isSelected 
                    ? "linear-gradient(170deg, #161616 0%, #101010 100%)" 
                    : "#111",
                  border: isSelected 
                    ? "2px solid #f5c518" 
                    : "1px solid #222",
                  borderRadius: 20,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: isSelected 
                    ? "0 20px 50px rgba(245,197,24,0.12)" 
                    : "0 10px 30px rgba(0,0,0,0.5)",
                  transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s"
                }}
              >
                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <span style={{
                      display: "inline-block",
                      background: isSelected ? "#f5c518" : "#222",
                      color: isSelected ? "#000" : "#bbb",
                      fontSize: 10,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      padding: "4px 10px",
                      borderRadius: 6,
                      marginBottom: 8
                    }}>
                      Branch {idx + 1}
                    </span>
                    <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: 0 }}>
                      {branch.name}
                    </h3>
                    <p style={{ color: "#888", fontSize: 13, marginTop: 4, marginBottom: 0 }}>
                      {branch.tagline}
                    </p>
                  </div>

                  {/* Rating Badge */}
                  <div style={{
                    background: "rgba(245,197,24,0.1)",
                    border: "1px solid rgba(245,197,24,0.3)",
                    borderRadius: 12,
                    padding: "8px 12px",
                    textAlign: "right"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end" }}>
                      <FaStar style={{ color: "#f5c518", fontSize: 13 }} />
                      <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{branch.rating.toFixed(1)}</span>
                    </div>
                    <span style={{ color: "#aaa", fontSize: 11 }}>({branch.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Review snippet */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  borderLeft: "3px solid #f5c518",
                  padding: "10px 14px",
                  borderRadius: "0 8px 8px 0",
                  marginBottom: 20
                }}>
                  <p style={{ color: "#bbb", fontSize: 12.5, fontStyle: "italic", margin: 0, lineHeight: 1.5 }}>
                    "{branch.googleReviewQuote}"
                  </p>
                </div>

                {/* Address info */}
                <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <FaMapMarkerAlt style={{ color: "#f5c518", fontSize: 16, marginTop: 3, flexShrink: 0 }} />
                  <p style={{ color: "#ccc", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: "#fff" }}>{branch.address.line1}</strong><br />
                    {branch.address.line2}<br />
                    {branch.address.landmark}, {branch.address.city} – {branch.address.pincode}
                  </p>
                </div>

                {/* Timings & Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaClock style={{ color: "#f5c518", fontSize: 13, flexShrink: 0 }} />
                    <span style={{ color: "#aaa", fontSize: 13 }}>{branch.timings}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaPhoneAlt style={{ color: "#f5c518", fontSize: 12, flexShrink: 0 }} />
                    <a 
                      href={`tel:${branch.phone}`} 
                      style={{ color: "#ccc", fontSize: 13, textDecoration: "none", fontWeight: 600 }}
                      onClick={e => e.stopPropagation()}
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                {/* Amenities pills */}
                <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: 20 }}>
                  <p style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: 8 }}>
                    Key Amenities & Highlights:
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {branch.amenities.map(amenity => (
                      <span
                        key={amenity}
                        style={{
                          background: isSelected ? "rgba(245,197,24,0.09)" : "#181818",
                          border: isSelected ? "1px solid rgba(245,197,24,0.3)" : "1px solid #2a2a2a",
                          color: isSelected ? "#f5c518" : "#999",
                          fontSize: 11,
                          padding: "4px 10px",
                          borderRadius: 999,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4
                        }}
                      >
                        <FaCheckCircle style={{ fontSize: 9 }} />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <a
                    href={branch.mapQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      background: "#f5c518",
                      color: "#000",
                      fontWeight: 700,
                      fontSize: 12,
                      padding: "11px",
                      borderRadius: 10,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      transition: "transform 0.2s, background 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <FaDirections style={{ fontSize: 14 }} />
                    Directions
                  </a>
                  <a
                    href={`https://wa.me/91${branch.phoneClean}?text=${encodeURIComponent(branch.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      background: "#1e1e1e",
                      border: "1px solid #333",
                      color: "#25D366",
                      fontWeight: 700,
                      fontSize: 12,
                      padding: "11px",
                      borderRadius: 10,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.color = "#000"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#1e1e1e"; e.currentTarget.style.color = "#25D366"; }}
                  >
                    <FaWhatsapp style={{ fontSize: 14 }} />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Interactive Map for the Active Branch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
          }}
        >
          {/* Map bar */}
          <div style={{
            padding: "16px 24px",
            background: "#161616",
            borderBottom: "1px solid #222",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaMapMarkerAlt style={{ color: "#f5c518", fontSize: 18 }} />
              <div>
                <p style={{ color: "#fff", fontWeight: 800, fontSize: 15, margin: 0 }}>
                  Viewing Map: {activeBranch.name}
                </p>
                <p style={{ color: "#888", fontSize: 12, margin: 0 }}>
                  {activeBranch.address.full}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {branches.map(b => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranchId(b.id)}
                  style={{
                    background: b.id === activeBranchId ? "#f5c518" : "#222",
                    color: b.id === activeBranchId ? "#000" : "#bbb",
                    border: "none",
                    borderRadius: 999,
                    padding: "7px 16px",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {b.shortName}
                </button>
              ))}
              <a
                href={activeBranch.mapQuery}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "#f5c518",
                  border: "1px solid #f5c518",
                  borderRadius: 999,
                  padding: "7px 16px",
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6
                }}
              >
                <FaDirections /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Iframe */}
          <div style={{ height: 380, width: "100%", position: "relative" }}>
            <iframe
              key={activeBranch.id}
              title={`${activeBranch.name} Map`}
              src={activeBranch.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Common Standards Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          style={{
            marginTop: 48,
            background: "rgba(245,197,24,0.04)",
            border: "1px dashed rgba(245,197,24,0.3)",
            borderRadius: 16,
            padding: "24px 32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: "rgba(245,197,24,0.15)",
              color: "#f5c518", fontSize: 22,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <FaDumbbell />
            </div>
            <div>
              <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 800, margin: 0 }}>
                Common to Both H4 Fitness Studios
              </h4>
              <p style={{ color: "#999", fontSize: 13, margin: "4px 0 0" }}>
                Both branches offer 5:00 AM – 11:00 PM access, certified personal trainers, sanitized workout floors, and personalized fitness goal tracking.
              </p>
            </div>
          </div>

          <a
            href="tel:+919840431433"
            style={{
              background: "#f5c518",
              color: "#000",
              fontWeight: 800,
              fontSize: 12,
              padding: "12px 24px",
              borderRadius: 999,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              flexShrink: 0
            }}
          >
            Call Us (+91 98404 31433)
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Branches;
