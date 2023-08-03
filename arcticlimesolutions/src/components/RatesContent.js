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
        <section className="pricesflex">
          <div className="spanrow">
            <div className="rateheader">Omschrijving / Description</div>
            <div className="rateheader right">Prijzen / Rates</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Uurtarief / Hourly Rate</div>
            <div className="servprice right">€ 45,00</div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              Inclusief delivery van uw bestanden in de volgende bestandsformaten / Including delivery of your files in
              the following file formats: <br></br>MP4, MOV,GIF, JPG, WAV (-14/-23LUFS, Stereo), MP3, AIFF, PDF, JPG,
              PNG, GIF, MOV incl. Alpha kanalen/channels, PNG incl. Alpha kanalen/channels or/of SRT
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Transportbestanden / Transport Files</div>
            <div className="servprice right">€ 10,00 per bestand / per file</div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              Zoals, maar niet gelimiteerd tot / Such as, but not limited to: .omf, .xml, .edl, .cdl, .aal.
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Open bestanden / Project files</div>
            <div className="servprice right">Op Aanvraag / Upon Request</div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              Alleen verstrekt na schriftelijke overeenkomst. Only supplied after mutual written agreement.
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Film/Animation naar/to Image Sequence</div>
            <div className="servprice right">€ 5,00 per minuut film / per minute of film</div>
          </div>
          <div className="spanrow">
            <div className="servextra">TIFF, Targa, PNG, DPX of/or EXR</div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr"> Motion Graphic naar/to Image Sequence</div>
            <div className="servprice right">€ 2,50 per 30 seconden film / per 30 seconds of film</div>
          </div>
          <div className="spanrow">
            <div className="servextra">TIFF, Targa, PNG, DPX of/or EXR. Indien gewenst met Alpha Kanalen. Alpha Channels included upon request.</div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Encoderen in een ander bestandsformaat / Encode to different codec</div>
            <div className="servprice right">€ 5,00 per minuut film / per minute of film</div>
          </div>
          <div className="spanrow">
            <div className="servextra">IMF, Broadcast MXF en DCP uitgesloten. IMF, Broadcast MXF, and DCP files are excluded.</div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Uitzendkopie (Broadcast MXF, XML metadata plus delivery bij één zender/delivery to a single network) </div>
            <div className="servprice right">€ 80,00</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Volgkopie / Sequential copies</div>
            <div className="servprice right">€ 20,00</div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">IMF Package</div>
            <div className="servprice right">Op Aanvraag + Uurtarief / Upon Request + Hourly Rate</div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">DCP / Cinema 2K - 1 min tot/till 59 min</div>
            <div className="servprice right">€ 75,00 basistarief/base rate + € 20,00 per 10 minuten / per 10 minutes</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">DCP / Cinema 2K - 60 min tot/till 120 min</div>
            <div className="servprice right">€ 275,00 + Uurtarief/Hourly Rate</div>
          </div>
        </section>
      </main>
    </motion.main>
  );
}

export default RatesContent