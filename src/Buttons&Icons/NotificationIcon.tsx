import React from "react";

interface NotificationIcon {
  onClick?: () => void;
}

const NotificationIcon: React.FC<NotificationIcon> = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "none",
    }}
  >
    {/* Simple notification bell icon SVG */}
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000ff"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  </button>
);

export default NotificationIcon;
