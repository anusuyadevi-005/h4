import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "3px solid #f5c518" }}>
      <div className="container" style={{ paddingTop: 56, paddingBottom: 28 }}>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" style={{ marginBottom: 48 }}>

          {/* ── Brand ── */}
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, textDecoration: "none" }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, overflow: "hidden", background: "#000", flexShrink: 0 }}>
                <img src="/logo.png" alt="H4 Fitness" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 900, color: "#111", lineHeight: 1, margin: 0 }}>
                  H4 <span style={{ color: "#d4a200" }}>FITNESS</span>
                </p>
                <p style={{ fontSize: 9, color: "#999", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
                  Studio · Medavakkam
                </p>
              </div>
            </Link>

            <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, marginBottom: 22 }}>
              Your premier fitness destination in Medavakkam. Transforming lives
              through expert coaching and world-class facilities.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { icon: <FaInstagram />, href: "https://www.instagram.com/h4fitnessstudiomedavakkam/", label: "Instagram" },
                { icon: <FaFacebook />, href: "https://www.facebook.com/h4fitnessstudio/", label: "Facebook" },
                { icon: <FaEnvelope />, href: "mailto:h4fitnessstudio@gmail.com", label: "Email" },
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
                    background: "#f5f5f5", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#555", fontSize: 14, textDecoration: "none",
                    transition: "background 0.25s, color 0.25s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#f5f5f5"; e.currentTarget.style.color = "#555"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 style={{ color: "#111", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: 11, marginBottom: 20 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
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
                      color: "#666", textDecoration: "none", fontSize: 14,
                      display: "flex", alignItems: "center", gap: 6,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#111"; e.currentTarget.querySelector(".arrow").style.opacity = 1; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#666"; e.currentTarget.querySelector(".arrow").style.opacity = 0; }}
                  >
                    <FaArrowRight className="arrow" style={{ fontSize: 8, opacity: 0, color: "#d4a200", transition: "opacity 0.2s", flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Programs ── */}
          <div>
            <h4 style={{ color: "#111", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: 11, marginBottom: 20 }}>
              Programs
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Strength Training",
                "HIIT Workouts",
                "Weight Loss",
                "Cardio Zone",
                "Group Classes",
                "InBody Analysis",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 5, height: 5, background: "#f5c518", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ color: "#666", fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 style={{ color: "#111", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: 11, marginBottom: 20 }}>
              Our Branches
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>

              <li>
                <span style={{ display: "inline-block", background: "#fff8e1", color: "#b8860b", fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", borderRadius: 4, padding: "3px 8px", marginBottom: 8 }}>
                  Branch 1 · Medavakkam
                </span>
                <div style={{ display: "flex", gap: 8 }}>
                  <FaMapMarkerAlt style={{ color: "#d4a200", fontSize: 12, marginTop: 3, flexShrink: 0 }} />
                  <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                    No. 10/419, 1st Floor,<br />
                    Dr. Ramayanagar,<br />
                    Mambakkam–Medavakkam Main Rd,<br />
                    Chennai – 600100
                  </p>
                </div>
              </li>

              <li>
                <span style={{ display: "inline-block", background: "#fff8e1", color: "#b8860b", fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", borderRadius: 4, padding: "3px 8px", marginBottom: 8 }}>
                  Branch 2 · Semmancheri
                </span>
                <div style={{ display: "flex", gap: 8 }}>
                  <FaMapMarkerAlt style={{ color: "#d4a200", fontSize: 12, marginTop: 3, flexShrink: 0 }} />
                  <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                    721, Kailasah Plaza, Plot No. 710,<br />
                    Nookampalayam Link Road,<br />
                    Semmancheri, Chennai – 600119
                  </p>
                </div>
              </li>

              <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaPhone style={{ color: "#d4a200", fontSize: 13, flexShrink: 0 }} />
                <a href="tel:+919840431433" style={{ color: "#444", fontSize: 14, textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#111"}
                  onMouseLeave={e => e.currentTarget.style.color = "#444"}
                >+91 98404 31433</a>
              </li>

              <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaEnvelope style={{ color: "#d4a200", fontSize: 13, flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <a href="mailto:h4fitnessstudio@gmail.com" style={{ color: "#444", fontSize: 13, textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#111"}
                    onMouseLeave={e => e.currentTarget.style.color = "#444"}
                  >h4fitnessstudio@gmail.com</a>
                  <a href="mailto:Karthik.d84@gmail.com" style={{ color: "#444", fontSize: 13, textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#111"}
                    onMouseLeave={e => e.currentTarget.style.color = "#444"}
                  >Karthik.d84@gmail.com</a>
                </div>
              </li>

              <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaClock style={{ color: "#d4a200", fontSize: 13, flexShrink: 0 }} />
                <p style={{ color: "#444", fontSize: 14, margin: 0, fontWeight: 600 }}>Mon–Sun: 5AM – 11PM</p>
              </li>

            </ul>
          </div>

        </div>

        {/* ── Bottom ── */}
        <div style={{ borderTop: "1px solid #eee", paddingTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <p style={{ color: "#999", fontSize: 12, margin: 0 }}>
            © {new Date().getFullYear()} H4 Fitness Studio. All rights reserved.
          </p>
          <p style={{ color: "#bbb", fontSize: 11, margin: 0 }}>
            Medavakkam & Semmancheri, Chennai – Tamil Nadu
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;