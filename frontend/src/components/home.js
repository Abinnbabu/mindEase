import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  // Generate random blob data
  const generateBlobs = () => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 120 + 60, // Random size between 60-180px
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 12, // Random duration between 12-20s
      animationIndex: i % 8,
    }));
  };

  const blobs = generateBlobs();

  return (
    <div style={{ background: theme.bgGradient, minHeight: "100vh", fontFamily: "'Montserrat', sans-serif", transition: "all 0.4s ease", position: "relative", overflow: "hidden", lineHeight: "1.6" }}>

      <style>{`
        @keyframes randomFloat0 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(-30px, -40px); }
          50%  { transform: translate(20px, -10px); }
          75%  { transform: translate(-20px, 30px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes randomFloat1 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(40px, -20px); }
          50%  { transform: translate(-10px, 35px); }
          75%  { transform: translate(-35px, -15px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes randomFloat2 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(-25px, 35px); }
          50%  { transform: translate(35px, 10px); }
          75%  { transform: translate(15px, -30px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes randomFloat3 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(50px, 30px); }
          50%  { transform: translate(-20px, -25px); }
          75%  { transform: translate(25px, 20px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes randomFloat4 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(-45px, 25px); }
          50%  { transform: translate(30px, -30px); }
          75%  { transform: translate(-15px, 35px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes randomFloat5 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(35px, -35px); }
          50%  { transform: translate(-30px, 20px); }
          75%  { transform: translate(25px, -25px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes randomFloat6 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(-40px, -20px); }
          50%  { transform: translate(25px, 40px); }
          75%  { transform: translate(-20px, -35px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes randomFloat7 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(30px, 40px); }
          50%  { transform: translate(-35px, -20px); }
          75%  { transform: translate(40px, 25px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mood-btn:hover  { transform: scale(1.06) !important; box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important; }
        .feat-card:hover { transform: translateY(-4px) scale(1.01) !important; box-shadow: 0 12px 32px rgba(0,0,0,0.12) !important; }
        .nav-btn:hover   { opacity: 0.9; transform: scale(1.03); }
        .logout-btn:hover { background: rgba(255,255,255,0.18) !important; }
      `}</style>

      {/* Background Bubbles */}
      <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }}>
        {blobs.map((blob) => (
          <span
            key={blob.id}
            style={{
              position: "absolute",
              width: blob.size,
              height: blob.size,
              background: theme.bubble,
              opacity: 0.06,
              borderRadius: "50%",
              left: `${blob.left}%`,
              top: `${blob.top}%`,
              animation: `randomFloat${blob.animationIndex} ${blob.duration}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav style={{
        background: theme.navBg,
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        position: "relative",
        zIndex: 2,
      }}>
        {/* Brand Title */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: "1.8rem",
          fontWeight: 400,
          color: theme.navText,
          letterSpacing: "-0.5px",
          fontFamily: "'Montserrat', sans-serif",
        }}>
          <span style={{ fontSize: "2rem" }}>🧠</span>
          <span style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 500,
            letterSpacing: "-0.8px",
          }}>
            MindEase
          </span>
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {/* Theme Switcher */}
          <select
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
            style={{
              borderRadius: 10,
              padding: "10px 16px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              color: theme.navText,
              fontWeight: 400,
              cursor: "pointer",
              fontSize: "0.9rem",
              outline: "none",
              fontFamily: "'Montserrat', sans-serif",
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
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 10,
              padding: "10px 24px",
              color: theme.navText,
              fontWeight: 400,
              cursor: "pointer",
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
              letterSpacing: "0.3px",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ position: "relative", zIndex: 1, padding: "48px 48px 72px", maxWidth: 1200, margin: "0 auto" }}>

        {/* Mood Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 44, flexWrap: "wrap", animation: "fadeSlideUp 0.5s ease both" }}>
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
                padding: "12px 32px",
                fontWeight: 400,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: selectedMood === mood.label ? `0 8px 24px rgba(0,0,0,0.12)` : "0 2px 8px rgba(0,0,0,0.04)",
                letterSpacing: "0.3px",
              }}
            >
              {mood.emoji} {mood.label}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 style={{
          color: theme.primary,
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          fontWeight: 400,
          textAlign: "center",
          marginBottom: 52,
          animation: "fadeSlideUp 0.6s ease 0.1s both",
          letterSpacing: "-0.5px",
          lineHeight: "1.2",
          fontFamily: "'Montserrat', sans-serif",
        }}>
          Amar, how are you feeling today? ✨
        </h1>

        {/* Feature Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
          animation: "fadeSlideUp 0.7s ease 0.2s both",
        }}>
          {features.map((feat, i) => (
            <button
              key={feat.label}
              className="feat-card"
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => feat.label === "Survey" && navigate("/survey")}
              style={{
                background: theme.cardBg,
                border: `2px solid ${hoveredFeature === i ? theme.primary : "transparent"}`,
                borderRadius: 20,
                padding: "52px 36px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s ease",
                boxShadow: hoveredFeature === i ? `0 12px 32px rgba(0,0,0,0.12)` : "4px 16px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <span style={{ fontSize: "3.2rem" }}>{feat.emoji}</span>
              <span style={{
                color: theme.primary,
                fontSize: "1.6rem",
                fontWeight: 400,
                letterSpacing: "-0.3px",
              }}>
                {feat.label}
              </span>
              <span style={{
                color: theme.primary,
                opacity: 0.68,
                fontSize: "0.98rem",
                fontWeight: 400,
                lineHeight: "1.6",
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
            marginTop: 48,
            color: theme.primary,
            fontSize: "1.1rem",
            fontWeight: 400,
            animation: "fadeSlideUp 0.4s ease both",
            letterSpacing: "0.2px",
            lineHeight: "1.6",
          }}>
            You're feeling <strong>{selectedMood}</strong> today. We're here for you 💙
          </p>
        )}
      </main>
    </div>
  );
}