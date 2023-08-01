import React from 'react'
import "../css/prices.min.css";
import { motion } from "framer-motion";

const RatesContent = () => {
  return (
    <motion.main className="flowroot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="row">RATES AND PRICES</section>
      <section className="tax">
        Alle prijzen zijn, waar BTW van toepassing is, exclusief 21% BTW.<br></br>All prices are, where VAT is
        appliccable, excluding 21% VAT.
      </section>
      <main className="pricescontainer">
        <section className="serviceOne">
          <div className="rateheader">Omschrijving</div>
          <section className="whitespace"></section>
          <div className="servdescr">Uurtarief</div>
          <div className="servextra">
            Dit uurtarief geldt voor alle standaard werkzaamheden en activiteiten, zoals: montage, programmeren,
            audio-nabewerking, color-grading, visual effects en animatie.
          </div>
          <div className="servextra">
            Dit uurtarief is inclusief een 'standaard delivery' van uw bestanden in bijvoorbeeld mp4, wav, mov of pdf.
            Alle bestandsformaten die binnen het 'standaard delivery protocol' vallen zijn als volgt:{" "}
          </div>
          <div className="servextra bold">Video: MP4, MOV (APR4444XQ), GIF (1-2 seconden), JPG Sequentie</div>
          <div className="servextra bold">Audio: WAV, MP3, AIFF in Web (-14LUFS) of TV (-23LUFS) Mix. Stereo</div>
        </section>
        <section className="priceOne">
          <div className="rateheader right">Prijs</div>
          <section className="whitespace"></section>
          <div className="servprice">€ 45,00</div>
        </section>
        <section className="serviceTwo">
          <div className="rateheader">Description</div>
          <section className="whitespace"></section>
          <div className="servdescr">Hourly Rate</div>
        </section>
        <section className="priceTwo">
          <div className="rateheader right">Price</div>
          <section className="whitespace"></section>
          <div className="servprice">€ 45,00</div>
        </section>
      </main>
    </motion.main>
  );
}

export default RatesContent