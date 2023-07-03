import React from 'react'
import "../css/footer.min.css";

const Footer = () => {
  // will have to be implemented later in arcinfo.
  /*const date = new Date();
  const year = date.getFullYear();*/
  return (
    <>
    <section className="footerblock">
      <div className="newsticker">HERE IS GOING TO BE THE NEWSTICKER</div>
      <div className="arcinfo">HERE IS GOING TO BE COMPANY INFO, COPYRIGHT, KVK ETC.</div>
      <div className="privterms">HERE IS GOING TO BE BUTTONS TO PRIVACY AND TERMS OF CONDITIONS</div>
    </section>
    </>
  )
}
// Footer with copyright that changes upon the year, plus news ticker.
export default Footer