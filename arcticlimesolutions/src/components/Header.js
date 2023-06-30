import React from 'react'
import "../css/header.min.css";
import { ReactComponent as Logo } from '../image/svg/arclime.svg';

const Header = () => {
  return (
    <>
      <header>
          <Logo />
      </header>
    </>
  );
}

export default Header