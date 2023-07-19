import React from "react";
import "../css/services.min.css";
import Editing from '../image/jpg/services/Editing.jpg';
import MoGraph from "../image/jpg/services/Mograph.jpg";
import Audio from "../image/jpg/services/Audio.jpg";
import Animation from "../image/jpg/services/Animatie.jpg";
import Subtitling from "../image/jpg/services/Subtitling.jpg";

const ServicesContent = () => {
  return (
    <main className="flowroot">
      <section className="servicegrid">
        <div
          className="servicecontent editing"
          style={{
            backgroundImage: `url(${Editing})`,
          }}
        >
          <p className="context">Video Editing</p>
        </div>
        <div
          className="servicecontent mograph"
          style={{
            backgroundImage: `url(${MoGraph})`,
          }}
        >
          <p className="context">Motion Graphics</p>
        </div>
        <div
          className="servicecontent audio"
          style={{
            backgroundImage: `url(${Audio})`,
          }}
        >
          <p className="context">Audio Post</p>
        </div>
        <div
          className="servicecontent animation"
          style={{
            backgroundImage: `url(${Animation})`,
          }}
        >
          <p className="context">Animation</p>
        </div>
        <div
          className="servicecontent subs"
          style={{
            backgroundImage: `url(${Subtitling})`,
          }}
        >
          <p className="context">Subtitling</p>
        </div>
        <div className="servicecontent">
          <p className="context">Translation</p>
        </div>
        <div className="servicecontent">
          <p className="context">Delivery</p>
        </div>
        <div className="servicecontent">
          <p className="context">DVD/Blu-Ray Authoring</p>
        </div>
        <div className="servicecontent">
          <p className="context">File Duplication</p>
        </div>
        <div className="servicecontent">
          <p className="context">Digitization/Upscaling</p>
        </div>
        <div className="servicecontent">
          <p className="context">UX/UI Design</p>
        </div>
        <div className="servicecontent">
          <p className="context">Web/Software Development</p>
        </div>
      </section>
    </main>
  );
};

export default ServicesContent;
