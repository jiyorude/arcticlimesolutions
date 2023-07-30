import React from "react";
import { useState } from "react";
import "../css/footeralt.min.css";
import { Outlet, Link } from "react-router-dom";
import routerurls from "../database/urls.json";
import { motion } from "framer-motion";

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
      <motion.footer className="footerAlt" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}>
        <Link to={getURL()} style={{ textDecoration: "none" }}>
          <p
            className="footerAltTxt"
            style={{ color: home ? "#D0FF14" : "#FAFAFA" }}
            onMouseEnter={handleReturn}
            onMouseLeave={handleReturn}
          >
            BACK
          </p>
        </Link>
      </motion.footer>
      <Outlet />
    </>
  );

};

export default FooterAlt;
