import React, { useEffect, useRef, useState } from "react";

interface ProfileIcon {
  onClick?: () => void;
}

const menuOptions = [
  { label: "Edit Profile", onClick: () => alert("Edit Profile clicked") },
  { label: "History", onClick: () => alert("History clicked") },
  { label: "Help", onClick: () => alert("Help clicked") },
  { label: "Settings", onClick: () => alert("Settings clicked") },
  { label: "Sign Out", onClick: () => alert("Sign Out clicked") },
];

const ProfileIcon: React.FC<ProfileIcon> = ({ onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleClick = () => {
    // Toggle dropdown and still allow external onClick side-effects
    setMenuOpen((prev) => !prev);
    onClick?.();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={containerRef}>
      <button
        onClick={handleClick}
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
        aria-haspopup="true"
        aria-expanded={menuOpen}
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
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

      {menuOpen && (
        <ul
          style={{
            position: "absolute",
            top: "70px",
            right: 0,
            backgroundColor: "#23232e",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(26, 240, 250, 0.7), 0 0 20px rgba(144, 19, 254, 0.7)",
            padding: "8px 0",
            margin: 0,
            listStyle: "none",
            width: "160px",
            zIndex: 1000,
          }}
          role="menu"
        >
          {menuOptions.map(({ label, onClick }) => (
            <li
              key={label}
              onClick={() => {
                onClick();
                setMenuOpen(false);
              }}
              style={{
                padding: "10px 20px",
                color: "#ccc",
                cursor: "pointer",
                userSelect: "none",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLLIElement).style.backgroundColor = "#241c58";
                (e.currentTarget as HTMLLIElement).style.color = "#1af0fa";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLLIElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLLIElement).style.color = "#ccc";
              }}
              role="menuitem"
              tabIndex={0}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileIcon;
