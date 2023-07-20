import React from "react";
import { useState } from "react";
import "../css/services.min.css";
import Editing from '../image/jpg/services/Editing.jpg';
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

const colorDB = {
  colors: [
    "#D0FF14",
    "#BA1A50",
    "#32A0AE",
    "#32B156",
    "#9DE637",
  ]
};

const ServicesContent = () => {

  const [coloring, setColoring] = useState(colorDB.colors[0]);

  const handleColor = () => {
    const randomColor = Math.floor(Math.random()  * colorDB.colors.length);
    setColoring(colorDB.colors[randomColor]);
  };

  const returnColor = {
    color: "#FAFAFA"
  };
  
  return (
    <main className="flowroot white">
      <section className="servicegrid">
        <div
          className="servicecontent editing"
          style={{
            backgroundImage: `url(${Editing})`,
          }}
        >
          <p
            className="context"
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
          >
            Video Editing
          </p>
        </div>
        <div
          className="servicecontent mograph"
          style={{
            backgroundImage: `url(${MoGraph})`,
          }}
        >
          <p
            className="context"
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
            style={{ color: coloring ? coloring : returnColor.color }}
            onMouseEnter={handleColor}
            onMouseLeave={() => setColoring("")}
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
          <p className="context" style={{color: coloring ? coloring : returnColor.color}} onMouseEnter={handleColor} onMouseLeave={() => setColoring("")}>Web/Software Development</p>
        </div>
      </section>
    </main>
  );
};

export default ServicesContent;
