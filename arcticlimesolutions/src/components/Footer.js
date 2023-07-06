import React from 'react'
import "../css/footer.min.css";
import { useState } from "react";

const Footer = () => {
  const [privHover, setPrivHover] = useState(false);
  const [termHover, setTermHover] = useState(false);
  const date = new Date();
  const year = date.getFullYear();

  const handlePrivHover = () => {
    setPrivHover(true);
  };

  const returnPrivHover = () => {
    setPrivHover(false);
  };

  const handleTermHover = () => {
    setTermHover(true);
  };

  const returnTermHover = () => {
    setTermHover(false);
  };


  return (
    <>
    <section className="footerblock">
      <div className="newsticker">HERE IS GOING TO BE THE NEWSTICKER</div>
    
    {/*Copyright plus company info. KVK number and BTW number HERE */}
      <div className="arcinfo">
        <div className="info">
          <div className="copy">
          <h3>&copy; ARCTIC LIME Solutions {year}</h3>
          </div>
          <h5>Kamer van Koophandel / Chamber of Commerce:</h5>
          <h6>85701319</h6>
          <h5>BTW Nummer / VAT Number:</h5>
          <h6>NL004134441B80</h6>
        </div>
      </div>
      
      <div className="privterms">
        <div className="btncontainer">
          <ul>
            <li><h2 style={{color: privHover ? "#D0FF14" : "#FAFAFA"}} 
            onMouseEnter={handlePrivHover}
            onMouseLeave={returnPrivHover} title="Learn more about how your data is processed">PRIVACY STATEMENT</h2>
            <span>Click here to read ARCTIC LIME's Privacy Statement</span></li>
            <li><h2 style={{color: termHover ? "#D0FF14" : "#FAFAFA"}}
            onMouseEnter={handleTermHover}
            onMouseLeave={returnTermHover} title="Click here for the Terms and Conditions">TERMS AND CONDITIONS</h2>
            <span>Click here to read ARCTIC LIME's general Terms and Conditions</span></li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
// Footer with copyright that changes upon the year, plus news ticker.
export default Footer