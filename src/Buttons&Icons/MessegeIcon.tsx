import React from "react";

interface MessageIcon {
  onClick?: () => void;
}

const MessageIcon: React.FC<MessageIcon> = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "fixed",
      top: "32px",
      right: "240px", // Adjust to position left of notification button
      background: "#23232e",
      border: "none",
      borderRadius: "50%",
      width: "80px",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 999,
      boxShadow: "none", // No glow
      
    }}
  >
    {/* Simple envelope/message icon SVG */}
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A0A0C0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  </button>
);

export default MessageIcon;
