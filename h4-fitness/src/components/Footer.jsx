import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container" style={{ paddingTop: "64px", paddingBottom: "32px" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
          marginBottom: "48px",
        }}>

          {/* Brand col */}
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", textDecoration: "none" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, overflow: "hidden", background: "#fff", flexShrink: 0 }}>
                <img
                  src="/logo.png"
                  alt="H4 Fitness"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 900, color: "#fff", lineHeight: 1, margin: 0 }}>
                  H4 <span style={{ color: "#f5c518" }}>FITNESS</span>
                </p>
                <p style={{ fontSize: 9, color: "#888", letterSpacing: "2px", textTransform: "uppercase", marginTop: 2, margin: 0 }}>
                  Studio · Medavakkam
                </p>
              </div>
            </Link>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6, marginBottom: "24px" }}>
              Your premier fitness destination in Medavakkam. Transforming lives
              through expert coaching and world-class facilities.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: <FaInstagram />, href: "#", label: "Instagram" },
                { icon: <FaFacebook />, href: "#", label: "Facebook" },
                { icon: <FaYoutube />, href: "#", label: "YouTube" },
                { icon: <FaWhatsapp />, href: "https://wa.me/919840431433", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "#111", border: "1px solid #222",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#888", fontSize: 14, textDecoration: "none",
                    transition: "background 0.3s, border-color 0.3s, color 0.3s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#f5c518"; e.currentTarget.style.borderColor = "#f5c518"; e.currentTarget.style.color = "#000"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.color = "#888"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontSize: 12, marginBottom: "20px" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/machinery", label: "Machinery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      color: "#888", textDecoration: "none", fontSize: 14,
                      display: "flex", alignItems: "center", gap: "8px",
                      transition: "color 0.25s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#f5c518"; e.currentTarget.firstChild.style.opacity = 1; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#888"; e.currentTarget.firstChild.style.opacity = 0; }}
                  >
                    <FaArrowRight style={{ fontSize: 9, opacity: 0, color: "#f5c518", transition: "opacity 0.2s" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontSize: 12, marginBottom: "20px" }}>
              Programs
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Strength Training",
                "HIIT Workouts",
                "Weight Loss",
                "Cardio Zone",
                "Group Classes",
                "InBody Analysis",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: 4, height: 4, background: "#f5c518", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ color: "#888", fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontSize: 12, marginBottom: "20px" }}>
              Our Branches
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Branch 1 – Medavakkam */}
              <li>
                <span style={{ display: "inline-block", background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.3)", color: "#f5c518", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", borderRadius: 4, padding: "2px 8px", marginBottom: 8 }}>
                  Branch 1 · Medavakkam
                </span>
                <div style={{ display: "flex", gap: "10px" }}>
                  <FaMapMarkerAlt style={{ color: "#f5c518", fontSize: 13, marginTop: 3, flexShrink: 0 }} />
                  <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                    No. 10/419, 1st Floor,<br />
                    Dr. Ramayanagar,<br />
                    Mambakkam–Medavakkam Main Rd,<br />
                    Chennai – 600100
                  </p>
                </div>
              </li>

              {/* Branch 2 – Semmancheri */}
              <li>
                <span style={{ display: "inline-block", background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.3)", color: "#f5c518", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", borderRadius: 4, padding: "2px 8px", marginBottom: 8 }}>
                  Branch 2 · Semmancheri
                </span>
                <div style={{ display: "flex", gap: "10px" }}>
                  <FaMapMarkerAlt style={{ color: "#f5c518", fontSize: 13, marginTop: 3, flexShrink: 0 }} />
                  <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                    721, Kailasah Plaza, Plot No. 710,<br />
                    Nookampalayam Link Road,<br />
                    Semmancheri, Chennai – 600119
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FaPhone style={{ color: "#f5c518", fontSize: 14, flexShrink: 0 }} />
                <a href="tel:+919840431433" style={{ color: "#888", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#f5c518"} onMouseLeave={e => e.currentTarget.style.color = "#888"}>
                  +91 98404 31433
                </a>
              </li>

              {/* Email */}
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FaEnvelope style={{ color: "#f5c518", fontSize: 14, flexShrink: 0 }} />
                <a href="mailto:info@h4fitness.in" style={{ color: "#888", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#f5c518"} onMouseLeave={e => e.currentTarget.style.color = "#888"}>
                  info@h4fitness.in
                </a>
              </li>

              {/* Hours */}
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FaClock style={{ color: "#f5c518", fontSize: 14, flexShrink: 0 }} />
                <p style={{ color: "#888", fontSize: 14, margin: 0 }}>Mon–Sun: 5AM – 11PM</p>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "28px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}>
          <p style={{ color: "#666", fontSize: 12, margin: 0, textAlign: "center", width: "100%", maxWidth: "fit-content" }}>
            © {new Date().getFullYear()} H4 Fitness Studio. All rights reserved.
          </p>
          <p style={{ color: "#555", fontSize: 12, margin: 0, textAlign: "center", width: "100%", maxWidth: "fit-content" }}>
            Medavakkam &amp; Semmancheri, Chennai – Tamil Nadu
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;