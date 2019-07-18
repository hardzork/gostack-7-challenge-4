import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <div>
          <img
            className="logo"
            src="https://i.imgur.com/KDIDiSE.png"
            alt="logo"
          />
          <img
            className="logo2"
            src="https://marketplace-cdn.atlassian.com/files/images/d5060124-f7a7-48ee-b854-15318a11a059.png"
            alt="logoClone"
          />
          {/* <i className="headerText">Clone</i> */}
        </div>
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    </div>
  );
}

export default Header;
