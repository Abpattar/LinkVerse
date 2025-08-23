import React from "react";

interface FriendsClick{
  onClick?: () => void;
}

const FriendsClick: React.FC<FriendsClick> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#4e7f7f", // base teal color
        border: "2px solid #004d4d", // dark edge border
        borderRadius: "50%",
        width: "125px",
        height: "125px",
        cursor: "pointer",
        position: "relative",
        outline: "none",
        boxShadow: `
          0 0 10px #004d4d,          /* dark neon glow */
          0 0 20px #60c9c9,          /* light neon secondary glow */
          inset 0 0 30px #a0ffff      /* glowing light from center */
        `,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget.style.boxShadow = `
          0 0 15px #003333, 
          0 0 30px #80ffff,
          inset 0 0 40px #c0ffff
        `);
      }}
      onMouseLeave={e => {
        (e.currentTarget.style.boxShadow = `
          0 0 10px #004d4d, 
          0 0 20px #60c9c9,
          inset 0 0 30px #a0ffff
        `);
      }}
    />
  );
};

export default FriendsClick;
