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
      <section className="tax">
        Op alle prijzen, bedrijfsactiviteiten, opdrachten, offertes, facturen, orders, werk en overeenkomsten van ARCTIC
        LIME Solutions <br></br>zijn algemene leveringsvoorwaarden van toepassing. Deze zijn in te zien op de homepage
        en zijn beschikbaar in het Nederlands en Engels.<br></br>
        <br></br>
        Terms and Conditions apply to all rates, activities, assignments, quotations, invoices, orders, work and agreements
        made<br></br> with and by ARCTIC LIME Solutions. These conditions can be found on the homepage and are available in both
        Dutch and English.
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
              Dit uurtarief geldt op de meeste video en vrijwel alle web/software development werkzaamheden.<br></br>
              This hourly rate applies to most video- and practically all web/software development activities.
            </div>
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
            <div className="servextra">
              TIFF, Targa, PNG, DPX of/or EXR. Indien gewenst met Alpha Kanalen. Alpha Channels included upon request.
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Ander bestandsformaat / Different File Format</div>
            <div className="servprice right">€ 5,00 per minuut film / per minute of film</div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              IMF, Broadcast MXF en DCP uitgesloten. IMF, Broadcast MXF, and DCP files are excluded.
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Uitzendkopie / Broadcast MXF</div>
            <div className="servprice right">€ 80,00</div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              Broadcast MXF, XML metadata plus delivery bij één zender/delivery to a single network. ITU-R BS.1770-4
              of/or EBU R128.
            </div>
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
            <div className="servprice right">
              € 75,00 basistarief/base rate + € 10,00 per 10 minuten film / per 10 minutes film
            </div>
          </div>
          <div className="spanrow">
            <div className="servdescr">DCP / Cinema 2K - 60 min tot/till 120 min</div>
            <div className="servprice right">€ 150,00 + Uurtarief/Hourly Rate</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">DCP / Cinema 2K - 121 min of langer / or longer</div>
            <div className="servprice right">€ 250,00 + Uurtarief/Hourly rate + € 3,00 per extra film min.</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">DCP / Cinema 4K - 1 min tot/till 59 min</div>
            <div className="servprice right">
              € 130,00 basistarief/base rate + € 15,00 per 10 minuten / per 10 minutes
            </div>
          </div>
          <div className="spanrow">
            <div className="servdescr">DCP / Cinema 4K - 60 min tot/till 120 min</div>
            <div className="servprice right">€ 250,00 + Uurtarief/Hourly Rate</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">DCP / Cinema 4K - 121 min of langer / or longer</div>
            <div className="servprice right">€ 350,00 + Uurtarief/Hourly rate + € 5,00 per extra film min</div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              U dient uw master-bestanden als een 2K of 4K Master bestand aan te leveren met een Flat of Scope
              resolutie. <br></br>Vergeet niet uw losse 5.1/7.1 audiolagen mee te sturen! Hulp nodig met aanleveren?
              Geen probleem!
            </div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              You are supposed to deliver your master-files as a 2K/4K Master file with either a Flat or Scope
              resolution. <br></br>Don't forget to provide your separate 5.1/7.1 audio layers! Need any help with
              delivering the files to us? No problem!
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servextra">
              U kunt de master files digitaal aan ARCTIC LIME aanleveren, of per post/koerier via een harde schijf.
            </div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              You can deliver your master files digitally to ARCTIC LIME, or on a Hard Drive through courier/post.
            </div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              De DCP kan digitaal of op een externe harde schijf worden aangeboden. Als u een externe harde schijf heeft
              opgestuurd, dan zal de DCP op dezelfde schijf worden opgeslagen<br></br>nadat de schijf is
              geherformatteerd naar EXT2/EXT3. Oude bestanden op de schijf zullen dan verloren gaan. <br></br>De DCP kan
              ook op een nieuwe harde schijf worden opgeslagen. Zie kosten hieronder voor schijven en verzenden.
            </div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              DCP's can be delivered digitally or on a external Hard Drive. If you shipped a Hard Drive to ARCTIC LIME
              Solutions then the same Drive will be used to save the DCP on<br></br>after the drive is reformatted to
              EXT2/EXT3. Existing files on the drive will be irreversibly lost. <br></br>DCP's may be saved on a new
              external Hard Drive if desired. See below for Hard Drive and shipping costs.
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Nieuwe Harde Schijf / New Hard Drive</div>
            <div className="servprice right">€ 110,00</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Verzendkosten / Shipping Costs - Enkel / One Way</div>
            <div className="servprice right">€ 10,00</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Verzendkosten / Shipping Costs - Retour / Back and Forth</div>
            <div className="servprice right">€ 15,00</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Koerierskosten / Courier Costs</div>
            <div className="servprice right">Op Aanvraag / Upon Request</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Verzendkosten buiten Nederland / Shipping to destinations outside of the Netherlands</div>
            <div className="servprice right">Op Aanvraag / Upon Request</div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              De zending zal, waar mogelijk, bij voorkeur altijd aangetekend en verzekerd verstuurd worden.
            </div>
          </div>
          <div className="spanrow">
            <div className="servextra">
              Shipments will preferably (and if possible) be shipped with track and trace, registration and with insurance.
            </div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">DVD/Blu-Ray Authoring</div>
            <div className="servprice right">Op Aanvraag / Upon Request</div>
          </div>
          <div className="spanrow">
            <div className="servextra">DVD/Blu-Ray Menu, Inlay, Design, Authoring, Burning/Branden. Elke oplage mogelijk / Every quantity possible.</div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Upscaling SD naar/to Full HD</div>
            <div className="servprice right">Uurtarief / Hourly Rate</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Upscaling Full HD naar/to 2K/4K</div>
            <div className="servprice right">€ 10,00 per video + Uurtarief / Hourly Rate</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Upscaling 2K/4K naar hogere resoluties / to higher resolutions</div>
            <div className="servprice right">Op Aanvraag + Uurtarief / Upon Request + Hourly Rate</div>
          </div>
          <section className="spanrow"></section>
          <div className="spanrow">
            <div className="servdescr">Digitalisatie/Digitization Mini DV tape (60-90min)</div>
            <div className="servprice right">€ 12,50 per bandje / per tape</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Digitalisatie/Digitization 35mm neg.</div>
            <div className="servprice right">€ 0,50 per negatief / per negative</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Digitalisatie/Digitization Foto's / Photo's</div>
            <div className="servprice right">€ 0,25 per foto / per photograph</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Digitalisatie/Digitization VHS banden / tapes (max 120 min)</div>
            <div className="servprice right">€ 15,00 per band / per tape</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Digitalisatie/Digitization VHS banden / tapes (180 of/or 240 min)</div>
            <div className="servprice right">€ 25,00 per band / per tape</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Montage/Editing DV/VHS</div>
            <div className="servprice right">Uurtarief / Hourly Rate</div>
          </div>
          <div className="spanrow">
            <div className="servdescr">Bewerken van negatieven of foto's / Editing negatives or photo's</div>
            <div className="servprice right">Uurtarief / Hourly Rate</div>
          </div>
          <div className="spanrow">
            <div className="servextra">Lege banden worden niet in rekening gebracht. Uw bestanden worden standaard digitaal opgestuurd. Kopie op USB Stick of Harde Schijf en kunnen worden verzonden op aanvraag.</div>
          </div>
          <div className="spanrow">
            <div className="servextra">You won't be charged for empty tapes. Your files will be sent to you digitally by default. Files can be copied to USB Sticks or Hard Drives and shipped upon request.</div>
          </div>
          <section className="spanrow"></section>
          <section className="spanrow"></section>
        </section>
      </main>
    </motion.main>
  );
}

export default RatesContent