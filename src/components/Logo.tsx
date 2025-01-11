import React from "react";
import "../styles/Logo.css";
import logoPic from "../assets/images/TEDOOOLOGO.png";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logoPic} alt="tedooo-logo" />
      <div class="search-bar">
        <input placeholder="search" type="text" />
      </div>
    </div>
  );
};

export default Logo;
