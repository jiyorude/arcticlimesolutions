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
        <div className="newsticker">
          <div className="ticker-wrap">
            <div className="ticker">
              <div className="text">
                Video Editing&emsp; Video Production&emsp; Audio Mixing (Web/R128)&emsp; Delivery (Web/TV)&emsp; 2D
                Animation&emsp; Motion Graphics&emsp; Subtitling and Translation&emsp; Color Grading&emsp; Graphic
                Design&emsp; Web Development&emsp; UX/UI Design&ensp; 
              </div>
            </div>
            <div className="ticker2">
              <div className="text">
                Video Editing&emsp; Video Production&emsp; Audio Mixing (Web/R128)&emsp; Delivery (Web/TV)&emsp; 2D
                Animation&emsp; Motion Graphics&emsp; Subtitling and Translation&emsp; Color Grading&emsp; Graphic
                Design&emsp; Web Development&emsp; UX/UI Design&ensp;
              </div>
            </div>
          </div>
        </div>
        <div className="arcinfo">
          <div className="info">
            <div className="copy">
              <h3>&copy; ARCTIC LIME SOLUTIONS {year}</h3>
            </div>
            <div className="coc">
              <h5>KVK/COC: 85701319</h5>
            </div>
            <div className="vat">
              <h5>BTW/VAT: NL004134441B80</h5>
            </div>
          </div>
        </div>
        <div className="privterms">
          <div className="btncontainer">
            <ul>
              <li className='privlist'>
                <h2
                  style={{ color: privHover ? "#D0FF14" : "#FAFAFA" }}
                  onMouseEnter={handlePrivHover}
                  onMouseLeave={returnPrivHover}
                  title="Learn more about how your data is processed"
                >
                  PRIVACY STATEMENT
                </h2>
                <span>Click here to read ARCTIC LIME's Privacy Statement</span>
              </li>
              <li className='privlist'>
                <h2
                  style={{ color: termHover ? "#D0FF14" : "#FAFAFA" }}
                  onMouseEnter={handleTermHover}
                  onMouseLeave={returnTermHover}
                  title="Click here for the Terms and Conditions"
                >
                  TERMS AND CONDITIONS
                </h2>
                <span>Click here to read ARCTIC LIME's general Terms and Conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer