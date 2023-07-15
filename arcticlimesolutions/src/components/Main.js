import React from 'react'
import "../css/home.min.css";
import indexvid from '../video/index.mp4';
import { useState } from 'react';

const Main = () => {
  const [service, setService] = useState(false);
  const [rate, setRate] = useState(false);
  const [project, setProject] = useState(false);

  const styleService = {
    color: service ? "#BA1A50" : "#D0FF14",
    marginTop: service ? "-2px" : "0",
    transition: "margin-top 0.3s ease"
  };

  const styleProject = {
    color: project ? "#BA1A50" : "#D0FF14",
    marginTop: project ? "-2px" : "0",
    transition: "margin-top 0.3s ease"
  };

  const styleRate = {
    color: rate ? "#BA1A50" : "#D0FF14",
    marginTop: rate ? "-2px" : "0",
    transition: "margin-top 0.3s ease",
  };

  const handleService = () => {
    setService(!service);
  };

  const handleRate = () => {
    setRate(!rate);
  };

  const handleProject = () => {
    setProject(!project);
  };
  
  return (
    <>
      <main className="container">
        <video autoPlay loop muted>
          <source src={indexvid} type="video/mp4" />
          Your video does not support fullscreen video.
        </video>
        <h1>Solutions. For every screen.</h1>
        <section className="menu">
          <ul>
            <li>
              <h6 
              style={styleService}
              onMouseEnter={handleService}
              onMouseLeave={handleService}>
                SERVICES</h6>
            </li>
            <li>
              <h6
              style={styleProject}
              onMouseEnter={handleProject}
              onMouseLeave={handleProject}>PROJECTS</h6>
            </li>
            <li>
              <h6
              style={styleRate}
              onMouseEnter={handleRate}
              onMouseLeave={handleRate}>RATES</h6>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main