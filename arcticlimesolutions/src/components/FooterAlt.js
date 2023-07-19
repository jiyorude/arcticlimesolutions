import React from "react";
import { useState } from "react";
import "../css/footeralt.min.css";
import { Outlet, Link } from "react-router-dom";
import routerurls from "../database/urls.json";

const FooterAlt = ({ selectedID }) => {
  const [home, setHome] = useState(false);
  
  const handleReturn = () => {
    setHome(!home);
  };

  const getURL = () => {
    const selectURL = routerurls.find((urlItem) => urlItem.id === selectedID);
    return selectURL ? selectURL.url : "/";
  };

  return (
    <>
      <footer className="footerAlt">
        <Link to={getURL()}  style={{ textDecoration: "none" }}>
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
