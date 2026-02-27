import { useState } from "react";

const themes = {
  blue: {
    bgMain: "#F4F9FF",
    cardBg: "#E3F2FD",
    inputBg: "#D6ECFF",
    primary: "#2B6CB0",
    text: "#1a365d",
    bgGradient: "linear-gradient(135deg, #ffffff, #F4F9FF)",
  },
  green: {
    bgMain: "#F3FBF6",
    cardBg: "#E0F5E9",
    inputBg: "#CDEBD9",
    primary: "#2F855A",
    text: "#1c4532",
    bgGradient: "linear-gradient(135deg, #ffffff, #F3FBF6)",
  },
  warm: {
    bgMain: "#FFF8F0",
    cardBg: "#FFEEDB",
    inputBg: "#FFE4C4",
    primary: "#C05621",
    text: "#7b341e",
    bgGradient: "linear-gradient(135deg, #ffffff, #FFF8F0)",
  },
  dark: {
    bgMain: "#1E293B",
    cardBg: "#334155",
    inputBg: "#ffffff",
    primary: "#93C5FD",
    text: "#e2e8f0",
    bgGradient: "linear-gradient(135deg, #0f172a, #1E293B)",
  },
};

export default function MindEase() {
  const [isLogin, setIsLogin] = useState(true);
  const [themeName, setThemeName] = useState("blue");
  const theme = themes[themeName];

  const toggleForm = () => setIsLogin((prev) => !prev);

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

  const styles = {
    body: {
      background: theme.bgGradient,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif",
      transition: "all 0.4s ease",
      overflow: "hidden",
      position: "relative",
    },
    bgAnim: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      overflow: "hidden",
      zIndex: 0,
      pointerEvents: "none",
    },
    themeSwitcher: {
      position: "absolute",
      top: 20,
      right: 20,
      zIndex: 2,
    },
    select: {
      borderRadius: 12,
      padding: "6px 12px",
      border: "none",
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      fontWeight: 500,
      cursor: "pointer",
      fontSize: "0.9rem",
    },
    card: {
      background: theme.cardBg,
      borderRadius: 20,
      padding: 40,
      width: "100%",
      maxWidth: 420,
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transition: "all 0.4s ease",
      position: "relative",
      zIndex: 1,
    },
    title: {
      color: theme.primary,
      fontWeight: 600,
      textAlign: "center",
      marginBottom: 24,
      fontSize: "1.5rem",
    },
    input: {
      width: "100%",
      borderRadius: 12,
      padding: "12px 14px",
      border: "1px solid #cfe8ff",
      backgroundColor: theme.inputBg,
      outline: "none",
      fontSize: "1rem",
      transition: "border-color 0.3s ease",
      boxSizing: "border-box",
      marginBottom: 12,
    },
    button: {
      width: "100%",
      backgroundColor: theme.primary,
      color: "white",
      borderRadius: 12,
      padding: "12px",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: 4,
      transition: "opacity 0.2s ease",
    },
    toggle: {
      cursor: "pointer",
      color: theme.primary,
      fontSize: "0.9rem",
      textAlign: "center",
      marginTop: 12,
      display: "block",
    },
  };

  return (
    <div style={styles.body}>
      {/* Animated background blobs */}
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
        .btn-soft:hover { opacity: 0.9; }
        input:focus { border-color: ${theme.primary} !important; }
      `}</style>

      <div style={styles.bgAnim}>
        {blobs.map((blob) => (
          <span
            key={blob.id}
            style={{
              position: "absolute",
              width: blob.size,
              height: blob.size,
              background: theme.primary,
              opacity: 0.06,
              borderRadius: "50%",
              left: `${blob.left}%`,
              top: `${blob.top}%`,
              animation: `randomFloat${blob.animationIndex} ${blob.duration}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Theme Switcher */}
      <div style={styles.themeSwitcher}>
        <select
          style={styles.select}
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
        >
          <option value="blue">Soft Blue</option>
          <option value="green">Sage Green</option>
          <option value="warm">Warm Beige</option>
          <option value="dark">Dark Comfort</option>
        </select>
      </div>

      {/* Card */}
      <div style={styles.card}>
        <h3 style={styles.title}>{isLogin ? "Login" : "Register"}</h3>

        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            required
            style={styles.input}
          />

          <button
            type="button"
            className="btn-soft"
            style={styles.button}
            onClick={() => {}}
          >
            {isLogin ? "Login" : "Register"}
          </button>

          <span style={styles.toggle} onClick={toggleForm}>
            {isLogin ? "Create account" : "Back to login"}
          </span>
        </form>
      </div>
    </div>
  );
}