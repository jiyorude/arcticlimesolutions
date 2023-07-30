import React from "react";
import { useState } from "react";
import "../css/services.min.css";
import serviceData from "../database/services.json";
import Editing from "../image/jpg/services/Editing.jpg";
import MoGraph from "../image/jpg/services/Mograph.jpg";
import Audio from "../image/jpg/services/Audio.jpg";
import Animation from "../image/jpg/services/Animatie.jpg";
import Subtitling from "../image/jpg/services/Subtitling.jpg";
import Delivery from "../image/jpg/services/Delivery.jpg";
import Authoring from "../image/jpg/services/Authoring.jpg";
import Duplication from "../image/jpg/services/Duplicatie.jpg";
import UXUI from "../image/jpg/services/UX.jpg";
import WebDev from "../image/jpg/services/Web.jpg";
import Upscale from "../image/jpg/services/Upscale.jpg";
import Translation from "../image/jpg/services/Translation.jpg";
import { motion } from "framer-motion";

const colorDB = {
  colors: ["#D0FF14", "#BA1A50", "#32A0AE", "#32B156", "#9DE637"],
};

const ServicesContent = () => {
  const [colors, setColors] = useState(Array(12).fill("#FAFAFA"));
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setTimeout(() => {
      document.body.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  };

  const closeModal = () => {
    setTimeout(() => {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    setTimeout(() => {
      setSelectedItem(null);
    }, 300);
  };

  const handleColor = (index) => {
    const randomColorIndex = Math.floor(Math.random() * colorDB.colors.length);
    const randomColor = colorDB.colors[randomColorIndex];
    const newColors = [...colors];
    newColors[index] = randomColor;
    setColors(newColors);
  };

  const handleMouseLeave = (index) => {
    const newColors = [...colors];
    newColors[index] = "#FAFAFA";
    setColors(newColors);
  };

  return (
    <motion.main className="flowroot white" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}>
      <section className="servicegrid">
        <div
          className="servicecontent editing"
          style={{
            backgroundImage: `url(${Editing})`,
            position: "relative",
          }}
        >
          <p
            className="context"
            style={{ color: colors[0] }}
            onMouseEnter={() => {
              handleColor(0);
            }}
            onMouseLeave={() => {
              handleMouseLeave(0);
            }}
            onClick={() => handleItemClick(serviceData[0])}
          >
            Video Editing
          </p>
        </div>
        <div
          className="servicecontent mograph"
          style={{
            backgroundImage: `url(${MoGraph})`,
            position: "relative",
          }}
        >
          <p
            className="context"
            style={{ color: colors[1] }}
            onMouseEnter={() => {
              handleColor(1);
            }}
            onMouseLeave={() => {
              handleMouseLeave(1);
            }}
            onClick={() => handleItemClick(serviceData[1])}
          >
            Motion Graphics
          </p>
        </div>

        <div
          className="servicecontent audio"
          style={{
            backgroundImage: `url(${Audio})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[2] }}
            onMouseEnter={() => handleColor(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => handleItemClick(serviceData[2])}
          >
            Audio Post
          </p>
        </div>
        <div
          className="servicecontent animation"
          style={{
            backgroundImage: `url(${Animation})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[3] }}
            onMouseEnter={() => handleColor(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            onClick={() => handleItemClick(serviceData[3])}
          >
            Animation
          </p>
        </div>
        <div
          className="servicecontent subs"
          style={{
            backgroundImage: `url(${Subtitling})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[4] }}
            onMouseEnter={() => handleColor(4)}
            onMouseLeave={() => handleMouseLeave(4)}
            onClick={() => handleItemClick(serviceData[4])}
          >
            Subtitling
          </p>
        </div>
        <div
          className="servicecontent translation"
          style={{
            backgroundImage: `url(${Translation})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[5] }}
            onMouseEnter={() => handleColor(5)}
            onMouseLeave={() => handleMouseLeave(5)}
            onClick={() => handleItemClick(serviceData[5])}
          >
            Translation
          </p>
        </div>

        <div
          className="servicecontent delivery"
          style={{
            backgroundImage: `url(${Delivery})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[6] }}
            onMouseEnter={() => handleColor(6)}
            onMouseLeave={() => handleMouseLeave(6)}
            onClick={() => handleItemClick(serviceData[6])}
          >
            Delivery
          </p>
        </div>
        <div
          className="servicecontent authoring"
          style={{
            backgroundImage: `url(${Authoring})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[7] }}
            onMouseEnter={() => handleColor(7)}
            onMouseLeave={() => handleMouseLeave(7)}
            onClick={() => handleItemClick(serviceData[7])}
          >
            DVD/Blu-Ray Authoring
          </p>
        </div>
        <div
          className="servicecontent duplication"
          style={{
            backgroundImage: `url(${Duplication})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[8] }}
            onMouseEnter={() => handleColor(8)}
            onMouseLeave={() => handleMouseLeave(8)}
            onClick={() => handleItemClick(serviceData[8])}
          >
            File Duplication
          </p>
        </div>
        <div
          className="servicecontent upscale"
          style={{
            backgroundImage: `url(${Upscale})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[9] }}
            onMouseEnter={() => handleColor(9)}
            onMouseLeave={() => handleMouseLeave(9)}
            onClick={() => handleItemClick(serviceData[9])}
          >
            Digitization/Upscaling
          </p>
        </div>
        <div
          className="servicecontent uxui"
          style={{
            backgroundImage: `url(${UXUI})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[10] }}
            onMouseEnter={() => handleColor(10)}
            onMouseLeave={() => handleMouseLeave(10)}
            onClick={() => handleItemClick(serviceData[10])}
          >
            UX/UI Design
          </p>
        </div>
        <div
          className="servicecontent webdev"
          style={{
            backgroundImage: `url(${WebDev})`,
          }}
        >
          <p
            className="context"
            style={{ color: colors[11] }}
            onMouseEnter={() => handleColor(11)}
            onMouseLeave={() => handleMouseLeave(11)}
            onClick={() => handleItemClick(serviceData[11])}
          >
            Web/Software Development
          </p>
        </div>
      </section>
      {/*MODAL*/}
      {selectedItem && (
        <>
          <div className="modalcontainer" onClick={closeModal}>
            <h2 className="modalheader">{selectedItem.title}</h2>
            <p className="modaldesc">{selectedItem.description}</p>
            <p className="modaltxt">{selectedItem.text}</p>
            <p className="modalclose">Click anywhere in this purple block to go back.</p>
          </div>
        </>
      )}
    </motion.main>
  );
};

export default ServicesContent;
