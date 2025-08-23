import React from "react";

// Import your button components
import FamilyClick from "../Buttons&Icons/FamilyClick";
import FriendsClick from "../Buttons&Icons/FriendsClick";
import WorkClick from "../Buttons&Icons/WorkClick";
import CommunityClick from "../Buttons&Icons/CommunityClick";
import MainProfileClick from "../Buttons&Icons/MainProfileClick";
import OthersClick from "../Buttons&Icons/OthersClick";

import { Primary6Circular } from "../Animations/Primary6Circular";

const CIRCLE_RADIUS = 250;
const BUTTON_SIZE = 150;

const angles = [0, 72, 144, 216, 288];

const buttonComponents = [
  <FamilyClick key="family" />,
  <FriendsClick key="friend" />,
  <WorkClick key="work" />,
  <CommunityClick key="community" />,
  <OthersClick key="other" />,
];

const PrimarySix: React.FC = () => {
  const angleOffset = Primary6Circular(-0.1); // 0.1 degrees per frame speed

  return (
    <div
      style={{
        position: "relative",
        width: `${CIRCLE_RADIUS * 2 + BUTTON_SIZE}px`,
        height: `${CIRCLE_RADIUS * 2 + BUTTON_SIZE}px`,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Center Button */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <MainProfileClick />
      </div>

      {/* Moving Buttons */}
      {buttonComponents.map((Btn, i) => {
        const animatedAngle = (angles[i] + angleOffset) % 360;
        const angleRad = (animatedAngle * Math.PI) / 180;
        const x = CIRCLE_RADIUS * Math.cos(angleRad);
        const y = CIRCLE_RADIUS * Math.sin(angleRad);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              transition: "None",
            }}
          >
            {Btn}
          </div>
        );
      })}
    </div>
  );
};

export default PrimarySix;
