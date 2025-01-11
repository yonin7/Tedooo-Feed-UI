import React from "react";
import "../styles/Navigation.css";

import HomePic from "../assets/images/HomePic.tsx";
import BellPic from "../assets/images/BellPic.tsx";
import MessagePic from "../assets/images/MessagePic.tsx";
import userPic from "../assets/images/user.png";

const Navigation: React.FC = () => {
  const linkToggle = () => {};
  return (
    <nav className="navigation-container">
      <button className="active" onClick={linkToggle}>
        <HomePic />
        <span>Home</span>
      </button>
      <button onClick={linkToggle}>
        <MessagePic />
        Messaging
      </button>
      <button onClick={linkToggle}>
        <BellPic />
        Notifications
      </button>
      <img src={userPic} alt="user-image" />
    </nav>
  );
};

export default Navigation;
