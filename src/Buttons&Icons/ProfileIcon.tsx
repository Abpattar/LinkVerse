import React from "react";

interface ProfileIcon {
  onClick?: () => void;
}

const ProfileIcon: React.FC<ProfileIcon> = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "fixed",
      top: "32px",
      right: "80px",
      background: "none",
      border: "none",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 999,
      boxShadow: ``
    }}
  >
    <svg width="70" height="70" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45"
        fill="none"
        stroke="url(#profileGlow)"
        strokeWidth="4"/>
      <circle cx="50" cy="40" r="16"
        fill="none"
        stroke="url(#profileGlow)"
        strokeWidth="4"/>
      <ellipse cx="50" cy="70" rx="23" ry="14"
        fill="none"
        stroke="url(#profileGlow)"
        strokeWidth="4"/>
      <defs>
        <linearGradient id="profileGlow" x1="0" y1="0" x2="100" y2="0">
          <stop stopColor="#000000ff"/>
          <stop offset="1" stopColor="#ffffffff"/>
        </linearGradient>
      </defs>
    </svg>
  </button>
);

export default ProfileIcon;
