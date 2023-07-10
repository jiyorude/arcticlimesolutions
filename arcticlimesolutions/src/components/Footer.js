import React from "react";
import "../css/footer.min.css";
import { useState } from "react";
import { ReactComponent as FlagNL } from "../image/svg/flag_nl.svg";
import { ReactComponent as FlagUSA } from "../image/svg/flag_us.svg";

const Footer = () => {
  const [privHover, setPrivHover] = useState(false);
  const [termHover, setTermHover] = useState(false);
  const [terms, setTerms] = useState(false);
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

  const openTerms = () => {
    setTerms(true);
  };

  const closeTerms = () => {
    setTerms(false);
  };

  return (
    <>
      <footer className="footerblock">
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
              <li className="privlist">
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
              <li className="privlist">
                <h2
                  style={{ color: termHover ? "#D0FF14" : "#FAFAFA" }}
                  onMouseEnter={handleTermHover}
                  onMouseLeave={returnTermHover}
                  onClick={openTerms}
                  title="Click here for the Terms and Conditions"
                >
                  TERMS AND CONDITIONS
                </h2>
                <span>Click here to read ARCTIC LIME's general Terms and Conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {terms && (
        <>
          <div className="terms">
            <div className="termscontainer">
              <div className="language">
                <a href="#dutchheader" title="Click here for Dutch Terms and Conditions">
                  <span>Click here to read the Terms and Conditions in Dutch.</span>
                  <FlagNL className="flag" />
                </a>
                <a href="https://" title="Click here for English Terms and Conditions">
                  <span>Click here to read the Terms and Conditions in English.</span>
                  <FlagUSA className="flag" />
                </a>
              </div>
              <section className="termcontent" onClick={closeTerms}>
                <p id="dutchheader">ALGEMENE LEVERINGSVOORWAARDEN</p>
                <p className="date standard"><em>Ingaande per 10-07-2023</em></p>
                <p className="disclaimer standard">
                  Deze algemene leveringsvoorwaarden zijn van kracht op alle offertes, aanbiedingen, werkzaamheden en
                  overeenkomsten van opdrachtnemer, tenzij er door opdrachtnemer en opdrachtgever andere afspraken
                  schriftelijk zijn vastgelegd.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 1<br></br>Definities
                </p>
                <p className="textheader bold">1.1 Opdrachtgever</p>
                <p className="text standard">
                  Een natuurlijk persoon, instantie of bedrijf dat tegen betaling diensten wenst af te nemen van
                  opdrachtnemer.
                </p>
                <p className="textheader bold">1.2 Opdrachtnemer</p>
                <p className="text standard">ARCTIC LIME Solutions, een eenmanszaak met standplaats Amsterdam</p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 2<br></br>Identiteit
                </p>
                <p className="textheader bold">2.1 Identiteit</p>
                <p className="text standard">
                  Dhr J. Veenstra, handelend onder de naam ARCTIC LIME Solutions via deze website; hierna vermeld in dit
                  document als 'opdrachtnemer'
                </p>
                <p className="textheader bold">2.2 Bereikbaarheid</p>
                <p className="text standard">
                  Opdrachtnemer is 24 uur per dag, 7 dagen per week bereikbaar via <a href="https://api.whatsapp.com/send?phone=31617014448">WhatsApp</a> en e-mail op het adres{" "}
                  <a href="mailto:arcticlimesolutions@gmail.com">arcticlimesolutions@gmail.com</a>. Opdrachtnemer hanteert een standaard reactietijd van 1 - 24 uur. Deze reactietijden zijn
                  onder voorbehoud van lopende projecten en beschikbaarheid van opdrachtnemer. Aan deze hanteringen omtrent de reactietijd kan geen enkel recht worden ontleend.
                  {" "}
                </p>
                <p className="textheader bold">2.3 KVK-nummer</p>
                <p className="text standard">Opdrachtnemer staat ingeschreven in de Kamer van Koophandel Amsterdam onder KVK-nummer: 85701319</p>
                <p className="textheader bold">2.4 BTW-nummer</p>
                <p className="text standard">Opdrachtnemer staat bekend bij de Belastingdienst onder het volgende BTW-nummer: NL004134441B80</p>
                <section className="whitespace"></section>
                <p className="section">Artikel 3<br></br>Toepasbaarheid</p>
                <p className="textheader bold">3.1 Toepasbaarheid van leveringsvoorwaarden</p>
                <p className="text standard">Deze algemene leveringsvoorwaarden zijn van kracht op alle offertes, aanbiedingen, werkzaamheden en overeenkomsten van opdrachtnemer;
                tenzij er door opdrachtnemer en opdrachtgever andere afspraken schriftelijk zijn vastgelegd en door beide partijen zijn ondertekend.</p>
                <p className="textheader bold">3.2 Beschikbaarheid en zichtbaarheid van leveringsvoorwaarden</p>
                <p className="text standard">De algemene leveringsvoorwaarden die ARCTIC LIME Solutions hanteert zijn ten allen tijden kosteloos in te zien op de website.
                Deze voorwaarden zijn beschikbaar in zowel het Nederlands als het Engels. Een verwijzing naar de algemene leveringsvoorwaarden is van toepassing op alle offertes van opdrachtnemer.</p>
                <p className="textheader bold">3.3 Afwijkingen van de algemene leveringsvoorwaarden</p>
                <p className="text standard">Afwijkingen van de algemene leveringsvoorwaarden zijn slechts geldig wanneer deze schriftelijk overeen zijn gekomen tussen opdrachtgever en opdrachtnemer.</p>
                <section className="whitespace"></section>
                <p className="section">Artikel 4<br></br>Aanbod</p>
                <p className="textheader bold">4.1 Geldigheid van offertes</p>
                <p className="text standard">Tenzij anders schriftelijk medegedeeld door opdrachtnemer zijn verstrekte offertes 14 dagen geldig, ingaande op de offertedatum. </p>
                <p className="textheader bold">4.2 Verstrijken geldigheidsduur offertes</p>
                <p className="text standard">Na het verstrijken van de geldigheid van een aanbod aan opdrachtgever zal het gedane aanbod komen te vervallen. Opdrachtnemer hoeft opdrachtgever hiervan niet
                op de hoogte te stellen. Het is niet mogelijk om enig recht te ontlenen aan informatie uit een verstreken offerte, zoals prijzen, werkzaamheden en/of genoten kortingen.</p>
                <p className="textheader bold">4.3 Vrijblijvendheid van offertes</p>
                <p className="text standard">Offertes zijn ten allen tijden geheel vrijblijvend. Opdrachtgever is in geen geval verplicht om diensten van opdrachtnemer af te nemen na ontvangst van zijn offerte.</p>
                <p className="textheader bold">4.4 Aanbodsverplichting</p>
                <p className="text standard">Opdrachtnemer behoud ten allen tijden het recht ervoor te kiezen om geen aanbod te doen aan opdrachtgever. Opdrachtnemer is niet verplicht om de reden mede te delen aan opdrachtgever.</p>
                <p className="textheader bold">4.5 Toepassing op opdrachten in de toekomst</p>
                <p className="text standard">Een gedane offerte is niet automatisch geldig voor een toekomstige opdracht. Dit geldt ook voor genoten kortingen uit het verleden.</p>
                <p className="textheader bold">4.6 Urenberekening</p>
                <p className="text standard">Opdrachtnemer stelt zijn offertes op gebaseerd op een inschatting van een urenberekening om de opdracht van opdrachtgever zo goed mogelijk uit te voeren.
                Opdrachtnemer doet dit in alle redelijkheid en naar zijn professionele inzicht. Extra werkzaamheden, diensten, digitale materialen, fysieke materialen en werkuren zijn niet meegerekend
                in deze offerte en worden toegevoegd op de eindfactuur.</p>
                <p className="textheader bold">4.7 Additionele kosten</p>
                <p className="text standard">Op de offertes zijn zogenoemde 'additionele kosten' niet meegerekend. Denk hierbij aan reiskosten, verblijfskosten, kosten die aan externe instanties
                dienen te worden betaald en ook door deze partijen worden vastgesteld, zoals betalingen voor auteursrechten aan BUMA-STEMRA of afkoopsommen voor stock-beelden. Deze worden altijd apart toegevoegd op de eindfactuur.
                Opdrachtnemer is gerechtigd om een voorbetaling voor deze kosten te verlangen van opdrachtgever wanneer opdrachtnemer deze zelf niet direct kan voldoen via een voorbetaling.</p>
                <p className="textheader bold">4.8 Prijzen</p>
                <p className="text standard">Prijzen staan vermeld op de prijslijst van ARCTIC LIME Solutions. Deze prijslijst kan kosteloos via WhatsApp of e-mail worden opgevraagd. Alle vermelde prijzen zijn, waar BTW van toepassing is, exclusief 21% BTW.
                </p>
                <section className="whitespace"></section>
                <p className="section">Artikel 5<br></br>De overeenkomst</p>
                <p className="textheader bold">5.1 De overeenkomst</p>
                <p className="text standard">Een overeenkomst tussen opdrachtgever en opdrachtnemer komt daadwerklijk en alleen tot stand wanneer opdrachtgever de opgestelde offerte aanvaardt.
                Opdrachtgever kan dit aan te tonen door de offerte schriftelijk of digitaal te ondertekenen en een scan hiervan terug te sturen aan opdrachtnemer.</p>
                <p className="textheader bold">5.2 Duur van overeenkomst</p>
                <p className="text standard">De overeenkomst wordt aangegaan voor bepaalde tijd, tenzij de aard van de opdracht dit weerspreekt of dit schriftelijk tussen opdrachtgever en opdrachtnemer is vastgesteld.</p>
                <p className="textheader bold">5.3 Wijziging van overeenkomst</p>
                <p className="text standard">Indien tijdens de uitvoering van de overeenkomst blijkt dat een wijziging van de overeenkomst noodzakelijk is voor een behoorlijke uitvoering van de opdracht zal opdrachtnemer
                de opdrachtgever hiervan tijdig op de hoogte stellen. Het is aan de opdrachtgever en opdrachtnemer om hier tijdig en in onderling overleg over te gaan tot aanpassing van de overeenkomst.</p>
                <p className="textheader bold">5.4 Uitvoering van de overeenkomst</p>
                <p className="text standard">Opdrachtnemer verklaart de overeenkomst naar zijn professioneel inzicht, kennis, beste vermogen en vakmanschap uit te voeren, zoals het hem zou mogen betamen als professional
                in de audiovisuele- en web development branche. Hij zal dit doen binnen de kaders van de opgestelde algemene leveringsvoorwaarden, het beschikbare tijdsbestek, de inhoud van de opgestelde offerte en de 'briefing' die is ontvangen door opdrachtgever.
                Opdrachtnemer kan echter niet instaan voor het bereiken van het beoogde resultaat van opdrachtgever.</p>
                <p className="textheader bold">5.5 Uitvoering van werkzaamheden door derden</p>
                <p className="text standard">Het is opdrachtnemer toegestaan om bepaalde werkzaamheden te laten verrichten door derden.</p>
                <p className="textheader bold">5.6 Aanlevering van benodigde materialen</p>
                <p className="text standard">Het is de verantwoordelijkheid van de opdrachtgever om ervoor te zorgen dat de juiste informatie, briefings, software, fysieke objecten, bestanden,
                activatiesleutels, downloadlinks of andere benodigde voorzieningen tijdig in bezit zijn van opdrachtnemer. Dit geldt ook voor voorzieningen waarvan de opdrachtgever
                hoort te weten dat deze noodzakelijk zijn voor het behoorlijk uitvoeren van de overeenkomst.</p>
                <p className="textheader bold">5.7 Niet tijdig aanleveren van benodigde materialen</p>
                <p className="text standard">Indien de benodigde materialen niet, niet tijdig of onbehoorlijk zijn aangeleverd door opdrachtgever, behoudt opdrachtnemer het recht op uitvoering van de
                overeenkomst op te schorten totdat opdrachtgever hieraan voldoet. Opdrachtnemer behoudt daarnaast het recht om de extra kosten die uit de vertraging voortvloeien volgens zijn gebruikelijke tarieven
                aan opdrachtgever in rekening te brengen, alsmede het recht om de overeenkomst eenzijdig en zonder tussenkomst van het Nederlands recht te ontbinden wanneer opdrachtgever geen behoorlijk tijdsbestek aan opdrachtnemer kan mededelen waarin
                hij wel aan zijn aanleveringsverantwoordelijkheid kan voldoen. De gemaakte kosten en uren die zijn gemaakt door opdrachtnemer tot aan het moment van eenzijdige ontbinding zullen via een eindfactuur alsnog aan opdrachtgever in rekening gebracht worden.</p>
                <p className="textheader bold">5.8 Uitvoering van de overeenkomst in fases</p>
                <p className="text standard">Opdrachtnemer heeft het recht om de overeenkomst in fases uit te voeren indien hij dit nodig acht. Indien dit het geval is, is opdrachtnemer gerechtigd
                om ook elk afzonderlijk uitgevoerd deel te factureren. Als de overeenkomst in fases wordt uitgevoerd heeft opdrachtnemer het recht om werkzaamheden die bij een volgende fase behoren
                op te schorten totdat de opdrachtgever de resultaten van de daaraan voorafgaande fases schriftelijk heeft goedgekeurd.</p>
                <section className="whitespace"></section>
                <p className="section">Artikel 6<br></br>Aansprakelijkheid</p>
                <p className="textheader bold">6.1 Uitvoeringsverplichting</p>
                <p className="text standard">De aansprakelijkheid van opdrachtnemer jegens opdrachtgever is beperkt tot nakoming van zijn contractuele verplichtingen die zijn vastgesteld
                in de overeenkomst en een zogeheten 'uitvoeringsverplichting' waarin opdrachtnemer zich naar zijn beste inzicht en kunnen zal inspannen om het overeengekomene uit te voeren.
                Opdrachtgever kan in geen enkel geval schadevergoedingen vorderen van opdrachtnemer anders dan het niet nakomen tot deze bedoelde verplichting.</p>
                <p className="textheader bold">6.2 Schade en schadevergoedingen</p>
                <p className="text standard">De aansprakelijkheid, voor welke schade dan ook, veroorzaakt door toerekenbare tekortkomingen van opdrachtnemer, wordt ten allen tijden beperkt tot het bedrag 
                van het honorarium dat opdrachtnemer voor zijn werkzaamheden in het kader van de opdracht heeft ontvangen of zou ontvangen.</p>
                <p className="textheader bold">6.3 Indirecte schade</p>
                <p className="text standard">Opdrachtnemer is niet verantwoordelijk voor indirecte schade van opdrachtgever, zoals, maar niet gelimiteerd tot: gevolgschade, omzetderving, gemiste besparingen,
                bedrijfsstagnatie of immateriële schade.</p>
                <p className="textheader bold">6.4 Aansprakelijkheidstermijn</p>
                <p className="text standard">Indien opdrachtnemer aansprakelijk is aan schade, dan dient de opdrachtgever deze binnen tien dagen na het voorval schriftelijk aan opdrachtnemer te melden.
                De aansprakelijkheid van opdrachtnemer vervalt onherroepelijk na deze termijn.</p>
                <p className="textheader bold">6.5 Vrijwaring van derden</p>
                <p className="text standard">Opdrachtgever dient opdrachtnemer schadeloos te houden en vrij te waren van claims van derden die dan wel direct en/of indrect verband houden
                met de werkzaamheden van opdrachtnemer voor opdrachtgever. Wanneer opdrachtnemer door een derde wordt aangesproken is opdrachtgever geacht opdrachtnemer zowel buiten als bij rechte bij te staan.
                Alle gemaakte kosten en schade aan de kant van opdrachtnemer en zijn derden komen verder voor rekening en risico van opdrachtgever.</p>
                <p className="textheader bold">6.6 Overdrachtsrisico</p>
                <p className="text standard">Zaken die voorwerp van de overeenkomst zijn, zijn tot de digitale of fysieke overdracht en tot het moment van beschikbaar stellen aan opdrachtgever voor rekening
                en risico voor opdrachtnemer. Het risico van verlies, beschadiging, waardevermindering die onderdeel van overeenkomst zijn gaan op het moment van overdracht over op opdrachtgever.</p>
                <p className="textheader bold">6.7 Geheimhoudingsplicht</p>
                <p className="text standard">Opdrachtnemer verklaart alle informatie en bestanden die het van opdrachtgever ontvangt zorgvuldig bewaren onder een geheimhoudingsplicht, en om daarnaast de belangen van opdrachtgever te beschermen, tenzij opdrachtnemer
                op grond der wet, een gedragscode of een beroepscode verplicht is deze informatie te delen met derden.</p>
                <p className="textheader bold">6.8 Transport</p>
                <p className="text standard">Opdrachtnemer kan niet aansprakelijk worden gesteld voor beschadigingen of het kwijtraken van zaken zoals fysieke dragers, digitale bestanden of andere fysieke producten of objecten
                tijdens vervoer of verzending per koeriersdienst of post. Dit maakt niet uit of de verzending is gericht aan, of verzonden door opdrachtgever, opdrachtnemer of derden.</p>
                <section className="whitespace"></section>
                <p className="section">Artikel 7<br></br>Levering</p>
                <p className="textheader bold">7.1 Levering</p>
                <p className="text standard">Levering vindt plaats doordat de zaak digitaal, of via fysieke drager ter beschikking wordt gesteld aan opdrachtgever. Na deze levering gaat het risico, zoals beschreven in artikel 6.6, over op opdrachtgever.
              </p>
                <p className="textheader bold">7.2 Plaats van levering</p>
                <p className="text standard">Levering vindt plaats op de door opdrachtnemer aangegeven wijze, tenzij anders overeengekomen.</p>
                <p className="textheader bold">7.3 Verzendkosten van levering</p>
                <p className="text standard">Indien er verzendkosten verschuldigd zijn voor definitieve levering van de zaak, zoals het versturen van fysieke gegevensdragers met bestanden, dan worden deze op de offerte weergegeven.
                Indien tijdens de uitvoering van de overeenkomst deze verzendkosten ter sprake komen, dan worden deze kosten toegevoegd op de eindfactuur.</p>
                <p className="textheader bold">7.4 Leveringstermijnen</p>
                <p className="text standard">De leveringstermijn van de zaak en gerelateerde werkzaamheden zullen worden uitgevoerd door een door opdrachtnemer opgegeven termijn. Leveringstermijnen die schriftelijk of
                per offerte worden medegedeeld aan opdrachtgever zijn indicatief en kunnen niet worden beschouwd als een 'final deadline', of een zogeheten 'fatale termijn'.</p>
                <p className="textheader bold">7.5 Definitieve Deadline</p>
                <p className="text standard">Bij overschrijding van de leverings of uitvoeringstermijn dient opdrachtgever de opdrachtnemer schriftelijk in gebreke te stellen. Hierbij dient hij opdrachtnemer alsnog een redelijke termijn te bieden om de zaak
                aan te leveren of om tot uitvoering te gaan van de overeenkomst.</p>
                <p className="textheader bold">7.6 Standaard Delivery Protocol voor video bestanden</p>
                <p className="text standard">Opdrachtnemer hanteert een zogenoemd Standaard Delivery Protocol van het aanleveren van videobestanden aan de opdrachtgever. Het opleveren van deze bestanden in de volgende bestandsformaten
                zijn inbegrepen in de prijs van de offerte:</p>
                <p className="text standard">Video: MP4, MOV (APR4444XQ), GIF</p>
                <p className="text standard">Audio: WAV, MP3, AIFF (-14LUFS, -16LUFS of -23LUFS) - Stereo </p>
                <p className="text standard">Tekst/Print: PDF</p>
                <p className="text standard">Fotografie: JPG, PNG</p>
                <p className="text standard">Motion Graphics: MOV (APR4444XQ plus alpha kanalen), GIF</p>
                <p className="text standard">Wanneer opdrachtgever een zaak in een bestandsformaat of codec wenst te ontvangen die niet staat beschreven in het standaard delivery protocol,
                dan kan hij dit bij opdrachtnemer voorleggen. Opdrachtnemer is gerechtigd om hier, in lijn met zijn prijslijst, kosten voor in rekening te brengen.</p>
                <p className="textheader bold">7.7 Bestandsformaten buiten het Standaard Delivery Protocol</p>
                <p className="text standard">Voor het opleveren van bestandsformaten buiten het Standaard Delivery Protocol van opdrachtnemer en het aanleveren van bestanden voor platforms zoals
                bioscopen, streaming services, televisiestations en drukkers is opdrachtnemer gerechtigd extra kosten in rekening te brengen welke vermeld staan op zijn prijslijst.</p>
                <p className="text standard">Denk hierbij aan het aanleveren (maar niet gelimiteerd tot) in de volgende formaten: DPX, Broadcast MXF, IMF, DCP, Uncompressed Quicktime, TARGA, TIFF,
                EXR, DNXHD, en 5.1/7.1 audio mixen.</p>
                <p className="textheader bold">7.8 Transportbestanden</p>
                <p className="text standard">Tenzij anders overeengekomen tussen opdrachtgever en opdrachtnemer zal opdrachtnemer geen zogeheten 'transportbestanden' en/of open bestanden
                uitleveren aan opdrachtgever, zoals (maar niet gelimiteerd tot) .pproj, .aep, .psd, .omf, .xml, .edl, .cdl en .aal bestanden</p>
                <section className="whitespace"></section>
                <p className="section">Artikel 8<br></br>Prijzen</p>
                <p className="textheader bold">8.1 Prijzen</p>
                <p className="text standard">Het honorarium van opdrachtnemer is gebaseerd op de tarieven die staan vermeld op zijn prijslijst en hangen niet af van project basis.</p>
                <p className="textheader bold">8.2 Prijswijzigingen</p>
                <p className="text standard">Wanneer opdrachtnemer bij het sluiten van de overeenkomst een vast honorarium, prijs of tarief overeenkomt, dan is opdrachtnemer gerechtigd tot verhoging hiervan,
                ook wanneer het honorarium, prijs of tarief oorspronkelijk niet onder voorbehoud is gegeven. Indien opdrachtnemer het voornemen heeft het honorarium, de prijs of het tarief te wijzigen, dan stelt deze opdrachtgever
                hiervan zo spoedig mogelijk schriftelijk op de hoogte.</p>
                <p className="text standard">Indien de verhoging van het honorarium, prijs of het tarief binnen 3 maanden na het sluiten van de overeenkomst plaatsvindt, kan opdrachtgever de overeenkomst door een schriftelijke verklaring ontbinden, tenzij:</p>
                <p className="text standard">de verhoging voortvloeit uit een bevoegdheid of een op opdrachtnemer rustende verplichting ingevolge de wet;</p>
                <p className="text standard">de verhoging oorzaak vindt in een stijging van de prijs van grondstoffen, lonen of op andere gronden die bij het aangaan van de overeenkomst niet redelijkerwijs voorzienbaar waren;</p>
                <p className="text standard">opdrachtnemer alsnog bereid is om de overeenkomst op basis van het oorspronkelijk overeengekomen tarief, honorarium of prijs uit te voeren;</p>
                <p className="text standard">het is overeengekomen tussen opdrachtnemer dat de uitvoering langer dan drie maanden na het sluiten van de overeenkomst nog steeds zal worden verricht.</p>
                <p className="text standard">De opdrachtgever heeft recht op ontbinding van de overeenkomst als meer dan drie maanden na het sluiten van de overeenkomst het honorarium, prijs of het tarief wordt verhoogd, tenzij bij de overeenkomst
                overeengekomen is dat de uitvoering langer dan drie maanden na het sluiten van de overeenkomst zal worden verricht.</p>
                <p className="text standard">Opdrachtnemer zal opdrachtgever in het geval van het verhogen van de prijzen en/of honorarium deze zo spoedig mogelijk in kennis stellen. Opdrachtnemer geeft hierbij ook een datum aan wanneer deze nieuwe prijzen van kracht zullen zijn.</p>
                <p className="textheader bold">8.3 Valuta</p>
                <p className="text standard">Prijzen zijn nadrukkelijk uitgedrukt in euro, exclusief BTW en andere heffingen, tenzij nadrukkelijk anders aangegeven. Prijzen zijn ook exclusief additionele kosten, welke staan beschreven in artikel 4.7.</p>
                <section className="whitespace"></section>
                <p className="section">Artikel 9<br></br>Betaling</p>
                <p className="textheader bold">9.1 Betalingstermijn</p>
               <p className="text standard">De betaling dient binnen 14 dagen na factuurdatum te geschieden op het door opdrachtnemer verstrekte IBAN nummer onder vermelding van het factuurnummer.</p>
               <p className="textheader bold">9.2 Verlopen betalingstermijn</p>
               <p className="text standard">Na het verlopen van de betalingstermijn wordt de wettelijke rente in rekening gebracht bij opdrachtgever, zonder dat hiervoor een ingebrekestelling nodig is van
               opdrachtnemer.</p>
               <p className="textheader bold">9.3 Niet nakomen betalingsverplichting</p>
               <p className="text standard">Wanneer opdrachtgever de betalingsverplichting niet nakomt, behoud opdrachtnemer ten allen tijden het recht om alle gerechtelijke, buitengerechtelijke en incasso kosten die zijn
               gemaakt door opdrachtnemer wegens het niet nakomen van de betalingsverplichting van opdrachtgever bovenop de door opdrachtgever al verschuldige kosten in rekening te brengen.</p>
               <p className="textheader bold">9.4 Tegenvordering</p>
               <p className="text standard">Opdrachtgever is niet bevoegd om op het verschuldigde enig bedrag wegens een door hem gestelde tegenvordering in mindering te brengen.</p>
               <p className="textheader bold">9.5 Faillisement, surseance van betaling en/of curatele</p>
               <p className="text standard">In geval van faillisement, surseance van betaling of onder curatele stelling van opdrachtgever zijn de vorderingen van opdrachtnemer en de verplichtingen van opdrachtgever
               jegens opdrachtnemer onmiddelijk opeisbaar.</p>
               <p className="textheader bold">9.6 Valuta</p>
               <p className="text standard">De betaling van de factuur dient ten allen tijden te geschieden in euro's, tenzij opdrachtgever en opdrachtnemer nadrukkelijk schriftelijk anders zijn overeengekomen.
               Wanneer betaling geschiedt in een andere valuta na schriftelijke overeenkomst, is het de verantwoordelijkheid van opdrachtgever om de bijbehorende wisselkoers en/of transactiekosten te betalen en dat
               het juiste factuurbedrag na omrekening naar euro op de rekening van opdrachtnemer staat. Wanneer dit niet gebeurt is opdrachtgever alsnog verplicht alsnog het openstaande factuurbedrag te betalen. De bijbehorende wisselkoers en/of transactiekosten komen dan wederom voor rekening van opdrachtgever.</p>
               <p className="textheader bold">9.7 Betalingen van buiten de Europese Unie</p>
               <p className="text standard">Wanneer opdrachtgever zich buiten de Europese Unie bevindt bestaat er een mogelijkheid dat er extra transactiekosten in rekening gebracht worden aan opdrachtgever door opdrachtnemer.
               Opdrachtnemer verklaart hierbij geen enkele invloed te hebben op de hoogte van deze kosten gezien deze door zijn bank worden opgesteld en verklaart deze slechts door te berekenen aan de opdrachtgever.
               Indien er op voorhand sprake is van een wereldbetaling dan zullen de kosten van dat moment op de offerte worden weergegeven. Opdrachtgever is ermee bekend dat deze transactiekosten op de offerte slechts een moment opname zijn en mogelijk door de bank
               naar boven of naar beneden kunnen worden bijgesteld gedurende de uitvoering van de overeenkomst. De hoogte van deze kosten op het moment van facturatie zijn ten allen tijden leidend.</p>
               <section className="whitespace"></section>
               <p className="section">Artikel 10<br></br>Klachten</p>
               <p className="textheader bold">10.1 Klachten</p>
               <p className="text standard">Klachten over de verrichte werkzaamheden dienen door opdrachtgever uiterlijk binnen 10 dagen na aanlevering van de zaken vermeld in de overeenkomst schriftelijk te worden gemeld aan opdrachtgever.
               Opdrachtgever dient een zo gedetaileerd mogelijke beschrijving van de klacht voor te leggen aan opdrachtnemer en deze, indien totzover mogelijk, te onderbouwen met stukken zodat opdrachtnemer in staat is
               om adequaat te reageren op de klacht van opdrachtgever.</p>
               <p className="textheader bold">10.2 Coulance bij terechte klacht</p>
               <p className="text standard">Opdrachtnemer heeft, bij toewijzing van een terechte klacht, recht op keuze uit één van de volgende coulances:</p>
               <p className="text standard">het kosteloos verbeteren van de afgekeurde werkzaamheden;</p>
               <p className="text standard">het kosteloos opnieuw verrichten van de werkzaamheden;</p>
               <p className="text standard">een aanpassing van het in rekening gebrachte honorarium;</p>
               <p className="text standard">geheel/gedeeltelijk (niet) meer uitvoeren van de werkzaamheden tegen een restitutie naar evenredigheid.</p>
               <p className="textheader bold">Betalingsverplichting na indienen klacht</p>
               <p className="text standard">Het indienen van een klacht short de betalingsverplichting van opdrachtgever niet op.</p>
               <section className="whitespace"></section>
               <p className="section">Artikel 11<br></br>Ontbinding</p>
               <p className="textheader bold">11.1 Bedenktijd</p>
               <p className="text standard">Op elke overeenkomst rust een bedenktijd van 24 uur. Dit betekent dat de opdrachtgever binnen 24 uur na het terugsturen van een ondertekende offerte de mogelijkheid heeft
               om de overeenkomst eenzijdig en kosteloos te ontbinden.</p>
               <p className="textheader bold">11.2 Opzegging van de overeenkomst</p>
               <p className="text standard">Indien opdrachtgever een verplichting uit de overeenkomst niet, onvolledig, niet tijdig of niet naar behoren nakomt is opdrachtnemer gerechtigd om de overeenkomst
               met onmiddelijke gang te ontbinden, tenzij de tekortkoming zodanige geringe betekenis heeft dat het de ontbinding niet rechtvaardigt. Beide partijen kunnen eenzijdig de overeenkomst ontbinden indien een
               van hen van mening is dat de uitvoering van de opdracht niet meer kan plaatsvinden conform de overeenkomst. Dit dient gemotiveerd en schriftelijk te worden medegedeeld aan de andere partij. De andere partij is,
               indien hij van mening is dat de motivatie onvoldoende onderbouwd is, gerechtigd om hierop te reageren of een eigen tegenvoorstel te doen samen met een eigen motivatie. Beide partijen dienen hier onderling tot een overeenkomst te komen. 
               Een overeenkomst is pas opgezegd wanneer beide partijen hiermee schriftelijk akkoord gaan. </p>
               <p className="text standard">Opdrachtnemer is bevoegd om de overeenkomst per direct te ontbinden, indien:</p>
               <p className="text standard">hij omstandigheden ter kennis heeft genomen waarop opdrachtnemer kan vrezen dat opdrachtgever zijn verplichting niet zal nakomen;</p>
               <p className="text standard">opdrachtgever verzocht is om zekerheid te stellen voor de voldoening van zijn verplichtingen en deze zekerheid uitblijft of onvoldoende blijkt;</p>
               <p className="text standard">door vertraging aan zijde van opdrachtgever niet langer van opdrachtnemer kan worden verwacht dat hij de overeenkomst tegen de originele overeengekomen voorwaarden zal kunnen nakomen;</p>
               <p className="text standard">zich omstandigheden voordoen welke zodanig van aard zijn dat de nakoming van de overeenkomst onmogelijk is of dat ongewijzigde instandhouding van de overeenkomst in alle redelijkheid niet van opdrachtnemer kan worden gevraagd;</p>
               <p className="text standard">opdrachtgever in staat van faillisement wordt verklaard, uitstel van betaling indient, om toepassing van de schuldsanering natuurlijke personen verzoekt, onder curatele wordt gesteld, beslag wordt gelegd op een gedeelte of zijn algehele eigendom of komt te overlijden.</p>
              <p className="textheader bold">11.3 Vergoeding bij opzegging overeenkomst</p>
              <p className="text standard">Opdrachtnemer heeft recht op een vergoeding die gebaseerd is op de tot dan toe gemaakte werkuren, kosten en additionele kosten indien de overeenkomst wordt ontbonden.</p>

              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Footer;
