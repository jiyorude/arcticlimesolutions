import React from "react";
import { useState } from "react";
import "../css/footeralt.min.css";
import { Outlet, Link } from "react-router-dom";

const FooterAlt = () => {
  const [home, setHome] = useState(false);

  const handleReturn = () => {
    setHome(!home);
  };

  return (
    <>
      <footer className="footerAlt">
        <Link to={"/"} style={{ textDecoration: "none" }}>
        <p
          className="footerAltTxt"
          style={{ color: home ? "#D0FF14" : "#FAFAFA" }}
          onMouseEnter={handleReturn}
          onMouseLeave={handleReturn}
        >
          BACK
        </p>
        </Link>
      </footer>
      <Outlet />
    </>
  );

};

export default FooterAlt;
