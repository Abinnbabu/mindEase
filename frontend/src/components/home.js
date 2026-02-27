import { useState } from "react";

const themes = {
  blue: {
    bgMain: "#F4F9FF",
    cardBg: "#E3F2FD",
    inputBg: "#D6ECFF",
    primary: "#2B6CB0",
    bubble: "#2B6CB0",
    bgGradient: "linear-gradient(135deg, #ffffff, #F4F9FF)",
    navBg: "#2B6CB0",
    navText: "#ffffff",
  },
  green: {
    bgMain: "#F3FBF6",
    cardBg: "#E0F5E9",
    inputBg: "#CDEBD9",
    primary: "#2F855A",
    bubble: "#2F855A",
    bgGradient: "linear-gradient(135deg, #ffffff, #F3FBF6)",
    navBg: "#2F855A",
    navText: "#ffffff",
  },
  warm: {
    bgMain: "#FFF8F0",
    cardBg: "#FFEEDB",
    inputBg: "#FFE4C4",
    primary: "#C05621",
    bubble: "#C05621",
    bgGradient: "linear-gradient(135deg, #ffffff, #FFF8F0)",
    navBg: "#C05621",
    navText: "#ffffff",
  },
  dark: {
    bgMain: "#1E293B",
    cardBg: "#334155",
    inputBg: "#ffffff",
    primary: "#93C5FD",
    bubble: "#93C5FD",
    bgGradient: "linear-gradient(135deg, #0f172a, #1E293B)",
    navBg: "#0f172a",
    navText: "#e2e8f0",
  },
};

const moods = [
  { label: "Happy", emoji: "😊" },
  { label: "Neutral", emoji: "😐" },
  { label: "Sad", emoji: "😢" },
  { label: "Anxious", emoji: "😰" },
];

const features = [
  { label: "Chatbot", emoji: "🤖", desc: "Talk to our AI companion" },
  { label: "Survey", emoji: "📋", desc: "Track your mental wellness" },
  { label: "Medical Support", emoji: "🏥", desc: "Connect with professionals" },
];

export default function MindEaseHome() {
  const [themeName, setThemeName] = useState("blue");
  const [selectedMood, setSelectedMood] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const theme = themes[themeName];

  return (
    <div style={{ background: theme.bgGradient, minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif", transition: "all 0.4s ease", position: "relative", overflow: "hidden" }}>

      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .blob1 { left: 8%;  top: 55%; animation: float 30s infinite ease-in-out; }
        .blob2 { left: 72%; top: 15%; animation: float 35s infinite ease-in-out; }
        .blob3 { left: 42%; top: 75%; animation: float 40s infinite ease-in-out; }
        .blob4 { left: 88%; top: 60%; animation: float 28s infinite ease-in-out; }
        .mood-btn:hover  { transform: scale(1.08) !important; box-shadow: 0 6px 20px rgba(0,0,0,0.15) !important; }
        .feat-card:hover { transform: translateY(-6px) scale(1.02) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important; }
        .nav-btn:hover   { opacity: 0.85; transform: scale(1.04); }
        .logout-btn:hover { background: rgba(255,255,255,0.25) !important; }
      `}</style>

      {/* Background Bubbles */}
      <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }}>
        {["blob1", "blob2", "blob3", "blob4"].map((cls) => (
          <span key={cls} className={cls} style={{
            position: "absolute",
            width: 160, height: 160,
            background: theme.bubble,
            opacity: 0.06,
            borderRadius: "50%",
          }} />
        ))}
      </div>

      {/* Navbar */}
      <nav style={{
        background: theme.navBg,
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 2,
      }}>
        <div style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "2px solid rgba(255,255,255,0.4)",
          borderRadius: 12,
          padding: "8px 20px",
          color: theme.navText,
          fontWeight: 600,
          fontSize: "1rem",
        }}>
          👤 &nbsp;John Doe
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {/* Theme Switcher */}
          <select
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
            style={{
              borderRadius: 12,
              padding: "8px 14px",
              border: "2px solid rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: theme.navText,
              fontWeight: 500,
              cursor: "pointer",
              fontSize: "0.9rem",
              outline: "none",
            }}
          >
            <option value="blue" style={{ color: "#000" }}>🎨 Soft Blue</option>
            <option value="green" style={{ color: "#000" }}>🌿 Sage Green</option>
            <option value="warm" style={{ color: "#000" }}>☀️ Warm Beige</option>
            <option value="dark" style={{ color: "#000" }}>🌙 Dark Comfort</option>
          </select>

          <button
            className="logout-btn"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: 12,
              padding: "8px 22px",
              color: theme.navText,
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ position: "relative", zIndex: 1, padding: "40px 40px 60px", maxWidth: 1100, margin: "0 auto" }}>

        {/* Mood Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 36, flexWrap: "wrap", animation: "fadeSlideUp 0.5s ease both" }}>
          {moods.map((mood) => (
            <button
              key={mood.label}
              className="mood-btn"
              onClick={() => setSelectedMood(mood.label)}
              style={{
                background: selectedMood === mood.label ? theme.primary : theme.cardBg,
                color: selectedMood === mood.label ? "#fff" : theme.primary,
                border: `2px solid ${theme.primary}`,
                borderRadius: 50,
                padding: "10px 28px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: selectedMood === mood.label ? `0 6px 20px rgba(0,0,0,0.15)` : "none",
              }}
            >
              {mood.emoji} {mood.label}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 style={{
          color: theme.primary,
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 48,
          animation: "fadeSlideUp 0.6s ease 0.1s both",
          letterSpacing: "-0.5px",
        }}>
          How are you feeling today? ✨
        </h1>

        {/* Feature Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
          animation: "fadeSlideUp 0.7s ease 0.2s both",
        }}>
          {features.map((feat, i) => (
            <button
              key={feat.label}
              className="feat-card"
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                background: theme.cardBg,
                border: `2px solid ${hoveredFeature === i ? theme.primary : "transparent"}`,
                borderRadius: 24,
                padding: "48px 32px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span style={{ fontSize: "2.8rem" }}>{feat.emoji}</span>
              <span style={{
                color: theme.primary,
                fontSize: "1.5rem",
                fontWeight: 700,
              }}>
                {feat.label}
              </span>
              <span style={{
                color: theme.primary,
                opacity: 0.7,
                fontSize: "0.95rem",
                fontWeight: 400,
              }}>
                {feat.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Mood feedback */}
        {selectedMood && (
          <p style={{
            textAlign: "center",
            marginTop: 36,
            color: theme.primary,
            fontSize: "1.05rem",
            fontWeight: 500,
            animation: "fadeSlideUp 0.4s ease both",
          }}>
            You're feeling <strong>{selectedMood}</strong> today. We're here for you 💙
          </p>
        )}
      </main>
    </div>
  );
}