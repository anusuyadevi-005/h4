import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaDumbbell,
  FaBolt,
  FaHeartbeat,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import Footer from "../components/Footer";

const features = [
  { icon: <FaDumbbell />, title: "Premium Equipment", desc: "50+ world-class machines and free weights" },
  { icon: <FaBolt />,     title: "Expert Trainers",   desc: "10+ certified professional trainers" },
  { icon: <FaHeartbeat />,title: "InBody Analysis",   desc: "Medical-grade body composition tracking" },
  { icon: <FaShieldAlt />,title: "Safe Environment",  desc: "Clean, hygienic and safe workout space" },
  { icon: <FaUsers />,    title: "Community",         desc: "Supportive and motivating member community" },
  { icon: <FaChartLine />,title: "Track Progress",    desc: "Scientifically monitor your transformation" },
];

function About() {
  useEffect(() => { document.title = "About Us – H4 Fitness Studio Medavakkam"; }, []);

  const headRef   = useRef(null);
  const inView    = useInView(headRef, { once: true });
  const mapRef    = useRef(null);
  const mapInView = useInView(mapRef, { once: true });
  
  // Parallax effects
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [titleText, setTitleText] = useState("");
  const fullTitle = "ABOUT H4 FITNESS";
  useEffect(() => {
    if (inView && titleText.length < fullTitle.length) {
      const timeout = setTimeout(() => {
        setTitleText(fullTitle.substring(0, titleText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [titleText, inView]);

  return (
    <main className="page-wrapper">
      {/* ── Page Hero ── */}
      <section style={{ position: "relative", padding: "96px 0", background: "#000", overflow: "hidden" }}>
        <div 
          style={{ 
            position: "absolute", inset: 0, 
            backgroundImage: "url('/gym/gym6.jpg')", 
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 
          }} 
        />
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 grid-bg" style={{ opacity: 0.15 }} 
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(245,197,24,0.05), transparent)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: 1, height: "100%", background: "linear-gradient(to bottom, transparent, rgba(245,197,24,0.3), transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} ref={headRef}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 12, fontWeight: 600, marginBottom: 12 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="display-font"
            style={{ color: "#fff", fontSize: "clamp(42px, 6vw, 80px)", margin: 0, lineHeight: 1.1 }}
          >
            <span className="inline-flex items-center" style={{ minHeight: "1.1em" }}>
              {titleText.substring(0, 6)}
              <span className="gradient-text">{titleText.substring(6)}</span>
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
            Medavakkam's premier fitness destination. Where passion meets
            performance, and every member's journey is personal.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.35, type: "spring" }}
            style={{ width: 64, height: 2, background: "#f5c518", marginTop: 20 }}
          />
        </div>
      </section>

      {/* ── About Content ── */}
      <section style={{ padding: "80px 0", background: "#0a0a0a", overflow: "hidden" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 56,
            alignItems: "center"
          }}>
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <h2 className="display-font" style={{ color: "#fff", fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, marginBottom: 20 }}>
                MORE THAN JUST A <span className="gradient-text">GYM</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#999", fontSize: 14, lineHeight: 1.7 }}>
                <p>
                  H4 Fitness Studio was founded with one mission — to make
                  professional fitness accessible to everyone in Medavakkam. We
                  believe that every person deserves access to world-class training
                  facilities and expert guidance.
                </p>
                <p>
                  Our studio is equipped with the latest fitness technology,
                  including the medical-grade <span style={{ color: "#f5c518", fontWeight: 600 }}>InBody body composition analyzer</span>,
                  which provides detailed insights into your muscle mass, body fat
                  percentage, visceral fat levels, and body water composition.
                </p>
                <p>
                  From beginners to advanced athletes, H4 Fitness Studio welcomes
                  everyone. Our certified trainers create personalized programs
                  tailored to your unique goals, ensuring every visit counts.
                </p>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: 16,
                marginTop: 32
              }}>
                {[
                  { num: "1500+", label: "Members" },
                  { num: "10+",   label: "Trainers" },
                  { num: "50+",   label: "Machines" },
                  { num: "5",     label: "Stars Rating" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", bounce: 0.5 }}
                    whileHover={{ y: -8, scale: 1.05, borderColor: "#f5c518", boxShadow: "0 10px 20px rgba(245,197,24,0.15)" }}
                    style={{
                      background: "#111", border: "1px solid #222",
                      borderRadius: 12, padding: 16, textAlign: "center",
                      transition: "border-color 0.3s"
                    }}
                  >
                    <p className="gradient-text" style={{ fontSize: 24, fontWeight: 900, margin: 0 }}>{stat.num}</p>
                    <p style={{ color: "#777", fontSize: 10, marginTop: 4, textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visuals */}
            <motion.div
              style={{ position: "relative", y: yImage }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "relative", borderRadius: 16, overflow: "hidden",
                  border: "1px solid rgba(245,197,24,0.2)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)"
                }}
              >
                <img
                  src="/gym/gym8.jpg"
                  alt="H4 Fitness Studio Interior"
                  style={{ width: "100%", height: 380, objectFit: "cover", objectPosition: "center" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                  <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div key={i} animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}>
                        <FaStar style={{ color: "#f5c518", fontSize: 12 }} />
                      </motion.div>
                    ))}
                  </div>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>Top Rated Gym</p>
                  <p style={{ color: "#999", fontSize: 12, margin: 0 }}>Medavakkam, Chennai</p>
                </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotateZ: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", bottom: -24, left: -24,
                  background: "#f5c518", color: "#000",
                  padding: 16, borderRadius: 12,
                  boxShadow: "0 10px 30px rgba(245,197,24,0.3)",
                  border: "1px solid #ffd700",
                }}
              >
                <p style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, margin: 0 }}>5AM</p>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginTop: 4, margin: 0 }}>Opens Daily</p>
                <p style={{ fontSize: 9, opacity: 0.7, margin: 0 }}>Till 11PM</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotateZ: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  position: "absolute", top: -20, right: -20,
                  background: "#000", border: "1px solid rgba(245,197,24,0.3)",
                  padding: 16, borderRadius: 12,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                <p className="gradient-text" style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, margin: 0 }}>4.9★</p>
                <p style={{ fontSize: 10, color: "#999", textTransform: "uppercase", letterSpacing: "1px", marginTop: 4, margin: 0 }}>Google Rating</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section style={{ padding: "80px 0", background: "#000", position: "relative" }}>
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.1 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-font"
              style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 64px)", margin: 0 }}
            >
              WHAT MAKES US <span className="gradient-text">DIFFERENT</span>
            </motion.h2>
            <div style={{ width: 64, height: 2, background: "#f5c518", margin: "16px auto 0" }} />
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02, 
                  borderColor: "rgba(245,197,24,0.4)", 
                  backgroundColor: "#161616",
                  boxShadow: "0 15px 30px rgba(245,197,24,0.08)"
                }}
                className="group"
                style={{
                  background: "#111", border: "1px solid #222",
                  borderRadius: 12, padding: 20,
                  display: "flex", flexDirection: "column",
                  transition: "background 0.3s, border-color 0.3s"
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="f-icon group-hover:bg-[#f5c518] group-hover:text-black"
                  style={{
                    width: 48, height: 48, background: "rgba(245,197,24,0.1)",
                    borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#f5c518", fontSize: 20, marginBottom: 16,
                    transition: "background 0.3s, color 0.3s"
                  }}
                >
                  {f.icon}
                </motion.div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{f.title}</h3>
                <p style={{ color: "#777", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location + Map ── */}
      <section style={{ padding: "80px 0", background: "#0a0a0a" }} ref={mapRef}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={mapInView ? { opacity: 1 } : {}}
              style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 11, fontWeight: 600, marginBottom: 12 }}
            >
              Find Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: 90 }}
              animate={mapInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.12, type: "spring", bounce: 0.4 }}
              className="display-font"
              style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 64px)", margin: 0, transformOrigin: "top" }}
            >
              OUR <span className="gradient-text">LOCATION</span>
            </motion.h2>
            <div style={{ width: 64, height: 2, background: "#f5c518", margin: "16px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "stretch" }}>
            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              {[
                {
                  icon: <FaMapMarkerAlt />, title: "Address",
                  content: "No. 10/419, 1st Floor, Dr. Ramayanagar, Mambakkam–Medavakkam Main Road, Near BSNL Telephone Exchange, Chennai – 600100",
                },
                {
                  icon: <FaClock />, title: "Timings",
                  content: "Monday – Sunday\n5:00 AM – 11:00 PM",
                },
                {
                  icon: <FaPhone />, title: "Phone",
                  content: "+91 98404 31433", href: "tel:+919840431433",
                },
                {
                  icon: <FaEnvelope />, title: "Email",
                  content: "h4fitnessstudio@gmail.com", href: "mailto:h4fitnessstudio@gmail.com",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={mapInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.02, x: 5, borderColor: "rgba(245,197,24,0.4)" }}
                  style={{
                    background: "#111", border: "1px solid #222",
                    borderRadius: 12, padding: 16, display: "flex", gap: 16, alignItems: "flex-start",
                    transition: "border-color 0.3s"
                  }}
                >
                  <motion.div 
                    animate={{ rotateY: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                    style={{
                      width: 40, height: 40, background: "rgba(245,197,24,0.1)",
                      borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#f5c518", flexShrink: 0, fontSize: 16
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p style={{ color: "#f5c518", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4, margin: 0 }}>
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ color: "#ccc", fontSize: 13, textDecoration: "none", transition: "color 0.2s", whiteSpace: "pre-line", display: "block", marginTop: 4 }}
                        onMouseEnter={e => e.currentTarget.style.color = "#f5c518"}
                        onMouseLeave={e => e.currentTarget.style.color = "#ccc"}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p style={{ color: "#aaa", fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-line", margin: "4px 0 0" }}>
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={mapInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              style={{
                borderRadius: 12, overflow: "hidden", border: "1px solid rgba(245,197,24,0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)", minHeight: 400
              }}
            >
              <iframe
                title="H4 Fitness Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8088264!2d80.20497531482!3d12.9116082909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de65b3a47eb%3A0xc93f7a5cb1090b85!2sH4%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            style={{ marginTop: 40, textAlign: "center" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
              <a
                href="https://maps.google.com/?q=H4+Fitness+Studio+Medavakkam"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="shimmer-btn"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "12px 28px", borderRadius: "999px",
                  fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px",
                  textDecoration: "none", transition: "transform 0.2s",
                  boxShadow: "0 10px 30px rgba(245,197,24,0.2)",
                }}
              >
                <FaMapMarkerAlt />
                Get Directions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;