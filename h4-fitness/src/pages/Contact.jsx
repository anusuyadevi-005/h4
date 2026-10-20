import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

function ContactInfoCard({ icon, title, text, href, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring" }}
      whileHover={{ y: -8, scale: 1.02, borderColor: "rgba(245,197,24,0.4)", boxShadow: "0 10px 30px rgba(245,197,24,0.15)" }}
      style={{
        display: "flex", gap: 20, alignItems: "flex-start",
        background: "#111", border: "1px solid #222", borderRadius: 16,
        padding: 24, transition: "border-color 0.3s"
      }}
    >
      <motion.div 
        animate={{ rotateY: [0, 180, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(245,197,24,0.1)", color: "#f5c518",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, flexShrink: 0
        }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 style={{ color: "#fff", fontSize: 16, margin: "0 0 8px" }}>{title}</h4>
        {href ? (
          <a
            href={href}
            style={{ color: "#aaa", fontSize: 14, textDecoration: "none", transition: "color 0.2s", display: "inline-block" }}
            onMouseEnter={e => e.currentTarget.style.color = "#f5c518"}
            onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
          >
            {text}
          </a>
        ) : (
          <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{text}</p>
        )}
      </div>
    </motion.div>
  );
}

function Contact() {
  useEffect(() => { document.title = "Contact Us – H4 Fitness Studio | Medavakkam & Semmancheri"; }, []);

  const headRef = useRef(null);
  const inView  = useInView(headRef, { once: true });

  const [titleText, setTitleText] = useState("");
  const fullTitle = "CONTACT US";
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
      <section style={{ position: "relative", padding: "80px 0", background: "#000", overflow: "hidden" }}>
        <div 
          style={{ 
            position: "absolute", inset: 0, 
            backgroundImage: "url('/gym/contact_gym.png')", 
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.45 
          }} 
        />
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 grid-bg" style={{ opacity: 0.15 }} 
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(245,197,24,0.05), transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} ref={headRef}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ color: "#f5c518", textTransform: "uppercase", letterSpacing: "3px", fontSize: 12, fontWeight: 600, marginBottom: 12 }}
          >
            Get In Touch
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
            We'd love to hear from you. Whether you have a question about memberships,
            personal training, or our facilities, our team is ready to answer all your questions.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.35, type: "spring" }}
            style={{ width: 64, height: 2, background: "#f5c518", marginTop: 20 }}
          />
        </div>
      </section>


      {/* ── Content ── */}
      <section style={{ padding: "80px 0", background: "#0a0a0a", position: "relative" }}>
        
        {/* Animated background blobs */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "10%", right: "-10%", width: 500, height: 500, background: "#f5c518", filter: "blur(150px)", borderRadius: "50%", pointerEvents: "none" }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 64
          }}>

            {/* Left Col: Info */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="display-font" style={{ color: "#fff", fontSize: 36, marginBottom: 32 }}
              >
                Let's Talk <span className="gradient-text">Fitness</span>
              </motion.h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <ContactInfoCard
                  delay={0.1}
                  icon={<FaMapMarkerAlt />}
                  title="Branch 1: Medavakkam Studio (4.8★)"
                  text="No. 10/419, 1st Floor, Dr. Ramayanagar, Mambakkam–Medavakkam Main Rd, Chennai – 600100"
                  href="https://maps.google.com/?q=H4+Fitness+Studio+Medavakkam"
                />
                <ContactInfoCard
                  delay={0.2}
                  icon={<FaMapMarkerAlt />}
                  title="Branch 2: Semmancheri Studio (5.0★)"
                  text="721, Kailasah Plaza, Plot No. 710, Nookampalayam Link Road, Semmancheri, Chennai – 600119"
                  href="https://maps.google.com/?q=H4+Fitness+Studio+Semmancheri+Chennai"
                />
                <ContactInfoCard
                  delay={0.3}
                  icon={<FaPhoneAlt />}
                  title="Phone & WhatsApp (Both Branches)"
                  text="+91 98404 31433"
                  href="tel:+919840431433"
                />
                <ContactInfoCard
                  delay={0.4}
                  icon={<FaEnvelope />}
                  title="Official Email"
                  text="h4fitnessstudio@gmail.com"
                  href="mailto:h4fitnessstudio@gmail.com"
                />
              </div>

              {/* Social links */}
              <div style={{ marginTop: 40 }}>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16 }}
                >
                  Follow our journey:
                </motion.p>
                <div style={{ display: "flex", gap: 16 }}>
                  {[
                    { icon: <FaInstagram />, href: "#", color: "#e1306c" },
                    { icon: <FaFacebookF />, href: "#", color: "#1877f2" },
                    { icon: <FaWhatsapp />, href: "tel:+919840431433", color: "#25D366" }
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring", bounce: 0.5 }}
                      href={s.href}
                      whileHover={{ scale: 1.15, y: -5, backgroundColor: s.color, borderColor: s.color, color: "#fff" }}
                      style={{
                        width: 44, height: 44, borderRadius: "50%",
                        border: "1px solid #333", color: "#aaa",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, textDecoration: "none", transition: "all 0.3s"
                      }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: "#111", border: "1px solid #222",
                borderRadius: 24, padding: "40px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
              }}
            >
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Send a Message</h3>
              <p style={{ color: "#777", fontSize: 14, marginBottom: 32 }}>We'll get back to you as soon as possible.</p>

              <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {["Name", "Phone Number", "Email Address"].map((label, i) => (
                  <motion.div 
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <label style={{ display: "block", color: "#999", fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" }}>
                      {label}
                    </label>
                    <input
                      type={label === "Email Address" ? "email" : "text"}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      style={{
                        width: "100%", background: "#080808", border: "1px solid #333",
                        padding: "14px 16px", borderRadius: 8, color: "#fff", fontSize: 14,
                        outline: "none", transition: "border-color 0.3s, box-shadow 0.3s"
                      }}
                      onFocus={e => { e.target.style.borderColor = "#f5c518"; e.target.style.boxShadow = "0 0 0 2px rgba(245,197,24,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "#333"; e.target.style.boxShadow = "none"; }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                >
                  <label style={{ display: "block", color: "#999", fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" }}>
                    Select Preferred Branch
                  </label>
                  <select
                    style={{
                      width: "100%", background: "#080808", border: "1px solid #333",
                      padding: "14px 16px", borderRadius: 8, color: "#fff", fontSize: 14,
                      outline: "none", cursor: "pointer"
                    }}
                  >
                    <option value="medavakkam">Branch 1 · Medavakkam (Mambakkam–Medavakkam Main Rd)</option>
                    <option value="semmancheri">Branch 2 · Semmancheri (Nookampalayam Link Rd)</option>
                    <option value="both">Both / Need guidance on nearest location</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 }}
                >
                  <label style={{ display: "block", color: "#999", fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" }}>
                    Your Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    style={{
                      width: "100%", background: "#080808", border: "1px solid #333",
                      padding: "14px 16px", borderRadius: 8, color: "#fff", fontSize: 14,
                      outline: "none", resize: "vertical", transition: "border-color 0.3s, box-shadow 0.3s"
                    }}
                    onFocus={e => { e.target.style.borderColor = "#f5c518"; e.target.style.boxShadow = "0 0 0 2px rgba(245,197,24,0.1)"; }}
                    onBlur={e => { e.target.style.borderColor = "#333"; e.target.style.boxShadow = "none"; }}
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="shimmer-btn"
                  style={{
                    width: "100%", padding: "16px", borderRadius: 8,
                    fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px",
                    border: "none", cursor: "pointer", marginTop: 8
                  }}
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>

          </div>

          {/* Dual-Branch Interactive Map Toggle */}
          <div style={{ marginTop: 80, borderTop: "1px solid #222", paddingTop: 60 }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <span style={{ color: "#f5c518", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
                Find Your Studio
              </span>
              <h3 className="display-font" style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 44px)", margin: "8px 0 0" }}>
                LOCATE OUR <span className="gradient-text">BRANCHES</span>
              </h3>
            </div>

            <div style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: 20,
              overflow: "hidden"
            }}>
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
                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href="https://maps.google.com/?q=H4+Fitness+Studio+Medavakkam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-btn"
                    style={{
                      padding: "8px 18px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700,
                      textDecoration: "none"
                    }}
                  >
                    📍 Medavakkam Map
                  </a>
                  <a
                    href="https://maps.google.com/?q=H4+Fitness+Studio+Semmancheri+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 18px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700,
                      textDecoration: "none",
                      background: "#222",
                      color: "#f5c518",
                      border: "1px solid rgba(245,197,24,0.3)"
                    }}
                  >
                    📍 Semmancheri Map
                  </a>
                </div>
                <p style={{ color: "#888", fontSize: 13, margin: 0 }}>
                  Open Daily 5:00 AM – 11:00 PM at both locations
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", minHeight: 380 }}>
                <iframe
                  title="Medavakkam Branch Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8088264!2d80.20497531482!3d12.9116082909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de65b3a47eb%3A0xc93f7a5cb1090b85!2sH4%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="380"
                  style={{ border: 0, borderRight: "1px solid #222", filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                />
                <iframe
                  title="Semmancheri Branch Map"
                  src="https://maps.google.com/maps?q=H4+Fitness+Studio+Semmancheri+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Contact;