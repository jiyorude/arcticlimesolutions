import React from "react";
import "../css/footer.min.css";
import { useState } from "react";
import anime from "animejs/lib/anime.es";
import { useRef } from "react";
import { useEffect } from "react";
import { ReactComponent as FlagNL } from "../image/svg/flag_nl.svg";
import { ReactComponent as FlagUSA } from "../image/svg/flag_us.svg";

const Footer = () => {
  const [privHover, setPrivHover] = useState(false);
  const [termHover, setTermHover] = useState(false);
  const [terms, setTerms] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [privAni, setPrivAni] = useState(false);
  const [priv, setPriv] = useState(false);
  const date = new Date();
  const year = date.getFullYear();
  const termsBGIn = useRef(null);
  const termsAniIn = useRef(null);
  const privBGIn = useRef(null);
  const privAniIn = useRef(null);

  useEffect(() => {
    const privbackgroundIn = privBGIn.current;
    const privContIn = privAniIn.current;

    if (priv) {
      anime({
        targets: privbackgroundIn,
        duration: 800,
        opacity: [0, 0.8],
        easing: "easeInOutExpo",
      });
      anime({
        targets: privContIn,
        delay: 200,
        duration: 700,
        marginBottom: [-2000, 0],
        easing: "easeInOutExpo",
      });
    }
  }, [priv]);

  useEffect(() => {
    const privbackgroundIn = privBGIn.current;
    const privContIn = privAniIn.current;

    if (privAni) {
      anime({
        targets: privContIn,
        duration: 800,
        marginBottom: [0, -2000],
        easing: "easeInOutExpo",
      });
      anime({
        targets: privbackgroundIn,
        delay: 200,
        duration: 800,
        opacity: [0.8, 0],
        easing: "easeInOutExpo",
      });
    }
  }, [privAni]);

  useEffect(() => {
    const termsbackgroundIn = termsBGIn.current;
    const termsContIn = termsAniIn.current;

    if (terms) {
      anime({
        targets: termsbackgroundIn,
        duration: 800,
        opacity: [0, 0.8],
        easing: "easeInOutExpo",
      });

      anime({
        targets: termsContIn,
        delay: 200,
        duration: 700,
        marginTop: [-2000, 0],
        easing: "easeInOutExpo",
      });
    }
  }, [terms]);

  useEffect(() => {
    const termsbackgroundIn = termsBGIn.current;
    const termsContIn = termsAniIn.current;

    if (animation) {
      anime({
        targets: termsContIn,
        duration: 700,
        marginTop: [0, -2000],
        easing: "easeInOutExpo",
      });

      anime({
        targets: termsbackgroundIn,
        delay: 200,
        duration: 800,
        opacity: [0.8, 0],
        easing: "easeInOutExpo",
      });
    }
  }, [animation]);

  const openTerms = () => {
    setTerms(true);
  };

  const closeTerms = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 900);
    setTimeout(() => {
      setTerms(false);
    }, 900);
  };

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

  const openPriv = () => {
    setPriv(true);
  };

  const closePriv = () => {
    setPrivAni(true);
    setTimeout(() => {
      setPrivAni(false);
    }, 900);
    setTimeout(() => {
      setPriv(false);
    }, 900);
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
                  onClick={openPriv}
                  title="Learn more about how your data is processed"
                >
                  PRIVACY STATEMENT
                </h2>
                <span>
                  Click here to read ARCTIC LIME's Privacy Statement. Klik hier om ons privacy statement te lezen.
                </span>
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
                <span>
                  Click here to read ARCTIC LIME's general Terms and Conditions. Klik hier om de algemene
                  leveringsvoorwaarden van ARCTIC LIME Solutions te lezen.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* TERMS AND CONDITIONS */}
      {terms && (
        <>
          <div className="bg" ref={termsBGIn}></div>
          <div className="terms">
            <div className="termscontainer" ref={termsAniIn}>
              <div className="language">
                <a href="#headernl" title="Click here for Dutch Terms and Conditions">
                  <span>
                    Click here to read the Terms and Conditions in Dutch. Klik hier om de algemene leveringsvoorwaarden
                    in het Nederlands te lezen.
                  </span>
                  <FlagNL className="flag" />
                </a>
                <a href="#headerusa" title="Click here for English Terms and Conditions">
                  <span>
                    Click here to read the Terms and Conditions in English. Klik hier om de algemene
                    leveringsvoorwaarden in het Engels te lezen.
                  </span>
                  <FlagUSA className="flag" />
                </a>
              </div>
              <section className="termcontent" onClick={closeTerms}>
                <section className="whitespace" id="headernl"></section>
                <p className="termheader">ALGEMENE LEVERINGSVOORWAARDEN</p>
                <p className="date standard">
                  <em>Ingaande per 10-07-2023</em>
                </p>
                <p className="disclaimer standard">
                  Deze algemene leveringsvoorwaarden zijn van kracht op alle offertes, aanbiedingen, werkzaamheden en
                  overeenkomsten van ARCTIC LIME Solutions, tenzij er door ARCTIC LIME Solutions en opdrachtgever andere
                  afspraken schriftelijk zijn vastgelegd.
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
                <p className="text standard">ARCTIC LIME Solutions, standplaats Amsterdam.</p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 2<br></br>Identiteit
                </p>
                <p className="textheader bold">2.1 Identiteit</p>
                <p className="text standard">
                  Dhr J. Veenstra, handelend onder de naam ARCTIC LIME Solutions; hierna vermeld in dit document als
                  'opdrachtnemer'
                </p>
                <p className="textheader bold">2.2 Bereikbaarheid</p>
                <p className="text standard">
                  Opdrachtnemer is 24 uur per dag, 7 dagen per week bereikbaar via{" "}
                  <a href="https://api.whatsapp.com/send?phone=31617014448">WhatsApp</a> en e-mail op het adres{" "}
                  <a href="mailto:arcticlimesolutions@gmail.com">arcticlimesolutions@gmail.com</a>. Opdrachtnemer
                  hanteert een standaard reactietijd van 1 - 24 uur. Deze reactietijden zijn onder voorbehoud van
                  lopende projecten en beschikbaarheid van opdrachtnemer. Aan deze hanteringen omtrent de reactietijd
                  kan geen enkel recht worden ontleend.{" "}
                </p>
                <p className="textheader bold">2.3 KVK-nummer</p>
                <p className="text standard">
                  Opdrachtnemer staat ingeschreven in de Kamer van Koophandel Amsterdam onder KVK-nummer: 85701319
                </p>
                <p className="textheader bold">2.4 BTW-nummer</p>
                <p className="text standard">
                  Opdrachtnemer staat bekend bij de Belastingdienst onder het volgende BTW-nummer: NL004134441B80
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 3<br></br>Toepasbaarheid
                </p>
                <p className="textheader bold">3.1 Toepasbaarheid van leveringsvoorwaarden</p>
                <p className="text standard">
                  Deze algemene leveringsvoorwaarden zijn van kracht op alle offertes, aanbiedingen, werkzaamheden en
                  overeenkomsten van opdrachtnemer; tenzij er door opdrachtnemer en opdrachtgever andere afspraken
                  schriftelijk zijn vastgelegd en door beide partijen zijn ondertekend.
                </p>
                <p className="textheader bold">3.2 Beschikbaarheid en zichtbaarheid van leveringsvoorwaarden</p>
                <p className="text standard">
                  De algemene leveringsvoorwaarden die ARCTIC LIME Solutions hanteert zijn ten allen tijden kosteloos in
                  te zien op de website. Deze voorwaarden zijn beschikbaar in zowel het Nederlands als het Engels. Een
                  verwijzing naar de algemene leveringsvoorwaarden is van toepassing op alle offertes van opdrachtnemer.
                </p>
                <p className="textheader bold">3.3 Afwijkingen van de algemene leveringsvoorwaarden</p>
                <p className="text standard">
                  Afwijkingen van de algemene leveringsvoorwaarden zijn slechts geldig wanneer deze schriftelijk overeen
                  zijn gekomen tussen opdrachtgever en opdrachtnemer.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 4<br></br>Aanbod
                </p>
                <p className="textheader bold">4.1 Geldigheid van offertes</p>
                <p className="text standard">
                  Tenzij anders schriftelijk medegedeeld door opdrachtnemer zijn verstrekte offertes 14 dagen geldig,
                  ingaande op de offertedatum.{" "}
                </p>
                <p className="textheader bold">4.2 Verstrijken geldigheidsduur offertes</p>
                <p className="text standard">
                  Na het verstrijken van de geldigheid van een aanbod aan opdrachtgever zal het gedane aanbod komen te
                  vervallen. Opdrachtnemer hoeft opdrachtgever hiervan niet op de hoogte te stellen. Het is niet
                  mogelijk om enig recht te ontlenen aan informatie uit een verstreken offerte, zoals prijzen,
                  werkzaamheden en/of genoten kortingen.
                </p>
                <p className="textheader bold">4.3 Vrijblijvendheid van offertes</p>
                <p className="text standard">
                  Offertes zijn ten allen tijden geheel vrijblijvend. Opdrachtgever is in geen geval verplicht om
                  diensten van opdrachtnemer af te nemen na ontvangst van zijn offerte.
                </p>
                <p className="textheader bold">4.4 Aanbodsverplichting</p>
                <p className="text standard">
                  Opdrachtnemer behoud ten allen tijden het recht ervoor te kiezen om geen aanbod te doen aan
                  opdrachtgever. Opdrachtnemer is niet verplicht om de reden mede te delen aan opdrachtgever.
                </p>
                <p className="textheader bold">4.5 Toepassing op opdrachten in de toekomst</p>
                <p className="text standard">
                  Een gedane offerte is niet automatisch geldig voor een toekomstige opdracht. Dit geldt ook voor
                  genoten kortingen uit het verleden.
                </p>
                <p className="textheader bold">4.6 Urenberekening</p>
                <p className="text standard">
                  Opdrachtnemer stelt zijn offertes op gebaseerd op een inschatting van een urenberekening om de
                  opdracht van opdrachtgever zo goed mogelijk uit te voeren. Opdrachtnemer doet dit in alle redelijkheid
                  en naar zijn professionele inzicht. Extra werkzaamheden, diensten, digitale materialen, fysieke
                  materialen en werkuren zijn niet meegerekend in deze offerte en worden toegevoegd op de eindfactuur.
                </p>
                <p className="textheader bold">4.7 Additionele kosten</p>
                <p className="text standard">
                  Op de offertes zijn zogenoemde 'additionele kosten' niet meegerekend. Denk hierbij aan reiskosten,
                  verblijfskosten, kosten die aan externe instanties dienen te worden betaald en ook door deze partijen
                  worden vastgesteld, zoals betalingen voor auteursrechten aan BUMA-STEMRA of afkoopsommen voor
                  stock-beelden. Deze worden altijd apart toegevoegd op de eindfactuur. Opdrachtnemer is gerechtigd om
                  een voorbetaling voor deze kosten te verlangen van opdrachtgever wanneer opdrachtnemer deze zelf niet
                  direct kan voldoen via een voorbetaling.
                </p>
                <p className="textheader bold">4.8 Prijzen</p>
                <p className="text standard">
                  Prijzen staan vermeld op de prijslijst van ARCTIC LIME Solutions. Deze prijslijst kan kosteloos via
                  WhatsApp of e-mail worden opgevraagd. Alle vermelde prijzen zijn, waar BTW van toepassing is,
                  exclusief 21% BTW.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 5<br></br>De overeenkomst
                </p>
                <p className="textheader bold">5.1 De overeenkomst</p>
                <p className="text standard">
                  Een overeenkomst tussen opdrachtgever en opdrachtnemer komt daadwerklijk en alleen tot stand wanneer
                  opdrachtgever de opgestelde offerte aanvaardt. Opdrachtgever kan dit aan te tonen door de offerte
                  schriftelijk of digitaal te ondertekenen en een scan hiervan terug te sturen aan opdrachtnemer.
                </p>
                <p className="textheader bold">5.2 Duur van overeenkomst</p>
                <p className="text standard">
                  De overeenkomst wordt aangegaan voor bepaalde tijd, tenzij de aard van de opdracht dit weerspreekt of
                  dit schriftelijk tussen opdrachtgever en opdrachtnemer is vastgesteld.
                </p>
                <p className="textheader bold">5.3 Wijziging van overeenkomst</p>
                <p className="text standard">
                  Indien tijdens de uitvoering van de overeenkomst blijkt dat een wijziging van de overeenkomst
                  noodzakelijk is voor een behoorlijke uitvoering van de opdracht zal opdrachtnemer de opdrachtgever
                  hiervan tijdig op de hoogte stellen. Het is aan de opdrachtgever en opdrachtnemer om hier tijdig en in
                  onderling overleg over te gaan tot aanpassing van de overeenkomst.
                </p>
                <p className="textheader bold">5.4 Uitvoering van de overeenkomst</p>
                <p className="text standard">
                  Opdrachtnemer verklaart de overeenkomst naar zijn professioneel inzicht, kennis, beste vermogen en
                  vakmanschap uit te voeren, zoals het hem zou mogen betamen als professional in de audiovisuele- en web
                  development branche. Hij zal dit doen binnen de kaders van de opgestelde algemene
                  leveringsvoorwaarden, het beschikbare tijdsbestek, de inhoud van de opgestelde offerte en de
                  'briefing' die is ontvangen door opdrachtgever. Opdrachtnemer kan echter niet instaan voor het
                  bereiken van het beoogde resultaat van opdrachtgever.
                </p>
                <p className="textheader bold">5.5 Uitvoering van werkzaamheden door derden</p>
                <p className="text standard">
                  Het is opdrachtnemer toegestaan om bepaalde werkzaamheden te laten verrichten door derden.
                </p>
                <p className="textheader bold">5.6 Aanlevering van benodigde materialen</p>
                <p className="text standard">
                  Het is de verantwoordelijkheid van de opdrachtgever om ervoor te zorgen dat de juiste informatie,
                  briefings, software, fysieke objecten, bestanden, activatiesleutels, downloadlinks of andere benodigde
                  voorzieningen tijdig in bezit zijn van opdrachtnemer. Dit geldt ook voor voorzieningen waarvan de
                  opdrachtgever hoort te weten dat deze noodzakelijk zijn voor het behoorlijk uitvoeren van de
                  overeenkomst.
                </p>
                <p className="textheader bold">5.7 Niet tijdig aanleveren van benodigde materialen</p>
                <p className="text standard">
                  Indien de benodigde materialen niet, niet tijdig of onbehoorlijk zijn aangeleverd door opdrachtgever,
                  behoudt opdrachtnemer het recht op uitvoering van de overeenkomst op te schorten totdat opdrachtgever
                  hieraan voldoet. Opdrachtnemer behoudt daarnaast het recht om de extra kosten die uit de vertraging
                  voortvloeien volgens zijn gebruikelijke tarieven aan opdrachtgever in rekening te brengen, alsmede het
                  recht om de overeenkomst eenzijdig en zonder tussenkomst van het Nederlands recht te ontbinden wanneer
                  opdrachtgever geen behoorlijk tijdsbestek aan opdrachtnemer kan mededelen waarin hij wel aan zijn
                  aanleveringsverantwoordelijkheid kan voldoen. De gemaakte kosten en uren die zijn gemaakt door
                  opdrachtnemer tot aan het moment van eenzijdige ontbinding zullen via een eindfactuur alsnog aan
                  opdrachtgever in rekening gebracht worden.
                </p>
                <p className="textheader bold">5.8 Uitvoering van de overeenkomst in fases</p>
                <p className="text standard">
                  Opdrachtnemer heeft het recht om de overeenkomst in fases uit te voeren indien hij dit nodig acht.
                  Indien dit het geval is, is opdrachtnemer gerechtigd om ook elk afzonderlijk uitgevoerd deel te
                  factureren. Als de overeenkomst in fases wordt uitgevoerd heeft opdrachtnemer het recht om
                  werkzaamheden die bij een volgende fase behoren op te schorten totdat de opdrachtgever de resultaten
                  van de daaraan voorafgaande fases schriftelijk heeft goedgekeurd.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 6<br></br>Aansprakelijkheid
                </p>
                <p className="textheader bold">6.1 Uitvoeringsverplichting</p>
                <p className="text standard">
                  De aansprakelijkheid van opdrachtnemer jegens opdrachtgever is beperkt tot nakoming van zijn
                  contractuele verplichtingen die zijn vastgesteld in de overeenkomst en een zogeheten
                  'uitvoeringsverplichting' waarin opdrachtnemer zich naar zijn beste inzicht en kunnen zal inspannen om
                  het overeengekomene uit te voeren. Opdrachtgever kan in geen enkel geval schadevergoedingen vorderen
                  van opdrachtnemer anders dan het niet nakomen tot deze bedoelde verplichting.
                </p>
                <p className="textheader bold">6.2 Schade en schadevergoedingen</p>
                <p className="text standard">
                  De aansprakelijkheid, voor welke schade dan ook, veroorzaakt door toerekenbare tekortkomingen van
                  opdrachtnemer, wordt ten allen tijden beperkt tot het bedrag van het honorarium dat opdrachtnemer voor
                  zijn werkzaamheden in het kader van de opdracht heeft ontvangen of zou ontvangen.
                </p>
                <p className="textheader bold">6.3 Indirecte schade</p>
                <p className="text standard">
                  Opdrachtnemer is niet verantwoordelijk voor indirecte schade van opdrachtgever, zoals, maar niet
                  gelimiteerd tot: gevolgschade, omzetderving, gemiste besparingen, bedrijfsstagnatie of immateriële
                  schade.
                </p>
                <p className="textheader bold">6.4 Aansprakelijkheidstermijn</p>
                <p className="text standard">
                  Indien opdrachtnemer aansprakelijk is aan schade, dan dient de opdrachtgever deze binnen tien dagen na
                  het voorval schriftelijk aan opdrachtnemer te melden. De aansprakelijkheid van opdrachtnemer vervalt
                  onherroepelijk na deze termijn.
                </p>
                <p className="textheader bold">6.5 Vrijwaring van derden</p>
                <p className="text standard">
                  Opdrachtgever dient opdrachtnemer schadeloos te houden en vrij te waren van claims van derden die dan
                  wel direct en/of indrect verband houden met de werkzaamheden van opdrachtnemer voor opdrachtgever.
                  Wanneer opdrachtnemer door een derde wordt aangesproken is opdrachtgever geacht opdrachtnemer zowel
                  buiten als bij rechte bij te staan. Alle gemaakte kosten en schade aan de kant van opdrachtnemer en
                  zijn derden komen verder voor rekening en risico van opdrachtgever.
                </p>
                <p className="textheader bold">6.6 Overdrachtsrisico</p>
                <p className="text standard">
                  Zaken die voorwerp van de overeenkomst zijn, zijn tot de digitale of fysieke overdracht en tot het
                  moment van beschikbaar stellen aan opdrachtgever voor rekening en risico voor opdrachtnemer. Het
                  risico van verlies, beschadiging, waardevermindering die onderdeel van overeenkomst zijn gaan op het
                  moment van overdracht over op opdrachtgever.
                </p>
                <p className="textheader bold">6.7 Geheimhoudingsplicht</p>
                <p className="text standard">
                  Opdrachtnemer verklaart alle informatie en bestanden die het van opdrachtgever ontvangt zorgvuldig
                  bewaren onder een geheimhoudingsplicht, en om daarnaast de belangen van opdrachtgever te beschermen,
                  tenzij opdrachtnemer op grond der wet, een gedragscode of een beroepscode verplicht is deze informatie
                  te delen met derden.
                </p>
                <p className="textheader bold">6.8 Transport</p>
                <p className="text standard">
                  Opdrachtnemer kan niet aansprakelijk worden gesteld voor beschadigingen of het kwijtraken van zaken
                  zoals fysieke dragers, digitale bestanden of andere fysieke producten of objecten tijdens vervoer of
                  verzending per koeriersdienst of post. Dit maakt niet uit of de verzending is gericht aan, of
                  verzonden door opdrachtgever, opdrachtnemer of derden.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 7<br></br>Levering
                </p>
                <p className="textheader bold">7.1 Levering</p>
                <p className="text standard">
                  Levering vindt plaats doordat de zaak digitaal, of via fysieke drager ter beschikking wordt gesteld
                  aan opdrachtgever. Na deze levering gaat het risico, zoals beschreven in artikel 6.6, over op
                  opdrachtgever.
                </p>
                <p className="textheader bold">7.2 Plaats van levering</p>
                <p className="text standard">
                  Levering vindt plaats op de door opdrachtnemer aangegeven wijze, tenzij anders overeengekomen.
                </p>
                <p className="textheader bold">7.3 Verzendkosten van levering</p>
                <p className="text standard">
                  Indien er verzendkosten verschuldigd zijn voor definitieve levering van de zaak, zoals het versturen
                  van fysieke gegevensdragers met bestanden, dan worden deze op de offerte weergegeven. Indien tijdens
                  de uitvoering van de overeenkomst deze verzendkosten ter sprake komen, dan worden deze kosten
                  toegevoegd op de eindfactuur.
                </p>
                <p className="textheader bold">7.4 Leveringstermijnen</p>
                <p className="text standard">
                  De leveringstermijn van de zaak en gerelateerde werkzaamheden zullen worden uitgevoerd door een door
                  opdrachtnemer opgegeven termijn. Leveringstermijnen die schriftelijk of per offerte worden medegedeeld
                  aan opdrachtgever zijn indicatief en kunnen niet worden beschouwd als een 'final deadline', of een
                  zogeheten 'fatale termijn'.
                </p>
                <p className="textheader bold">7.5 Definitieve Deadline</p>
                <p className="text standard">
                  Bij overschrijding van de leverings of uitvoeringstermijn dient opdrachtgever de opdrachtnemer
                  schriftelijk in gebreke te stellen. Hierbij dient hij opdrachtnemer alsnog een redelijke termijn te
                  bieden om de zaak aan te leveren of om tot uitvoering te gaan van de overeenkomst.
                </p>
                <p className="textheader bold">7.6 Standaard Delivery Protocol voor video bestanden</p>
                <p className="text standard">
                  Opdrachtnemer hanteert een zogenoemd Standaard Delivery Protocol van het aanleveren van videobestanden
                  aan de opdrachtgever. Het opleveren van deze bestanden in de volgende bestandsformaten zijn inbegrepen
                  in de prijs van de offerte:
                </p>
                <p className="text standard">Video: MP4, MOV (APR4444XQ), GIF</p>
                <p className="text standard">Audio: WAV, MP3, AIFF (-14LUFS, -16LUFS of -23LUFS) - Stereo </p>
                <p className="text standard">Tekst/Print: PDF</p>
                <p className="text standard">Fotografie: JPG, PNG</p>
                <p className="text standard">Motion Graphics: MOV (APR4444XQ plus alpha kanalen), GIF</p>
                <p className="text standard">Ondertiteling: SRT of 'Burn-In-Video'</p>
                <p className="text standard">
                  Wanneer opdrachtgever een zaak in een bestandsformaat of codec wenst te ontvangen die niet staat
                  beschreven in het standaard delivery protocol, dan kan hij dit bij opdrachtnemer voorleggen.
                  Opdrachtnemer is gerechtigd om hier, in lijn met zijn prijslijst, kosten voor in rekening te brengen.
                </p>
                <p className="textheader bold">7.7 Bestandsformaten buiten het Standaard Delivery Protocol</p>
                <p className="text standard">
                  Voor het opleveren van bestandsformaten buiten het Standaard Delivery Protocol van opdrachtnemer en
                  het aanleveren van bestanden voor platforms zoals bioscopen, streaming services, televisiestations en
                  drukkers is opdrachtnemer gerechtigd extra kosten in rekening te brengen welke vermeld staan op zijn
                  prijslijst.
                </p>
                <p className="text standard">
                  Denk hierbij aan het aanleveren (maar niet gelimiteerd tot) in de volgende formaten: DPX, Broadcast
                  MXF, IMF, DCP, Uncompressed Quicktime, TARGA, TIFF, EXR, DNXHD, en 5.1/7.1 audio mixen.
                </p>
                <p className="textheader bold">7.8 Transportbestanden</p>
                <p className="text standard">
                  Tenzij anders overeengekomen tussen opdrachtgever en opdrachtnemer zal opdrachtnemer geen zogeheten
                  'transportbestanden' en/of open bestanden uitleveren aan opdrachtgever, zoals (maar niet gelimiteerd
                  tot) .pproj, .aep, .psd, .omf, .xml, .edl, .cdl en .aal bestanden
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 8<br></br>Prijzen
                </p>
                <p className="textheader bold">8.1 Prijzen</p>
                <p className="text standard">
                  Het honorarium van opdrachtnemer is gebaseerd op de tarieven die staan vermeld op zijn prijslijst en
                  hangen niet af van project basis.
                </p>
                <p className="textheader bold">8.2 Prijswijzigingen</p>
                <p className="text standard">
                  Wanneer opdrachtnemer bij het sluiten van de overeenkomst een vast honorarium, prijs of tarief
                  overeenkomt, dan is opdrachtnemer gerechtigd tot verhoging hiervan, ook wanneer het honorarium, prijs
                  of tarief oorspronkelijk niet onder voorbehoud is gegeven. Indien opdrachtnemer het voornemen heeft
                  het honorarium, de prijs of het tarief te wijzigen, dan stelt deze opdrachtgever hiervan zo spoedig
                  mogelijk schriftelijk op de hoogte.
                </p>
                <p className="text standard">
                  Indien de verhoging van het honorarium, prijs of het tarief binnen 3 maanden na het sluiten van de
                  overeenkomst plaatsvindt, kan opdrachtgever de overeenkomst door een schriftelijke verklaring
                  ontbinden, tenzij:
                </p>
                <p className="text standard">
                  de verhoging voortvloeit uit een bevoegdheid of een op opdrachtnemer rustende verplichting ingevolge
                  de wet;
                </p>
                <p className="text standard">
                  de verhoging oorzaak vindt in een stijging van de prijs van grondstoffen, lonen of op andere gronden
                  die bij het aangaan van de overeenkomst niet redelijkerwijs voorzienbaar waren;
                </p>
                <p className="text standard">
                  opdrachtnemer alsnog bereid is om de overeenkomst op basis van het oorspronkelijk overeengekomen
                  tarief, honorarium of prijs uit te voeren;
                </p>
                <p className="text standard">
                  het is overeengekomen tussen opdrachtnemer dat de uitvoering langer dan drie maanden na het sluiten
                  van de overeenkomst nog steeds zal worden verricht.
                </p>
                <p className="text standard">
                  De opdrachtgever heeft recht op ontbinding van de overeenkomst als meer dan drie maanden na het
                  sluiten van de overeenkomst het honorarium, prijs of het tarief wordt verhoogd, tenzij bij de
                  overeenkomst overeengekomen is dat de uitvoering langer dan drie maanden na het sluiten van de
                  overeenkomst zal worden verricht.
                </p>
                <p className="text standard">
                  Opdrachtnemer zal opdrachtgever in het geval van het verhogen van de prijzen en/of honorarium deze zo
                  spoedig mogelijk in kennis stellen. Opdrachtnemer geeft hierbij ook een datum aan wanneer deze nieuwe
                  prijzen van kracht zullen zijn.
                </p>
                <p className="textheader bold">8.3 Valuta</p>
                <p className="text standard">
                  Prijzen zijn nadrukkelijk uitgedrukt in euro, exclusief BTW en andere heffingen, tenzij nadrukkelijk
                  anders aangegeven. Prijzen zijn ook exclusief additionele kosten, welke staan beschreven in artikel
                  4.7.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 9<br></br>Betaling
                </p>
                <p className="textheader bold">9.1 Betalingstermijn</p>
                <p className="text standard">
                  De betaling dient binnen 14 dagen na factuurdatum te geschieden op het door opdrachtnemer verstrekte
                  IBAN nummer onder vermelding van het factuurnummer.
                </p>
                <p className="textheader bold">9.2 Verlopen betalingstermijn</p>
                <p className="text standard">
                  Na het verlopen van de betalingstermijn wordt de wettelijke rente in rekening gebracht bij
                  opdrachtgever, zonder dat hiervoor een ingebrekestelling nodig is van opdrachtnemer.
                </p>
                <p className="textheader bold">9.3 Niet nakomen betalingsverplichting</p>
                <p className="text standard">
                  Wanneer opdrachtgever de betalingsverplichting niet nakomt, behoud opdrachtnemer ten allen tijden het
                  recht om alle gerechtelijke, buitengerechtelijke en incasso kosten die zijn gemaakt door opdrachtnemer
                  wegens het niet nakomen van de betalingsverplichting van opdrachtgever bovenop de door opdrachtgever
                  al verschuldige kosten in rekening te brengen.
                </p>
                <p className="textheader bold">9.4 Tegenvordering</p>
                <p className="text standard">
                  Opdrachtgever is niet bevoegd om op het verschuldigde enig bedrag wegens een door hem gestelde
                  tegenvordering in mindering te brengen.
                </p>
                <p className="textheader bold">9.5 Faillisement, surseance van betaling en/of curatele</p>
                <p className="text standard">
                  In geval van faillisement, surseance van betaling of onder curatele stelling van opdrachtgever zijn de
                  vorderingen van opdrachtnemer en de verplichtingen van opdrachtgever jegens opdrachtnemer onmiddelijk
                  opeisbaar.
                </p>
                <p className="textheader bold">9.6 Valuta</p>
                <p className="text standard">
                  De betaling van de factuur dient ten allen tijden te geschieden in euro's, tenzij opdrachtgever en
                  opdrachtnemer nadrukkelijk schriftelijk anders zijn overeengekomen. Wanneer betaling geschiedt in een
                  andere valuta na schriftelijke overeenkomst, is het de verantwoordelijkheid van opdrachtgever om de
                  bijbehorende wisselkoers en/of transactiekosten te betalen en dat het juiste factuurbedrag na
                  omrekening naar euro op de rekening van opdrachtnemer staat. Wanneer dit niet gebeurt is opdrachtgever
                  alsnog verplicht alsnog het openstaande factuurbedrag te betalen. De bijbehorende wisselkoers en/of
                  transactiekosten komen dan wederom voor rekening van opdrachtgever.
                </p>
                <p className="textheader bold">9.7 Betalingen van buiten de Europese Unie</p>
                <p className="text standard">
                  Wanneer opdrachtgever zich buiten de Europese Unie bevindt bestaat er een mogelijkheid dat er extra
                  transactiekosten in rekening gebracht worden aan opdrachtgever door opdrachtnemer. Opdrachtnemer
                  verklaart hierbij geen enkele invloed te hebben op de hoogte van deze kosten gezien deze door zijn
                  bank worden opgesteld en verklaart deze slechts door te berekenen aan de opdrachtgever. Indien er op
                  voorhand sprake is van een wereldbetaling dan zullen de kosten van dat moment op de offerte worden
                  weergegeven. Opdrachtgever is ermee bekend dat deze transactiekosten op de offerte slechts een moment
                  opname zijn en mogelijk door de bank naar boven of naar beneden kunnen worden bijgesteld gedurende de
                  uitvoering van de overeenkomst. De hoogte van deze kosten op het moment van facturatie zijn ten allen
                  tijden leidend.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 10<br></br>Klachten
                </p>
                <p className="textheader bold">10.1 Klachten</p>
                <p className="text standard">
                  Klachten over de verrichte werkzaamheden dienen door opdrachtgever uiterlijk binnen 10 dagen na
                  aanlevering van de zaken vermeld in de overeenkomst schriftelijk te worden gemeld aan opdrachtgever.
                  Opdrachtgever dient een zo gedetaileerd mogelijke beschrijving van de klacht voor te leggen aan
                  opdrachtnemer en deze, indien totzover mogelijk, te onderbouwen met stukken zodat opdrachtnemer in
                  staat is om adequaat te reageren op de klacht van opdrachtgever.
                </p>
                <p className="textheader bold">10.2 Coulance bij terechte klacht</p>
                <p className="text standard">
                  Opdrachtnemer heeft, bij toewijzing van een terechte klacht, recht op keuze uit één van de volgende
                  coulances:
                </p>
                <p className="text standard">het kosteloos verbeteren van de afgekeurde werkzaamheden;</p>
                <p className="text standard">het kosteloos opnieuw verrichten van de werkzaamheden;</p>
                <p className="text standard">een aanpassing van het in rekening gebrachte honorarium;</p>
                <p className="text standard">
                  geheel/gedeeltelijk (niet) meer uitvoeren van de werkzaamheden tegen een restitutie naar
                  evenredigheid.
                </p>
                <p className="textheader bold">Betalingsverplichting na indienen klacht</p>
                <p className="text standard">
                  Het indienen van een klacht short de betalingsverplichting van opdrachtgever niet op.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 11<br></br>Ontbinding
                </p>
                <p className="textheader bold">11.1 Algemene Bedenktijd</p>
                <p className="text standard">
                  Op elke overeenkomst rust een bedenktijd van 48 uur. Dit betekent dat de opdrachtgever binnen 48 uur
                  na het terugsturen van een ondertekende offerte de mogelijkheid heeft om de overeenkomst eenzijdig en
                  zonder kosten te ontbinden. Opdrachtnemer behoudt het recht om ditzelfde tijdsbestek aan te houden
                  voordat hij met de werkzaamheden start om een kosteloze ontbinding te garanderen aan opdrachtgever,
                  tenzij opdrachtgever van hem verlangt per direct te starten met de werkzaamheden. Wanneer
                  opdrachtgever dit zogeheten 'verzoek tot directe start' schriftelijk aan opdrachtnemer kenbaar maakt
                  behoudt opdrachtgever het recht om binnen 48 uur na het ingaan van de overeenkomst deze te ontbinden.
                  Echter is opdrachtnemer dan wel bevoegd om de tot dan gemaakte kosten, uren, materiaalkosten en
                  additionele kosten bij opdrachtgever in rekening te brengen, zoals omschreven in artikel 11.3.
                </p>
                <p className="textheader bold">11.2 Opzegging van de overeenkomst</p>
                <p className="text standard">
                  Indien opdrachtgever een verplichting uit de overeenkomst niet, onvolledig, niet tijdig of niet naar
                  behoren nakomt is opdrachtnemer gerechtigd om de overeenkomst met onmiddelijke gang te ontbinden,
                  tenzij de tekortkoming zodanige geringe betekenis heeft dat het de ontbinding niet rechtvaardigt.
                  Beide partijen kunnen eenzijdig de overeenkomst ontbinden indien een van hen van mening is dat de
                  uitvoering van de opdracht niet meer kan plaatsvinden conform de overeenkomst. Dit dient gemotiveerd
                  en schriftelijk te worden medegedeeld aan de andere partij. De andere partij is, indien hij van mening
                  is dat de motivatie onvoldoende onderbouwd is, gerechtigd om hierop te reageren of een eigen
                  tegenvoorstel te doen samen met een eigen motivatie. Beide partijen dienen hier onderling tot een
                  overeenkomst te komen en verklaren dat zij zich naar hun beste kunnen en inzicht zullen inspannen om
                  tot een akkoord danwel compromis te komen. Een overeenkomst is pas daadwerkelijk opgezegd wanneer
                  beide partijen hiermee schriftelijk akkoord gaan.{" "}
                </p>
                <p className="text standard">
                  Opdrachtnemer is bevoegd om de overeenkomst per direct te ontbinden, indien:
                </p>
                <p className="text standard">
                  hij omstandigheden ter kennis heeft genomen waarop opdrachtnemer kan vrezen dat opdrachtgever zijn
                  verplichting niet zal nakomen;
                </p>
                <p className="text standard">
                  opdrachtgever verzocht is om zekerheid te stellen voor de voldoening van zijn verplichtingen en deze
                  zekerheid uitblijft of onvoldoende blijkt;
                </p>
                <p className="text standard">
                  door vertraging aan zijde van opdrachtgever niet langer van opdrachtnemer kan worden verwacht dat hij
                  de overeenkomst tegen de originele overeengekomen voorwaarden zal kunnen nakomen;
                </p>
                <p className="text standard">
                  zich omstandigheden voordoen welke zodanig van aard zijn dat de nakoming van de overeenkomst
                  onmogelijk is of dat ongewijzigde instandhouding van de overeenkomst in alle redelijkheid niet van
                  opdrachtnemer kan worden gevraagd;
                </p>
                <p className="text standard">
                  opdrachtgever in staat van faillisement wordt verklaard, uitstel van betaling indient, om toepassing
                  van de schuldsanering natuurlijke personen verzoekt, onder curatele wordt gesteld, beslag wordt gelegd
                  op een gedeelte of zijn algehele eigendom of komt te overlijden.
                </p>
                <p className="textheader bold">11.3 Vergoeding bij opzegging overeenkomst</p>
                <p className="text standard">
                  Opdrachtnemer heeft ten allen tijden recht op een vergoeding die gebaseerd is op de tot dan toe
                  gemaakte werkuren, kosten en additionele kosten indien de overeenkomst wordt ontbonden.
                </p>
                <p className="textheader bold">11.4 Bevoegdheid ontbinding opdrachtnemer</p>
                <p className="text standard">
                  Naast de zaken die zijn vermeld in artikel 11.2, mag opdrachtnemer van zijn bevoegdheid tot
                  voorttijdige schorsing of opzegging van de overeenkomst gebruik maken wanneer er omstandigheden of
                  feiten voordoen die zich aan zijn invloed onttrekken of hem niet zijn toe te rekenen, zoals
                  overmachtssituaties en plotselinge verhindering die de voltooing van de opdracht in alle redelijkheid
                  belemmeren.
                </p>
                <p className="textheader bold">11.5 Leveringstermijn</p>
                <p className="text standard">
                  Een gemiste leveringstermijn geldt niet als een geldige reden om de overeenkomst op te zeggen.
                </p>
                <p className="textheader bold">11.6 Opzegging bij niet-tijdige betaling</p>
                <p className="text standard">
                  Opdrachtnemer behoudt het recht om de overeenkomst per ommegaande op te zeggen bij een niet tijdige
                  betaling van opdrachtgever. Opdrachtnemer behoudt in dit geval zijn recht op een volledige betaling.
                </p>
                <p className="textheader bold">11.7 Schade bij ontbinding</p>
                <p className="text standard">
                  Opdrachtnemer is niet aansprakelijk voor enige geleden schade, vergoedingen of kosten wanneer hij de
                  overeenkomst ontbindt.
                </p>
                <p className="textheader bold">11.8 Opeisbaarheid van vorderingen</p>
                <p className="text standard">
                  Wanneer de overeenkomst is ontbonden zijn vorderingen van de opdrachtnemer onmiddelijk opeisbaar.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 12<br></br>Opslag en Back-up
                </p>
                <p className="textheader bold">12.1 Opslag en back-up van bestanden</p>
                <p className="text standard">
                  Zoals omschreven in artikel 6.6 wordt het risico van digitale en fysieke bestanden bij oplevering
                  overgedragen aan opdrachtgever. Ondanks dat opdrachtnemer uiterste zorg draagt aan het opslaan en
                  backuppen van zoveel mogelijk project gerelateerde bestanden geldt dit nimmer als een back-up
                  garantie. Opdrachtnemer is niet verplicht om projectgerelateerde bestanden te backuppen of the
                  behouden zodra het project een afgeronde status heeft bereikt.
                </p>
                <p className="text standard">
                  Opdrachtnemer classificeert een project zodanig als 'afgerond' wanneer opdrachtnemer de zaken die
                  behoren tot de overeenkomst heeft opgeleverd aan opdrachtgever, de factuur in volledigheid is betaald
                  en de gestelde klachtentermijn is verstreken.
                </p>
                <p className="textheader bold">12.2 Opslag van persoonsgegevens</p>
                <p className="text standard">
                  Opdrachtnemer verklaart alleen persoons- en bedrijfsgegevens op te slaan van opdrachtgever die
                  benodigd zijn voor het uitvoeren van de opdracht, zoals adresgegevens, e-mail addressen, KVK-nummers
                  en BTW-nummers. Opdrachtnemer slaat deze gegevens op en onderhoudt deze gegevens met de grootst
                  mogelijke zorg. Het staat opdrachtgever vrij om zijn opgeslagen gegevens ten allen tijden kosteloos in
                  te zien, aan te laten passen of te laten verwijderen, tenzij de informatie een zodanig belangrijke
                  betekenis heeft voor momenteel lopende projecten tussen opdrachtnemer en opdrachtgever. In dat geval
                  zal opdrachtnemer de gevraagde informatie verwijderen zodra het project een 'afgeronde' status heeft
                  ontvangen.
                </p>
                <p className="textheader bold">12.3 opslag van fysieke gegevensdragers opdrachtgever</p>
                <p className="text standard">
                  Opdrachtnemer hanteert de grootst mogelijke zorg in het juist opslaan en bewaren van fysieke
                  gegevensdragers die door opdrachtgever ter beschikking zijn gesteld. Opdrachtnemer kan de werking van
                  de gegevensdragers noch het voorkomen van verlies van data op deze gegevensdragers niet garanderen.
                </p>
                <p className="textheader bold">12.4 Terugsturen van gegevensdragers</p>
                <p className="text standard">
                  Na afronding van het project worden gegevensdragers van opdrachtgever teruggestuurd naar
                  opdrachtgever, tenzij hij schriftelijk kenbaar maakt deze niet terug te willen ontvangen. Wanneer
                  opdrachtgever dit kenbaar maakt overhandigt hij per ommegaande het eigendom van deze dragers aan
                  opdrachtnemer. In geen geval verplicht het opdrachtnemer tot bewaring en back-up van de gegevens die
                  op dat moment op de drager staan. Indien de verzendkosten- en/of koerierskosten niet vermeld zijn in
                  de offerte is opdrachtnemer gerechtigd deze afzonderlijk aan de eindfactuur toe te voegen en bij
                  opdrachtgever in rekening te brengen. Zie artikel 6.8 omtrent aansprakelijkheid van transport.
                </p>
                <p className="textheader bold">12.5 Verlies van gegevens</p>
                <p className="text standard">
                  Opdrachtnemer hanteert de grootst mogelijke zorg in het opslaan, backuppen en onderhouden van digitale
                  bestanden en fysieke dragers tijdens het verloop van het project. Echter kan opdrachtnemer niet garant
                  staan voor technische beperkingen, problemen en het onomkeerbare verlies van data. Hieraan kan geen
                  enkel recht worden ontleend.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 13<br></br>Intellectueel Eigendom
                </p>
                <p className="textheader bold">13.1 Intellectueel Eigendom</p>
                <p className="text standard">
                  Designs, prototypes, UX/UI Designs, gemaakte materialen, schetsen, plannen, concepten, interpretaties,
                  presentaties, leveringen, videoproducties, animaties, motion graphics, fotografie, code, webdesigns,
                  montages en al het andere gemaakte werk door ARCTIC LIME Solutions vallen onder het auteursrecht van
                  opdrachtnemer. Dit auteursrecht is in geen enkel geval overdraagbaar en blijven formeel en juridisch
                  in het bezit van opdrachtnemer. Wanneer er inbreuk wordt gemaakt op dit auteursrecht wordt gemaakt, of
                  wanneer dit auteursrecht als eigen geclaimd wordt door opdrachtgever, kan opdrachtgever hiervoor in
                  kwestie juridisch aansprakelijk worden gesteld door opdrachtnemer.
                </p>
                <p className="text standard">
                  Zelfs na een gesloten overeenkomst tussen opdrachtnemer en opdrachtgever betekent dit in geen geval
                  dat auteursrecht of de directe rechten van het intellectuele eigendom van opdrachtnemer in enige vorm,
                  zowel gedeeltelijk als geheel overdraagbaar is.
                </p>
                <p className="text standard">
                  Alle door opdrachtnemer in het kader van de overeenkomst geleverde zaken blijven eigendom van ARCTIC
                  LIME Solutions totdat opdrachtgever hetgeen hij op grond van de overeenkomst is verschuldigd
                  deugdelijk is nagekomen en volledig heeft voldaan. Onder het verschuldigde is inbegrepen: vergoedingen
                  van alle kosten en rente, kosten van eerdere en latere leveringen en verrichte diensten, alsmede
                  schadevorderingen wegens tekortschieten in de nakoming.
                </p>
                <p className="text standard">
                  Zolang het eigendom van het geleverde niet over is gegaan op de opdrachtgever, mag deze hetgeen onder
                  het eigendomsvoorbehoud valt niet doorverkopen, verpanden of op enige andere wijze bezwaren, tenzij
                  het valt onder zijn normale dagelijkse bedrijfsgang.{" "}
                </p>
                <p className="textheader bold">13.2 Toegenomen kennis</p>
                <p className="text standard">
                  Opdrachtnemer behoudt het recht de door de uitvoering van de werkzaamheden toegenomen kennis voor
                  andere doeleinden te gebruiken, voor zover hierbij geen vertrouwelijke informatie ter kennis van
                  derden wordt gebracht.
                </p>
                <p className="textheader bold">13.3 Intellectueel eigendom bij inbeslagname van derden</p>
                <p className="text standard">
                  Indien derden beslag leggen op door opdrachtnemer geleverde zaken aan opdrachtgever, dan wel rechten
                  daarop willen vestigen of doen gelden, is opdrachtgever verplicht opdrachtnemer zo snel als
                  redelijkerwijs verwacht mag worden daarvan op de hoogte te stellen.
                </p>
                <p className="textheader bold">13.4 Inbreuk van auteursrecht</p>
                <p className="text standard">
                  Opdrachtgever geeft aan zich ervan te weerhouden om inbreuk te maken op het auteursrecht van
                  opdrachtnemer.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 14<br></br>Overmacht
                </p>
                <p className="textheader bold">14.1 Overmacht</p>
                <p className="text standard">
                  Een tekortkoming kan niet aan opdrachtnemer of opdrachtgever worden toegerekend als de tekortkoming
                  niet te wijten is aan zijn schuld, wet, rechtshandeling of in het verkeer geldende opvattingen. In dit
                  geval zijn partijen niet verplicht tot het nakomen van de verplichtingen in de overeenkomst. Artikel
                  14.3 schetst een aantal voorbeelden onder wat kan worden verstaan als een overmachtssituatie.
                </p>
                <p className="textheader bold">14.2 Definitie Overmacht</p>
                <p className="text standard">
                  Onder overmacht wordt in deze algemene leveringsvoorwaarden verstaan naast wat op dat gebied in de wet
                  en jurisprudentie wordt begrepen, alle van buiten afkomende oorzaken, voorzien of niet voorzien,
                  waarop opdrachtnemer of opdrachtgever geen invloed kunnen uitoefenen en waarop opdrachtnemer en/of
                  opdrachtgever zijn verplichtingen niet kan/kunnen nakomen.
                </p>
                <p className="textheader bold">14.3 Overmacht opleverende situaties</p>
                <p className="text standard">
                  Voorbeelden van overmacht opleverende situaties zijn onder andere: uitsluiting, brand, waterschade,
                  natuurrampen, invasie, oorlog, mobilisatie, verkeersbelemmeringen, andere van buiten afkomstige
                  onheilen, restricties die door de overheid zijn ingesteld, vertraging van invoer van grondstoffen of
                  producten, machine onderdelen of elke andere omstandigheid waardoor de normale gang van zaken van
                  ARCTIC LIME Solutions wordt belemmerd ten gevolge van nakoming van het afgesprokenene uit de
                  overeenkomst. Opdrachtnemer heeft het recht zich op overmacht te beroepen, indien een omstandigheid
                  die (verdere) nakoming van de overeenkomst verhindert, intreedt nadat opdrachtnemer zijn verbintenis
                  had moeten nakomen.
                </p>
                <p className="textheader bold">14.4 Opschorting bij overmacht</p>
                <p className="text standard">
                  Beide partijen kunnen verplichtingen uit de overeenkomst geheel of gedeeltelijk opschorten tijdens de
                  periode dat de (tijdelijke) overmacht voortduurt. Indien deze overmachtsperiode langer duurt dan twee
                  maanden zijn beide partijen gerechtigd de overeenkomst met onmiddelijke ingang, zonder rechtelijke
                  tussenkomst, door middel van schriftelijke kennisgeving, te ontbinden. Beide partijen kunnen geen
                  aanspraak maken op enige schadevergoedingen.
                </p>
                <p className="textheader bold">14.5 Gedeeltelijke nakoming bij een overmachtssituatie</p>
                <p className="text standard">
                  Wanneer opdrachtnemer ten tijde van intreden van de overmacht zijn verplichtingen gedeeltelijk is
                  nagekomen en aan het nagekomen zelfstandige waarde toekomt, is opdrachtnemer gerechtigd om het reeds
                  nagekomen en het na te komen gedeelte apart te factureren. Opdrachtgever is gehouden deze factuur te
                  voldoen als ware er sprake is van een afzonderlijke overeenkomst.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Artikel 15<br></br>Wijzigingen en Recht
                </p>
                <p className="textheader bold">15.1 Wijziging van algemene leveringsvoorwaarden</p>
                <p className="text standard">
                  Opdrachtnemer behoudt het recht om deze algemene leveringsvoorwaarden eenzijdig te wijzigen. Deze
                  wijzigingen zijn ook van kracht op reeds afgesloten overeenkomsten. Opdrachtnemer zal de opdrachtgever
                  hiervan schriftelijk op de hoogte stellen indien hij van plan is deze voorwaarden te wijzigen.
                </p>
                <p className="textheader bold">15.2 Ingang wijzigingen</p>
                <p className="text standard">
                  Wijzigingen van de algemene leveringsvoorwaarden zullen na 30 dagen van kracht zijn, ingaande op de
                  dag dat deze wijzigingen zijn aangekondigd.
                </p>
                <p className="textheader bold">15.3 Ontbinden overeenkomst na wijziging</p>
                <p className="text standard">
                  Opdrachtgever is gerechtigd gedurende deze periode van 30 dagen de overeenkomst eenzijdig te ontbinden
                  wanneer deze niet akkoord gaat met de aangekondigde wijzigingen. Opdrachtnemer blijft gerechtigd de
                  tot dat moment gedane werkzaamheden te factureren aan opdrachtgever indien deze de overeenkomst wenst
                  te eindigen.
                </p>
                <p className="textheader bold">15.4 Toegepast recht</p>
                <p className="text standard">
                  Op alle rechtsbetrekkingen waar opdrachtnemer partij bij is, is uitsluitend het Nederlands recht van
                  toepassing. Dit geldt ook wanneer de overeenkomst geheel of in het buitenland wordt uitgevoerd, of
                  wanneer opdrachtgever zich in het buitenland bevindt of daar gevestigd is.
                </p>
                <p className="textheader bold">15.5 Weens Koopverdrag</p>
                <p className="text standard">De toepasselijkheid van het Weens Koopverdrag wordt uitgesloten.</p>
                <section className="whitespace"></section>
                <section className="whitespace"></section>
                <section className="whitespace"></section>
                <section className="whitespace" id="headerusa"></section>
                <p className="termheader">GENERAL TERMS AND CONDITIONS</p>
                <p className="date standard">
                  <em>Valid per 10-07-2023</em>
                </p>
                <p className="disclaimer standard">
                  The terms and conditions specified on this page are applied to every quotation, offer, activity and
                  agreement by ARCTIC LIME Solutions, unless both parties have agreed otherwise through a written
                  agreement.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 1<br></br>Definitions
                </p>
                <p className="textheader bold">1.1 Client</p>
                <p className="text standard">
                  A natural person, instancy or company that wishes to purchase services from ARCTIC LIME Solutions for
                  a money fee.
                </p>
                <p className="textheader bold">1.2 Entrepreneur</p>
                <p className="text standard">ARCTIC LIME Solutions, established in Amsterdam.</p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 2<br></br>Identity
                </p>
                <p className="textheader bold">2.1 Identity</p>
                <p className="text standard">
                  Mr J. Veenstra, trading under the name ARCTIC LIME Solutions; hereafter specified as the
                  'entrepreneur'.
                </p>
                <p className="textheader bold">2.2 Accessibility</p>
                <p className="text standard">
                  Entrepreneur is available 24 hours a day, 7 days a week through{" "}
                  <a href="https://api.whatsapp.com/send?phone=31617014448">WhatsApp</a> and e-mail on the following
                  address: <a href="mailto:arcticlimesolutions@gmail.com">arcticlimesolutions@gmail.com</a>.
                  Entrepreneur uses a standard response time of 1 - 24 hours. Response times are subject to the schedule
                  of entrepreneur and availability. Response times are target times and no rights can be derived from
                  these.{" "}
                </p>
                <p className="textheader bold">2.3 Chamber of Commerce</p>
                <p className="text standard">
                  Entrepreneur has been registered under number 85701319 at the Dutch Chamber of Commerce in Amsterdam.
                </p>
                <p className="textheader bold">2.4 VAT Identification</p>
                <p className="text standard">
                  Entrepreneur is known at the Dutch Tax and Customs Administration under the following VAT number:
                  NL004134441B80{" "}
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 3<br></br>Applicability
                </p>
                <p className="textheader bold">3.1 Applicability of Terms and Conditions</p>
                <p className="text standard">
                  The terms and conditions specified on this page are applied on all offers, quotations, work, contracts
                  and agreements made with/by entrepreneur, unless both parties have explictly agreed otherwise and have
                  created an additional written and signed agreement.
                </p>
                <p className="textheader bold">3.2 Availability and visibility of Terms and Conditions</p>
                <p className="text standard">
                  The terms and conditions set by entrepreneur are available free of charge on the website of ARCTIC
                  LIME Solutions. The terms and conditions are available in both Dutch and English. A reference towards
                  the terms and conditions can be found on all quotations made by entrepreneur.
                </p>
                <p className="textheader bold">3.3 Devation from Terms and Conditions</p>
                <p className="text standard">
                  Devations from the terms and conditions set by entrepreneur are only valid whenever client and
                  entrepreneur have agreed otherwise and have established a written agreement to do so.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 4<br></br>Offers
                </p>
                <p className="textheader bold">4.1 Validity of quotations</p>
                <p className="text standard">
                  Unless notified in writing by entrepreneur, quotations are valid for 14 days, commencing on the
                  quotation date.
                </p>
                <p className="textheader bold">4.2 Expiration of quotations</p>
                <p className="text standard">
                  After the validity of the offer has expired, the quotation will lapse. Entrepreneur does not have to
                  inform the client of this. It is not possible to derive any rights from information from an expired
                  quotation, such prices, activities and/or discounts.
                </p>
                <p className="textheader bold">4.3 Obligations concerning quotations</p>
                <p className="text standard">
                  Quotations are without obligation. The client is under no circumstances obliged to purchase services
                  from entrepreneur after receiving a quotation.
                </p>
                <p className="textheader bold">4.4 Quotation obligation</p>
                <p className="text standard">
                  Entrepreneur reserves the right to choose not to make an offer to the client. Entrepreneur is not
                  obligated in any way to communicate the reason behind the rejection to the client.{" "}
                </p>
                <p className="textheader bold">4.5 Application of quotations to future assignments</p>
                <p className="text standard">
                  An offer made by entrepreneur is not automatically valid for any future assignment. This applies to
                  any discounts received in the past as well.
                </p>
                <p className="textheader bold">4.6 Calculation of costs and working hours</p>
                <p className="text standard">
                  Entrepreneur draws up quotations based on a estimate calculations of hours required in order to carry
                  out the client's assignment as well as possible. Entrepreneur declares to do this in all
                  reasonableness and according to his professional insight. Additional work, services, digital
                  materials, physical materials and working hours are not included in the quotation and will be added
                  separately on the final invoice.
                </p>
                <p className="textheader bold">4.7 Additional Costs</p>
                <p className="text standard">
                  So-called 'additional costs' are not included in quotations. Think of travel costs, accomodation
                  costs, costs that must be paid to external bodies and that are also determined by these parties, such
                  as royalties to BUMA-STEMRA or stock content. All of these costs will be added separately on the final
                  invoice. Entrepreneur is allowed to ask for a pre-payment for these costs from client whenever
                  entrepreneur is unable to pay these up front by himself.
                </p>
                <p className="textheader bold">4.8 Prices</p>
                <p className="text standard">
                  Prices are specified on the pricelist of ARCTIC LIME Solutions, which can be requested free of charge
                  through WhatsApp or e-mail. Prices are, if VAT is appliccable, excluding 21% VAT.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 5<br></br>Agreements
                </p>
                <p className="textheader bold">5.1 Agreement</p>
                <p className="text standard">
                  An agreement between client and entrepreneur has only been properly established when client accepts
                  the quotation extended to him. Client can indicate his acknowledgement by signing the quotation
                  physically or digitally and by returning a signed copy to entrepreneur.
                </p>
                <p className="textheader bold">5.2 Duration of agreement</p>
                <p className="text standard">
                  Agreements are entered for a definitive period of time, unless the nature of the assignment
                  contradicts this or this has been established in writing between client and entrepreneur.
                </p>
                <p className="textheader bold">5.3 Changes in agreement</p>
                <p className="text standard">
                  If during the execution of the agreement it appears that an amendment to the agreement is necessary in
                  order to guarantee a proper execution of the assignment, the entrepreneur will inform the client of
                  this in a timely manner. It is up to the client and the entrepreneur to proceed to the adjustment of
                  the agreement in a timely manner and through mutual consultation.
                </p>
                <p className="textheader bold">5.4 Execution of agreement</p>
                <p className="text standard">
                  Entrepreneur declares to perform the agreement according to his professional insight, best ability,
                  knowledge and craftsmanship, as it should benefit him as a professional in the audiovisual and web
                  development industry. He will do this within the framework of the general terms and conditions, the
                  available time frame and the contents of the quotation that was extended to client. However,
                  entrepreneur cannot guarantee the achievement of the intended result of the client.
                </p>
                <p className="textheader bold">5.5 Performances of work conducted by third parties</p>
                <p className="text standard">
                  Entrepreneur is authorized to have certain activities performed by third parties. Entrepreneur is not
                  obligated to inform client about this.
                </p>
                <p className="textheader bold">5.6 Delivery of required materials</p>
                <p className="text standard">
                  It is the responsibility of the client to ensure that the correct information, briefings, software,
                  physical objects, digital or physical files, activation keys, download links, or other facilities are
                  in the possession of entrepreneur in a timely manner. This also applies to so-called facilities that
                  the client should know are necessary for the proper execution of the agreement.
                </p>
                <p className="textheader bold">5.7 Failure of delivery</p>
                <p className="text standard">
                  If the required materials are not, untimely, or unreasonably delivered by the client, the entrepreneur
                  reserves the right to suspend the execution of the agreement until the client complies with this. In
                  addition, entrepreneur retains the right to charge the extra costs resulting from the delay to the
                  client according to his usual rates and to one-sidedly terminate the agreement if client is unable to
                  present a reasonable timeframe in which he is able to meet his responsibility regarding the delivery
                  of the required materials. Costs and worked hours that have been made up until the point of one-sided
                  termination of the agreement will still be charged to client through a final invoice.
                </p>
                <p className="textheader bold">5.8 Phase-based execution of agreement</p>
                <p className="text standard">
                  Entrepreneur has the right to execute the agreement in phases if he deems this necessary. If this is
                  the case, the entrepreneur is entitled to invoice each separately performed part. If the agreement is
                  executed in phases, the entrepreneur has the right to suspend activities that belong to the next phase
                  until the client has approved the results of the preceding phases in writing.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 6<br></br>Liability
                </p>
                <p className="textheader bold">6.1 Effort Obligation</p>
                <p className="text standard">
                  Liability of entrepreneur towards the client is limited to compliance with the contractual obligations
                  that have been established in the agreemeent, and a so-called 'obligation to execute contractual
                  obligations in his best possible effort' in which entrepreneur makes every effort to perform as agreed
                  upon. Under no circumstancces is client able to claim compensation from entrepreneur other than
                  non-compliance with the aforementioned effort obligation. Client is not entitled to claim any
                  compensation to entrepeneur other than in respect of non-compliance with the intended effort
                  obligation.{" "}
                </p>
                <p className="textheader bold">6.2 Liability and Damages</p>
                <p className="text standard">
                  The liability for any damage whatsoever, caused by attributable shortcomings on behalf of entrepreneur
                  are limited to the amount of the fee or honorarium that entrepreneur has received for its work in the
                  context of that assignment.
                </p>
                <p className="textheader bold">6.3 Indirect Damages</p>
                <p className="text standard">
                  Entrepreneur is not responsible for indirect damage, such as consequential damage, loss of turnover,
                  missed savings, business interruption or immaterial damage.
                </p>
                <p className="textheader bold">6.4 Liability Period</p>
                <p className="text standard">
                  If entrepreneur is liable for any damage, client must report this to entrepreneur in writing within
                  ten days after the incident. After this term, the liability period for entrepreneur towards client
                  lapses.
                </p>
                <p className="textheader bold">6.5 Third-Party Indemnification</p>
                <p className="text standard">
                  Client must hold entrepreneur harmless and free from third parties that are currently, directly or
                  indirectly related to the work of the entrepreneur for the client. If the entrepreneur is approached
                  by a third-party, client is expected to assist the entrepreneur both outside- and in court. All costs
                  and damage on the part of the entrepreneur and its third parties are for full account and risk of the
                  client.
                </p>
                <p className="textheader bold">6.6 Transitional risks upon delivery</p>
                <p className="text standard">
                  Until digital or physical transfer and/or the process of delivering the final product to client, items
                  that are subject of the agreement are at expense and risk of entrepreneur. The risk of loss, damage
                  and depreciation that are part of the agreement is transferred to the client at the time of transfer.
                </p>
                <p className="textheader bold">6.7 Confidentiality</p>
                <p className="text standard">
                  Entrepreneur will carefully keep all information and files it receives from the client under a duty of
                  confidentiality, unless entrepreneur is obliged by law, code of conduct or a professional code to
                  share this information with others.
                </p>
                <p className="textheader bold">6.8 Transport</p>
                <p className="text standard">
                  Entrepreneur cannot be held liable for damage or loss of items such as physical carriers, digital
                  files and other products or objects during transport or shipment by courier service or post. This does
                  not matter whether the shipment is addressed to or sent by client, entrepreneur or third parties.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 7<br></br>Delivery
                </p>
                <p className="textheader bold">7.1 Delivery</p>
                <p className="text standard">
                  Delivery takes place whenever the final product is made available to the client digitally or through a
                  physical carrier. After this so-called delivery, the risk passes on to client as described in section
                  6.6
                </p>
                <p className="textheader bold">7.2 Means of delivery</p>
                <p className="text standard">
                  Delivery takes place in the manner indicated by entrepreneur, unless otherwise agreed by both parties.
                </p>
                <p className="textheader bold">7.3 Shipping costs</p>
                <p className="text standard">
                  If shipping costs are to be paid for the delivery of the (final) product, such as the shipment of
                  physical data carriers, then entrepreneur will add these costs on the quotation. If shipping costs
                  become relevant during the execution of the agreement, the shipping costs will be added to the final
                  invoice.
                </p>
                <p className="textheader bold">7.4 Delivery times</p>
                <p className="text standard">
                  The delivery term of the final product and related work will be carried out by a term specified by
                  entrepreneur. Delivery times that are communicated to the client in writing or by quotation are merely
                  indications. Indicated delivery times cannot be regarded as a strict deadline.
                </p>
                <p className="textheader bold">7.5 Definitive Deadlines</p>
                <p className="text standard">
                  If the delivery or execution period has been exceed, client must give entrepreneur a written notice of
                  default. While doing so, client must still offer entrepreneur a reasonable term to deliver the product
                  or to proceed with the execution of the agreement.
                </p>
                <p className="textheader bold">7.6 Standard Delivery Protocol for video files</p>
                <p className="text standard">
                  Entrepreneur uses a so-called Standard Delivery Protocol for the delivery of video files to the
                  client. The delivery of digital files in the following formats are included in the price of the
                  quotation:
                </p>
                <p className="text standard">Video: MP4, MOV (APR4444XQ), GIF</p>
                <p className="text standard">Audio: WAV, MP3, AIFF (-14LUFS, -16LUFS or -23LUFS) - Stereo </p>
                <p className="text standard">Text/Print: PDF</p>
                <p className="text standard">Photography: JPG, PNG</p>
                <p className="text standard">Motion Graphics: MOV (APR4444XQ plus alpha channels), GIF</p>
                <p className="text standard">Subtitles: SRT or 'Burn-In-Video'</p>
                <p className="text standard">
                  If client wishes to receive a file in a different file format or codec that has not been specified in
                  entrepreneur's Standard Delivery Protocol, he can request entrepeneur to deliver the file in the
                  requested file format and/or codec. Entrepreneur is entitled to charge costs for this that are in line
                  with his price list.{" "}
                </p>
                <p className="textheader bold">7.7 File formats outside of the Standard Delivery Protocol</p>
                <p className="text standard">
                  Entrepreneur is entitled to charge additional costs for the delivery of file formats or codecs outside
                  of the Standard Delivery Protocol for various platforms such as cinemas, streaming services,
                  television stations and printers. The prices are stated on the price list of entrepreneur.
                </p>
                <p className="text standard">
                  This includes delivery (but not limited to) in the following formats: DPX, Broadcast MXF, IMF, DCP,
                  Uncompressed Quicktime, TARGA, TIFF, EXR, DNXHD, and 5.1/7.1 surround sound audiomixes{" "}
                </p>
                <p className="textheader bold">7.8 Transport files and project files</p>
                <p className="text standard">
                  Unless otherwise agreed between client and entrepreneur, entrepreneur will not deliver so-called
                  transport/project files to the client, such as (but not limited to) .pproj, .aep, .psd, .omf, .xml,
                  .edl, .cdl and .aal files.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 8<br></br>Prices
                </p>
                <p className="textheader bold">8.1 Prices</p>
                <p className="text standard">
                  Entrepreneur's fee is based on the rates stated on his price list, and does not depend on project
                  basis.
                </p>
                <p className="textheader bold">8.2 Price changes</p>
                <p className="text standard">
                  If entrepreneur, at the time of concluding the agreement, agrees on a fixed fee, price or rate, then
                  entrepreneur remains entitled to increase his prices over the course of the agreement. If entrepreneur
                  intends to change the fee, price or fee, he must inform the client as soon as possible.
                </p>
                <p className="text standard">
                  If the increase in fee, price or rate takes place within three months after the conclusion of the
                  agreement, the adjacent party may terminate the agreement by means of a written statement, unless:
                </p>
                <p className="text standard">
                  the increase arises from a power or an obligation resting on entrepreneur under Dutch law;
                </p>
                <p className="text standard">
                  the increase is caused by an increase in the price of raw materials, wages, etc. or on other grounds
                  that could not reasonably be foreseen when the agreement was entered into;
                </p>
                <p className="text standard">
                  entrepreneur is still willing to perform the agreement on the exact same price that was originally
                  agreed upon;
                </p>
                <p className="text standard">
                  it is stipulated that the execution of the agreement will be carried out longer than three months
                  after the agreement was established.
                </p>
                <p className="text standard">
                  The client has the right to terminate the agreement if fee, price or rate is increased after more than
                  three months after the agreement was established, unless the agreement specifically notes that
                  execution of the agreement will last longer than 3 months when it was originally agreed upon and
                  signed by both parties.
                </p>
                <p className="text standard">
                  Entrepreneur will inform client as soon as possible in the event of an increase in prices and/or fees.
                  Entrepreneur hereby also indicates a date when these new prices will be effective.
                </p>
                <p className="textheader bold">8.3 Currency</p>
                <p className="text standard">
                  Prices are expressed in euro, exclusive of VAT and other fees/levies, unless indicated otherwise.
                  Prices do not include so-called additional costs, which are described in section 4.7.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 9<br></br>Payment
                </p>
                <p className="textheader bold">9.1 Payment term</p>
                <p className="text standard">
                  Payment must be made within 14 days of the invoice date to the IBAN number provided by entrepreneur.
                  The payment description should match the invoice number on the invoice.
                </p>
                <p className="textheader bold">9.2 Expiry of payment term</p>
                <p className="text standard">
                  After the payment term has expired, statutory interest will be charged to the client, without notice
                  of default being required from entrepreneur.
                </p>
                <p className="textheader bold">9.3 Failure to meet payment obligation</p>
                <p className="text standard">
                  If client fails to comply with the payment obligation, entrepreneur retains to right to charge all
                  judicial, extrajudicial and collection costs incurred by the entrepreneur to client due to
                  non-compliance with the payment obligation.
                </p>
                <p className="textheader bold">9.4 Counterclaims</p>
                <p className="text standard">
                  The client is not authorized to deduct any amount due from a counterclaim made by him.
                </p>
                <p className="textheader bold">9.5 Bankruptcy, guardianship and suspension of payment</p>
                <p className="text standard">
                  In the event that client has experienced bankruptcy, suspension of payments, or if client is placed
                  under guardianship, all claims of entrepreneur and the obligations of client towards entrepreneur are
                  immediately due and payable.
                </p>
                <p className="textheader bold">9.6 Currency</p>
                <p className="text standard">
                  Payment of invoices must be made in euro's, unless client and entrepreneur explicitly have agreed
                  otherwise through writing. If payment occurs in a 'foreign currency' other than euro after mutual
                  written agreement, it is the client's responsibility to ensure that transaction costs and currency
                  exchange costs are paid in full and that the transferred amount exactly matches the invoice amount
                  after being exchanged to euro. If client fails to do so, he is still obligated to pay the remaining
                  due amount, including the currency exchange and transaction costs involved while paying the remaining
                  due amount.
                </p>
                <p className="textheader bold">9.7 Transaction costs for payments from outside the EU/EEA</p>
                <p className="text standard">
                  If client resides outside of the European Union, or the direct European Economic Area, it is possible
                  that additional transaction costs will be charged to client by entrepreneur. Entrepreneur declares not
                  to have any influence regarding the amount of these costs, as they are charge by the bank to
                  entrepreneur and subsequently from him to the client. If the situation arises of a so-called 'world
                  payment', costs will be specified on the quotation. Client understands that the transaction costs on
                  the quotation are subject to change and no means final. The transaction costs on the final invoice
                  are, at all times, considered leading.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 10<br></br>Complaints
                </p>
                <p className="textheader bold">10.1 Complaints</p>
                <p className="text standard">
                  Complaints about the work performed must be reported to entrepreneur in writing by client no later
                  than 10 days after delivery. The client must submit a description of the complaint as detailed as
                  possible, and if possible, substantiate his claim with documents so that entrepreneur is able to
                  respond appropriately to the client's complaint.
                </p>
                <p className="textheader bold">10.2 Courtesy of a justified complaint</p>
                <p className="text standard">
                  If a justication for client's complaint has been granted, entrepreneur has the right to choose from
                  one of the following courtesy options:
                </p>
                <p className="text standard">improving the rejected work, free of charge;</p>
                <p className="text standard">performing the work again, free of charge;</p>
                <p className="text standard">adjustment of the charged fee;</p>
                <p className="text standard">
                  wholly/partially (no longer) performing the work against a proportional refund.
                </p>
                <p className="textheader bold">10.3 Payment obligation after submission of complaint</p>
                <p className="text standard">
                  Submitting a complaint does not suspend the clients playment obligation.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 11<br></br>Termination
                </p>
                <p className="textheader bold">11.1 Cooldown period</p>
                <p className="text standard">
                  Every agreement comes with a so-called 'cooldown' period of 48 hours. This means that client has the
                  right to terminate the agreement, one-sidedly and without having to pay any cost to entrepreneur.
                  However, entrepreneur retains the right to start executing the agreement after the cooldown period has
                  ended in order to be able to guarantee a termination that is free of charge to the client if he
                  decided to terminate the agreement during the cooldown period, unless client asks entrepreneur to
                  start the execution of the agreement right away. If client asks entrepreneur for this 'direct
                  execution' of the agreement through writing, client will be still allowed to terminate the agreement
                  during the 48-hour cooldown period. However, entrepreneur is entitled to charge all of the working
                  hours, costs, material costs and additional costs to client up until the point of termination, as
                  described in section 11.3
                </p>
                <p className="textheader bold">11.2 Termination of agreement</p>
                <p className="text standard">
                  If client does not, not fully, not timely or not properly fulfill his obligations under the agreement,
                  entrepreneur is entitled to dissolve the agreement with immediate effect, unless the shortcoming is of
                  such minor significance that it will not justify the termination of the agreement. Both parties can
                  unilaterally terminate the agreement prematurely if one of the parties' opinion is that the execution
                  of the assignment can no longer take place in accordance with the agreement. This must be communicated
                  to the other party with valid reasons and in writing. If the other party believes the first party's
                  motivation is unclear or insufficiently subtantiated, he is allowed to return a counteroffer or a
                  response to the counterparty, containing a valid motivation of their own. Both parties will have to
                  come to an agreement by themselves and declare they will do the best they possibly can to come to an
                  agreement or a compromise. A valid agreement has only been fully terminated when both parties have
                  agreed and must state this through writing.
                </p>
                <p className="text standard">
                  Entrepreneur is authorized to dissolve the agreement with immediate effect if:
                </p>
                <p className="text standard">
                  entrepreneur has become aware of circumcstances in which entrepreneur may fear that client will not
                  fulfill his obligations;
                </p>
                <p className="text standard">
                  client has been requested to provide security for the payment of its obligations, and this security
                  has not been forthcoming or is deemed insufficient;
                </p>
                <p className="text standard">
                  due to a delay on behalf of the client, entrepreneur can no longer be expected to fulfill the
                  agreement under the original agreed conditions;
                </p>
                <p className="text standard">
                  circumstances arise of such a nature that fulfillment of the agreement is impossible or that unaltered
                  maintenance of the agreement cannot in all reasonableness be expected from entrepreneur;
                </p>
                <p className="text standard">
                  client is declared bankrupt, files a deferment of payment, is placed under guardianship, parts of his
                  property (or his property in whole) has been seized or has deceased.
                </p>
                <p className="textheader bold">11.3 Compensation upon termination of the agreement</p>
                <p className="text standard">
                  Entrepreneur is entitled to compensation based on the working hours, costs and additional costs
                  incurred up to that point if the agreement is terminated.
                </p>
                <p className="textheader bold">11.4 Additional ways of termination (for entrepreneur)</p>
                <p className="text standard">
                  In addition to matters mentioned in section 11.2, entrepreneur is entitled to use his authority to
                  prematurely terminate the agreement whenever circumstances or facts arise that are beyond his control
                  or cannot be attributed to him, such as situations of force majeure and sudden impediment that prevent
                  the completion of the agreement in all reasonableness.
                </p>
                <p className="textheader bold">11.5 Delivery Time</p>
                <p className="text standard">
                  A missed delivery term, or 'deadline' does not count as a valid reason to cancel the agreement.
                </p>
                <p className="textheader bold">11.6 Cancellation in case of late payment</p>
                <p className="text standard">
                  Entrepreneur reserves the right to terminate the agreement immediately in the event of late payment of
                  the client. In this case, entrepreneur retains the right to full payment.
                </p>
                <p className="textheader bold">11.7 Damages upon termination of contract</p>
                <p className="text standard">
                  Entrepreneur is not liable for any damages, compensation or costs suffered by client when entrepreneur
                  dissolves the agreeement.
                </p>
                <p className="textheader bold">11.8 Due and payable</p>
                <p className="text standard">
                  When the agreement is terminated, outstanding claims of the entrepreneur towards client are
                  immediately due and payable.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 12<br></br>Storage and Back-up
                </p>
                <p className="textheader bold">12.1 Storage and back-up of files</p>
                <p className="text standard">
                  As described in section 6.6 of this agreement, the risk of digital and physical files is transferred
                  to the client upon delivery. Although entrepreneur will conduct his best effort possible to ensure the
                  storage and back-up of as many files and projects as possible, this never counts as a back-up
                  guarantee. Entrepreneur is not obligated to save, backup or retain any files related to projects once
                  the project has reached 'completed' status.
                </p>
                <p className="text standard">
                  A project is classifed as 'completed' whenever entrepreneur has delivered the final files to the
                  client, the invoice has been paid in full and the complaint period has expired.
                </p>
                <p className="textheader bold">12.2 Storage of Personal Data</p>
                <p className="text standard">
                  Entrepreneur declares to only save personal- and company related data of client that are required for
                  the execution of the agreement, such as address details, e-mail addresses, VAT and Chamber of Commerce
                  numbers. Entrepreneur saves this data and maintains this data with the greatest possible care Client
                  is entitled to see the data that entrepreneur has saved from him, at all times and free of charge.
                  Client is free to inform entrepreneur to adjust parts of his data or in whole, or to have his
                  information deleted. If the personal data in question is required for the completion of a current
                  agreement, then entrepreneur declares to delete the information as soon as the current agreement has
                  received a 'completed' status.
                </p>
                <p className="textheader bold">12.3 Storage of physical data carriers that belong to client</p>
                <p className="text standard">
                  Entrepreneur uses the greatest possible care towards the correct storage of physical data carriers
                  that have been made available to him by the client. Entrepreneur, however, cannot guarantee the
                  operation of these data carriers and the prevention of any data loss.
                </p>
                <p className="textheader bold">12.4 Return of data carriers that belong to client</p>
                <p className="text standard">
                  After completion of the project, data carriers from the client will be returned to him, unless the
                  client indicates in writing that he does not want to receive them back. If this is the case, client
                  agrees to transfer the ownership of these data carriers to entrepreneur. Under no circumstances does
                  this oblige the entrepreneur to keep, maintain and back-up the data on these carriers. If return
                  shipping costs have not been declared in the quotation, entrepreneur is entitled to charge these
                  seperately with the final invoice. See section 6.8 for liability.
                </p>
                <p className="textheader bold">12.5 Loss of Data</p>
                <p className="text standard">
                  Entrepreneur takes the greatest possible care in storing, backing up and maintaining digital files
                  during the course of the project. However, entrepreneur cannot guarantee technical limitations and/or
                  problems or the irreversible loss of data. No rights and compensation can be derived from loss of
                  data.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 13<br></br>Intellectual Property
                </p>
                <p className="textheader bold">13.1 Intellectual Property</p>
                <p className="text standard">
                  Designs, prototypes, UX/UI Designs, crafted materials, sketches, plans, concepts, interpretations,
                  presentations, deliveries, videoproductions, animations, motion graphics, photographs, code,
                  webdesigns and video edits and all of the other created work by ARCTIC LIME Solutions fall under the
                  copyright of entrepreneur. The copyright is in no way transferable to the client and remains formally
                  and legally in the possession of the entrepreneur. If this copyright is infringed, or if this
                  copyright is claimed as its own by the client, the client in question can be held legally liable for
                  this.
                </p>
                <p className="text standard">
                  Even after a concluded agreement between entrepreneur and client, this does not mean that copyright or
                  direct rights of the entrepreneur's intellectual property can be transferred in any form, either
                  partially or in full.
                </p>
                <p className="text standard">
                  All goods delivered by the entrepreneur in the context of the agreement remain the property of ARCTIC
                  LIME Solutions until the client has properly fulfilled and paid in full what he owes under the
                  agreement. The amount owed also includes: the compensation of all costs and interest, also of earlier
                  and later deliveries and services rendered, as well as claims for damages due to failure to perform.
                </p>
                <p className="text standard">
                  As long as the ownership of the delivered goods has not passed to the client, the latter may not
                  resell, pledge or in any other way encumber that which falls under the retention of title, except
                  within the normal course of his/her business.
                </p>
                <p className="textheader bold">13.2 Use of gained knowledge</p>
                <p className="text standard">
                  Entrepreneur reserves the right to use the knowledge gained through the per- formance of the work for
                  other purposes, insofar as no confidential informa- tion is disclosed to third parties.
                </p>
                <p className="textheader bold">13.3 Intellectual property during a third-party seizure</p>
                <p className="text standard">
                  If third parties seize goods delivered by entrepreneur to the client, or wish to establish or enforce
                  rights thereon, the client is obliged to inform entrepeneur as soon as can reasonably be expected.
                </p>
                <p className="textheader bold">13.4 Copyright infringement</p>
                <p className="text standard">
                  Client indicates that he will refrain from infringing the copyright of entrepreneur.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 14<br></br>Force Majeure
                </p>
                <p className="textheader bold">14.1 Force Majeure</p>
                <p className="text standard">
                  A shortcoming cannot be attributed to the entrepreneur or client if the shortcoming is not due to his
                  fault, law, legal act or generally accepted views. In this case, the parties are not obliged to
                  fulfill the obligations specified in the agreement. Section 14.3 sketches a couple of examples of what
                  can be understood as a 'force majeure'.
                </p>
                <p className="textheader bold">14.2 Definition of Force Majeure</p>
                <p className="text standard">
                  Within these terms and conditions, a force majeure is understood to mean, in addition to what is
                  understood in that area in law in jurisprudence, all external causes, foreseen or unforeseen, over
                  which entrepreneur has no influence and as a result of which entrepreneur is unable to fulfill his
                  obligations.
                </p>
                <p className="textheader bold">14.3 Force Majeure Situations</p>
                <p className="text standard">
                  Examples of force majeure situations include lockout, fire, water damage, natural disasters, war,
                  mobilization, (un)friendly invasion, traffic obstructions, other external calamities, government
                  restrictions, delays in the import of raw materials, machine parts or any other circumstance that the
                  normal course of business of ARCTIC LIME Solutions is hindered as a result of fulfillment of the
                  agreed upon under the agreement. Entrepreneur has the right to invoke force majeure if a circumstance
                  that prevents (further) fulfillment of the agreement occurs after the entrepreneur should have
                  fulfilled his obligation.
                </p>
                <p className="textheader bold">14.4 Suspension of agreement during Force Majeure</p>
                <p className="text standard">
                  Both parties can suspend obligations under the agreement in whole or in part during the period that
                  the (temporary) force majeure continues. If this period of force majeure lasts longer than two months,
                  both parties are entitled to dissolve the agreement with immediate effect, without judicial
                  intervention, by means of written notification. Neither party can claim any damages.
                </p>
                <p className="textheader bold">14.5 Partial performance in a force majeure situation</p>
                <p className="text standard">
                  If entrepreneur has partially fulfilled his obligations at the time of the force majeure and the
                  fulfilled independent value accrues, entrepreneur is entitled to invoice the already fulfilled and the
                  part to be fulfilled separately. Client is obliged to pay this invoice as if there were a separate
                  agreement.
                </p>
                <section className="whitespace"></section>
                <p className="section">
                  Section 15<br></br>Changes and applicable law
                </p>
                <p className="textheader bold">15.1 Changes made to the terms and conditions</p>
                <p className="text standard">
                  Entrepreneur reserves the right to unilaterally change these general terms and conditions of delivery.
                  These changes also apply to agreements already concluded. Entrepreneur will inform the client of this
                  in writing if he intends to change these terms and conditions.
                </p>
                <p className="textheader bold">15.2 Timeframe</p>
                <p className="text standard">
                  Changes made to the terms and conditions will be in effect after 30 days, starting from the day these
                  changes were announced.
                </p>
                <p className="textheader bold">15.3 Termination of agreement after changes to TOC</p>
                <p className="text standard">
                  During this period of 30 days, client is entitled to terminate the agreement unilaterally if he does
                  not agree with the announced changes. Entrepreneur remains entitled to the to invoice work done up to
                  that point to client if he wishes to terminate the agreement.
                </p>
                <p className="textheader bold">15.4 Applicable Law</p>
                <p className="text standard">
                  Dutch law applies exclusively to all legal relationships to which entrepreneur is a party. This also
                  applies if the agreement is performed in full or abroad, or if the client is abroad or is established
                  there.
                </p>
                <p className="textheader bold">15.5 Vienna Sales Convention</p>
                <p className="text standard">
                  The applicability of the 1980 Vienna Sales Convention (CISG) is excluded.
                </p>
                <section className="whitespace"></section>
                <section className="whitespace"></section>
              </section>
            </div>
          </div>
        </>
      )}
      ;{/*PRIVACY STATEMENT*/}
      {priv && (
        <>
        <div className="privbg" ref={privBGIn}></div>
          <div className="privacy">
            <div className="privacycontainer" ref={privAniIn}>
              <div className="language">
                <a href="#privnl" title="Click here for the Privacy Statement in Dutch">
                  <span>
                    Click here to read the Privacy Statement in Dutch. Klik hier om het Privacy Statement in het
                    Nederlands te lezen.
                  </span>
                  <FlagNL className="flag" />
                </a>
                <a href="#privusa" title="Click here for the Privacy Statement in English.">
                  <span>
                    Click here to read the Privacy Statement in English. Klik hier om het Privacy Statement in het
                    Engels te lezen.
                  </span>
                  <FlagUSA className="flag" />
                </a>
              </div>
              <section className="privcontent" onClick={closePriv}>
                <section className="whitespace" id="privnl"></section>
                <p className="privheader">PRIVACY STATEMENT - NEDERLANDS</p>
                <section className="whitespace"></section>
                <p className="text standard">
                  Gegevens die u aan ARCTIC LIME Solutions verstrekt zullen zorgvuldig en vertrouwelijk worden bewaard.
                  ARCTIC LIME Solutions houdt op grond van de Algemene Verordering Gegevensbescherming een register bij
                  met haar verwerkingsactiviteiten. U heeft recht op inzage, correctie en verwijdering van de
                  doorgegeven persoonsgegevens. Wanneer u de website van ARCTIC LIME Solutions bezoekt, is het mogelijk
                  dat informatie over uw gebruik van de website kan worden verzameld door middel het plaatsen van
                  cookies.
                </p>
                <section className="whitespace"></section>
                <p className="text standard">
                  ARCTIC LIME Solutions verklaart hierbij de informatie die voortvloeit uit de cookies niet te
                  gebruiken. Gedeelde persoonlijke informatie met ARCTIC LIME Solutions zullen alleen en uitsluitend
                  gebruikt worden ten behoeve van orderovereenkomsten. Uw gegevens zullen niet worden uitgeleend,
                  verhuurd, verkocht of op een andere manier openbaar worden gemaakt. Daarnaast zal ARCTIC LIME
                  Solutions uw persoonsgegevens niet langer bewaren dan nodig is. U bent gerechtigd om bij de Autoriteit
                  Persoonsgegevens een klacht in te dienen omtrent uw persoonsgegevens. Bij vragen over deze privacy
                  verklaring kunt u contact opnemen met ARCTIC LIME Solutions via e-mail.
                </p>
                <section className="whitespace"></section>
                <section className="whitespace" id="privusa"></section>
                <p className="privheader">PRIVACY STATEMENT - ENGLISH</p>
                <section className="whitespace"></section>
                <p className="text standard">
                  Information you provide to ARCTIC LIME Solutions will be kept carefully and confidentially. ARCTIC
                  LIME Solutions keeps a register of its processing activities on the basis of the General Data
                  Protection Regulation. You have the right to inspect, correct and delete the personal data passed on.
                  When you visit the ARCTIC LIME Solutions website, it is possible that information about your use of
                  the website can be collected by placing cookies.
                </p>
                <section className="whitespace"></section>
                <p className="text standard">
                  ARCTIC LIME Solutions hereby declares not to use the information resulting from the cookies. Personal
                  information shared with ARCTIC LIME Solutions will only and exclusively be used for the purpose of
                  order agreements. Your data will not be lent, rented, sold or made public in any other way. In
                  addition, ARCTIC LIME Solutions will not store your personal data longer than necessary. You are
                  entitled to submit a complaint about your personal data to the Dutch Data Protection Authority. If you
                  have any questions about this privacy statement, please contact ARCTIC LIME Solutions by
                  <a href="mailto:arcticlimesolutions@gmail.com"> email.</a>
                </p>
                <section className="whitespace"></section>
                <section className="whitespace"></section>
                <section className="whitespace"></section>
              </section>
            </div>
          </div>
        </>
      )}
      ;
    </>
  );
};
export default Footer;
