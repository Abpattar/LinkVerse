import React, { useState } from "react";

interface SearchBar {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBar> = ({
  placeholder = "Search here...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        background: "none",
        border: "2px solid #000000ff",
        borderRadius: "40px",
        boxShadow: ``,
        padding: "8px 16px",
        width: "400px",
        zIndex: 999,
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={{
          flexGrow: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          color: "#000000ff",
          fontSize: "16px",
          fontWeight: "500",
          paddingLeft: "12px",
        }}
      />
      <button
        onClick={() => onSearch && onSearch(query)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Search"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="#000000ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
