import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import heroImage from "./assets/monk-hero.png";
import communityImage from "./assets/monk-community.png";
import missionImage from "./assets/monk-saves.png";

const CONTRACT =
  "3eRXDT4AxzNxsxHn7AScsKZv9QeGqXqKovB6XWkLpump";

const TELEGRAM = "https://t.me/themonkgroup";
const X_URL = "https://x.com/MonkeyManMONKme";
const BUY_URL = `https://pump.fun/coin/${CONTRACT}`;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Token", href: "#token" },
  { label: "Mission", href: "#mission" },
  { label: "Community", href: "#community" },
];

const crowns = [
  { left: "8%", top: "18%", delay: 0, duration: 7, size: 17 },
  { left: "18%", top: "72%", delay: 1.4, duration: 8, size: 13 },
  { left: "32%", top: "28%", delay: 2, duration: 6, size: 15 },
  { left: "72%", top: "16%", delay: 0.8, duration: 8, size: 14 },
  { left: "88%", top: "38%", delay: 2.5, duration: 7, size: 18 },
  { left: "78%", top: "76%", delay: 1, duration: 9, size: 13 },
  { left: "52%", top: "88%", delay: 3, duration: 7, size: 15 },
];

function FloatingCrowns() {
  return (
    <div className="crown-layer" aria-hidden="true">
      {crowns.map((crown, index) => (
        <motion.span
          key={index}
          className="floating-crown"
          style={{
            left: crown.left,
            top: crown.top,
            fontSize: crown.size,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.12, 0.55, 0.12],
            y: [0, -28, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: crown.duration,
            delay: crown.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♛
        </motion.span>
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-crown">♛</span>
          <span>
            MONKEY<span className="brand-gold">MAN</span>
          </span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-x"
            aria-label="Monkey Man on X"
          >
            𝕏
          </a>

          <a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Join Movement
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="mobile-menu-cta"
              onClick={closeMenu}
            >
              Join The Movement
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, 70]);

  return (
    <section id="top" className="hero">
      <FloatingCrowns />

      <div className="hero-grid">

        {/* CENTER MONKEY IMAGE */}
        <motion.div
          className="hero-visual"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="hero-glow" />

          {/* ROTATING CIRCLE */}
          <motion.div
            className="hero-ring"
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* BOUNCING MONKEY */}
          <motion.img
            src={heroImage}
            alt="Monkey Man — Legend"
            className="hero-monkey"
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="hero-corner hero-corner-one" />
          <div className="hero-corner hero-corner-two" />
        </motion.div>

        {/* TEXT UNDER THE MONKEY */}
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
          >
            <span className="eyebrow-dot" />
            THE LEGEND MOVEMENT
          </motion.div>

          <h1>
            BECOME
            <span>A LEGEND.</span>
          </h1>

          <p className="hero-tagline">
            Together we build.
            <br />
            Together we moon.
          </p>

          <p className="hero-description">
            Monkey Man is a community-driven memecoin on Solana
            built around the Legend movement.
          </p>

          <div className="hero-buttons">

            <motion.a
              href={BUY_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-gold"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 35px rgba(255, 215, 0, 0.35)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Buy $MONK
              <span>↗</span>
            </motion.a>

            <motion.a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
              whileHover={{
                scale: 1.04,
                borderColor: "#FFD700",
                color: "#FFD700",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Join The Movement
              <span>→</span>
            </motion.a>

          </div>

          <div className="hero-meta">
            <span>
              <i /> BUILT ON SOLANA
            </span>

            <span className="meta-divider" />

            <span>MONKEY MAN / $MONK</span>
          </div>

        </motion.div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.div>
      </div>

    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="01 / THE MOVEMENT"
          title="WHAT IS MONKEY MAN?"
          description="A community-driven memecoin on Solana built around the Legend movement."
        />

        <div className="about-grid">
          <motion.div
            className="about-card glass-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-number">01</div>

            <p>
              Monkey Man <strong>($MONK)</strong> is a
              community-driven memecoin on Solana built around
              the Legend movement.
            </p>

            <p>
              We believe success means more when everyone rises
              together. No complicated promises, just a community
              of monkeys building, believing, and moving forward.
            </p>

            <p className="about-final">
              The project has also shared its intention to support
              monkey conservation efforts.
            </p>
          </motion.div>

          <motion.div
            className="about-quote"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="quote-mark">“</span>
            <h3>
              SUCCESS MEANS NOTHING
              <span>IF NO ONE ELSE WINS.</span>
            </h3>
            <div className="quote-line" />
            <p>— THE LEGEND MOVEMENT</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TokenInfo() {
  const [copied, setCopied] = useState(false);

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      setCopied(false);
    }
  };

  const shortenedCA = `${CONTRACT.slice(0, 8)}...${CONTRACT.slice(-8)}`;

  const cards = [
    {
      label: "NAME",
      value: "Monkey Man",
      icon: "♛",
    },
    {
      label: "TICKER",
      value: "$MONK",
      icon: "M",
    },
    {
      label: "NETWORK",
      value: "Solana",
      icon: "◎",
    },
  ];

  return (
    <section id="token" className="section token-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="02 / THE TOKEN"
          title="MEET $MONK"
          description="Everything you need to identify Monkey Man. Nothing more, nothing invented."
        />

        <div className="token-grid">
          {cards.map((card, index) => (
            <motion.div
              className="token-card glass-card"
              key={card.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                borderColor: "rgba(255, 215, 0, 0.35)",
              }}
            >
              <div className="token-icon">{card.icon}</div>

              <span>{card.label}</span>

              <strong>{card.value}</strong>
            </motion.div>
          ))}
        </div>

        <motion.div
  className="contract-card glass-card"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.75, delay: 0.25 }}
>
  <div className="contract-monkey">
    <motion.img
      src={heroImage}
      alt="Monkey Man"
      animate={{
        y: [0, -5, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>

  <div className="contract-info">
    <span className="contract-label">
      CONTRACT ADDRESS
    </span>

    <div className="contract-value">
      <span className="desktop-contract">{CONTRACT}</span>
      <span className="mobile-contract">{shortenedCA}</span>
    </div>

    <span className="contract-network">
      Solana / Pump-style address
    </span>
  </div>

  <motion.button
    className={`copy-button ${copied ? "copied" : ""}`}
    onClick={copyContract}
    whileTap={{ scale: 0.95 }}
  >
    {copied ? (
      <>
        <span>✓</span>
        COPIED
      </>
    ) : (
      <>
        <span>⧉</span>
        COPY CA
      </>
    )}
  </motion.button>
</motion.div>

        <div className="token-note">
          <span>ⓘ</span>
          No additional tokenomics are displayed because the project
          has not publicly provided confirmed figures for them.
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="section mission-section">
      <div className="section-container">
        <motion.div
          className="mission-card glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mission-content">
            <span className="section-eyebrow">
              03 / THE MISSION
            </span>

            <h2>
              MEMES
              <span>WITH A PURPOSE.</span>
            </h2>

            <p>
              Monkey Man isn't just about the movement. It's about
              making an impact beyond the blockchain.
            </p>

            <div className="mission-highlight">
              <strong>50%</strong>

              <span>
                OF FEES GOES TO AFRICAN WILDLIFE FOUNDATION.
              </span>
            </div>

            <p className="mission-description">
              50% of fees are dedicated to supporting the African
              Wildlife Foundation and its conservation efforts.
            </p>
          </div>

          <motion.div
  className="mission-symbol"
  initial={{ opacity: 0, scale: 0.85 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.15 }}
>
  <img
    src={missionImage}
    alt="Monkey Man supporting other monkeys"
  />
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="community-section">
      <div className="community-image">
        <img
          src={communityImage}
          alt="Monkey Man community"
        />
      </div>

      <div className="community-overlay" />

      <FloatingCrowns />

      <motion.div
        className="community-content"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        <span className="section-eyebrow gold-eyebrow">
          03 / THE COMMUNITY
        </span>

        <h2>
          TOGETHER WE BUILD.
          <span>TOGETHER WE WIN.</span>
        </h2>

        <p>
          Be the reason another monkey believes in tomorrow.
        </p>

        <div className="community-buttons">
          <motion.a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
            className="button button-gold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(255, 215, 0, 0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Join Telegram
            <span>↗</span>
          </motion.a>

          <motion.a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="button button-light"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.97 }}
          >
            Follow On 𝕏
            <span>↗</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href="#top" className="footer-brand">
            MONKEY<span>MAN</span>
          </a>

          <p className="footer-tagline">
            Together we build. Together we moon.
          </p>
        </div>

        <div className="footer-legend">
          <span>LEGEND.</span>
          <small>BUILT FOR THE MOVEMENT.</small>
        </div>

        <div className="footer-links">
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
          >
            𝕏 X
          </a>

          <a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Monkey Man</span>
        <span>Built for legends.</span>
      </div>
    </footer>
  );
}

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />

      <main>
      <Hero />
<About />
<TokenInfo />
<Mission />
<Community />
      </main>

      <Footer />
    </>
  );
}

export default App;