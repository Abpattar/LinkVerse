import React from "react";
import ProfileIcon from "../Buttons&Icons/ProfileIcon";
import NotificationIcon from "../Buttons&Icons/NotificationIcon";
import MessageIcon from "../Buttons&Icons/MessegeIcon";

// Renders the 3 top-right icons together so App can import once
const TopIcons: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "32px",
        right: "80px",
        display: "flex",
        alignItems: "center",
        gap: "160px",
        zIndex: 999,
      }}
    >
      {/* Order: Message, Notification, Profile (rightmost) */}
      <MessageIcon />
      <NotificationIcon />
      <ProfileIcon />
    </div>
  );
};

export default TopIcons;
