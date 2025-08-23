import React from "react";

// Import your button components
import FamilyClick from "../Buttons&Icons/FamilyClick";
import FriendsClick from "../Buttons&Icons/FriendsClick";
import WorkClick from "../Buttons&Icons/WorkClick";
import CommunityClick from "../Buttons&Icons/CommunityClick";
import MainProfileClick from "../Buttons&Icons/MainProfileClick";
import OthersClick from "../Buttons&Icons/OthersClick";

const CIRCLE_RADIUS = 250; // Distance from center in px
const BUTTON_SIZE = 150;    // px, must match each button's width/height

const angles = [0, 72, 144, 216, 288]; // in degrees for 5 buttons

const buttonComponents = [
  <FamilyClick key="family" />,
  <FriendsClick key="friend" />,
  <WorkClick key="work" />,
  <CommunityClick key="community" />,
  <OthersClick key="other" />,
];

const PrimarySix: React.FC = () => (
  <div
    style={{
      position: "relative",
      width: `${CIRCLE_RADIUS * 2 + BUTTON_SIZE}px`,
      height: `${CIRCLE_RADIUS * 2 + BUTTON_SIZE}px`,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {/* Center Neon Button */}
    <div
      style={{
        position: "absolute",
        left: `calc(50% - ${BUTTON_SIZE / 2}px)`,
        top: `calc(50% - ${BUTTON_SIZE / 2}px)`,
        zIndex: 2
      }}
    >
      <MainProfileClick />
    </div>

    {/* Surrounding Buttons */}
    {buttonComponents.map((Btn, i) => {
      const angleRad = (angles[i] * Math.PI) / 180;
      const x = CIRCLE_RADIUS * Math.cos(angleRad);
      const y = CIRCLE_RADIUS * Math.sin(angleRad);

      return (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `calc(50% - ${BUTTON_SIZE / 2}px + ${x}px)`,
            top: `calc(50% - ${BUTTON_SIZE / 2}px + ${y}px)`,
            zIndex: 1
          }}
        >
          {Btn}
        </div>
      );
    })}
  </div>
);

export default PrimarySix;
