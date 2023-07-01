import React from "react";
import "../css/header.min.css";
import { ReactComponent as Logo } from "../image/svg/arclime.svg";
import { ReactComponent as WhatsApp } from "../image/svg/whatsapp.svg";
import { ReactComponent as EMail } from "../image/svg/email.svg";
import { useState } from "react";

const Header = () => {
  const [hover, setHover] = useState(false);

  const handleHoverOver = () => {
    setHover(true);
  };

  const handleHoverReturn = () => {
    setHover(false);
  };

  return (
    <>
      <header>
        <Logo className="arclimelogo" />
        <ul>
          <li>
            <a href="https://api.whatsapp.com/send?phone=31617014448" title="Contact me through WhatsApp">
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
            <a href="mailto:arcticlimesolutions@gmail.com" title="Send me an e-mail!">
              <span>Contact ARCTIC LIME Solutions through e-mail.</span>
              <EMail className="emailLogo" 
              style={{ color: hover ? "#BA1A50" : "#D0FF14" }}
              onMouseEnter={handleHoverOver}
              onMouseLeave={handleHoverReturn} 
            />
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
