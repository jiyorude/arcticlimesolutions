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
        </section>
        <section className="priceOne">
          <div className="rateheader">Prijs</div>
        </section>
        <section className="serviceTwo">
          <div className="rateheader">Description</div>
        </section>
        <section className="priceTwo">
          <div className="rateheader">Price</div>
        </section>
      </main>
    </motion.main>
  );
}

export default RatesContent