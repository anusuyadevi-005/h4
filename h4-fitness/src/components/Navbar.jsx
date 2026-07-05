import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/",          label: "Home" },
  { to: "/about",     label: "About Us" },
  { to: "/machinery", label: "Machinery" },
  { to: "/contact",   label: "Contact" },
];

function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position:   "fixed",
          top:        0,
          left:       0,
          width:      "100%",
          zIndex:     50,
          transition: "background 0.4s, box-shadow 0.4s",
          background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.82)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(245,197,24,0.18)" : "1px solid transparent",
          boxShadow:  scrolled ? "0 4px 32px rgba(0,0,0,0.6)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, textDecoration: "none" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, overflow: "hidden", background: "#fff", flexShrink: 0 }}>
              <img src="/logo.png" alt="H4 Fitness Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <p style={{ fontSize: 17, fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: 0 }}>
                H4 <span style={{ color: "#f5c518" }}>FITNESS</span>
              </p>
              <p style={{ fontSize: 9, color: "#888", letterSpacing: "3px", textTransform: "uppercase", margin: 0 }}>
                Studio · Medavakkam
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <ul style={{ display: "flex", alignItems: "center", gap: "32px", listStyle: "none", padding: 0, margin: 0 }} className="hidden md:flex">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  style={{
                    position:      "relative",
                    fontSize:      13,
                    fontWeight:    600,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: location.pathname === link.to ? "#f5c518" : "#ccc",
                    textDecoration: "none",
                    transition:    "color 0.3s",
                    paddingBottom: "4px",
                  }}
                  onMouseEnter={e => { if (location.pathname !== link.to) e.currentTarget.style.color = "#f5c518"; }}
                  onMouseLeave={e => { if (location.pathname !== link.to) e.currentTarget.style.color = "#ccc"; }}
                >
                  {link.label}
                  {/* Active underline */}
                  <span style={{
                    position:      "absolute",
                    bottom:        0,
                    left:          0,
                    height:        "2px",
                    width:         location.pathname === link.to ? "100%" : 0,
                    background:    "#f5c518",
                    transition:    "width 0.3s",
                    borderRadius:  "1px",
                  }} />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="tel:+919840431433"
              id="nav-join-btn"
              className="shimmer-btn hidden md:inline-flex"
              style={{
                padding:       "10px 24px",
                borderRadius:  "999px",
                fontSize:      13,
                fontWeight:    700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                textDecoration:"none",
                transition:    "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Join Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              style={{
                background: "none",
                border:     "none",
                cursor:     "pointer",
                color:      "#f5c518",
                fontSize:   20,
                width:      40,
                height:     40,
                display:    "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position:       "fixed",
              inset:          0,
              zIndex:         40,
              background:     "rgba(10,10,10,0.98)",
              backdropFilter: "blur(24px)",
              display:        "flex",
              flexDirection:  "column",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "32px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.to}
                  style={{
                    fontSize:      "clamp(28px, 8vw, 40px)",
                    fontWeight:    900,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    textDecoration:"none",
                    color: location.pathname === link.to ? "#f5c518" : "#fff",
                    fontFamily:    "'Bebas Neue', sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:+919840431433"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
              className="shimmer-btn"
              style={{
                padding:       "16px 40px",
                borderRadius:  "999px",
                fontSize:      16,
                fontWeight:    700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginTop:     "16px",
                textDecoration:"none",
              }}
            >
              Join Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;