import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">22,368.00</p>
          <p className="percent">+0.42%</p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">73,852.94</p>
          <p className="percent">+0.35%</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;