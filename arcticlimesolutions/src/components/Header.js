import React from "react";
import "../css/header.min.css";
import { ReactComponent as Logo } from "../image/svg/arclime.svg";
import { ReactComponent as WhatsApp } from "../image/svg/whatsapp.svg";
import { ReactComponent as EMail } from "../image/svg/email.svg";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [hover, setHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);

  const handleHoverOver = () => {
    setHover(true);
  };

  const handleSecondHoverOver = () => {
    setSecondHover(true);
  };

  const handleHoverReturn = () => {
    setHover(false);
  };

  const handleSecondHoverReturn = () => {
    setSecondHover(false);
  }

  return (
    <>
      <motion.header
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo className="arclimelogo" />
        </Link>
        <ul>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=31617014448"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact me through WhatsApp"
            >
              <span>Contact ARCTIC LIME Solutions through WhatsApp.</span>
              <WhatsApp
                className="whatsappLogo"
                style={{ fill: hover ? "#BA1A50" : "#D0FF14" }}
                onMouseEnter={handleHoverOver}
                onMouseLeave={handleHoverReturn}
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:arcticlimesolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Send me an e-mail!"
            >
              <span>Contact ARCTIC LIME Solutions through e-mail.</span>
              <EMail
                className="emailLogo"
                style={{ stroke: secondHover ? "#BA1A50" : "#D0FF14" }}
                onMouseEnter={handleSecondHoverOver}
                onMouseLeave={handleSecondHoverReturn}
              />
            </a>
          </li>
        </ul>
      </motion.header>

      <Outlet />
    </>
  );
};

export default Header;
