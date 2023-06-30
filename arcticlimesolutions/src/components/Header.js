import React from 'react'
import "../css/header.min.css";
import { ReactComponent as Logo } from '../image/svg/arclime.svg';
import { ReactComponent as WhatsApp } from '../image/svg/whatsapp.svg';

const Header = () => {
  return (
    <>
      <div className="width">
        <header>
          <Logo />
          <ul>
            <li>
              <a href="https://api.whatsapp.com/send?phone=31617014448" title="Contact me through WhatsApp">
                <span>Contact ARCTIC LIME Solutions through WhatsApp.</span>
                <WhatsApp />
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header