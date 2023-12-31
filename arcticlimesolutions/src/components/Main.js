import React from "react";
import "../css/home.min.css";
import indexvid from "../video/index.mp4";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Main = () => {
  const [service, setService] = useState(false);
  const [rate, setRate] = useState(false);
  const [project, setProject] = useState(false);

  const styleService = {
    color: service ? "#BA1A50" : "#D0FF14",
    marginTop: service ? "-2px" : "0",
    transition: "margin-top 0.3s ease",
  };

  const styleProject = {
    color: project ? "#BA1A50" : "#D0FF14",
    marginTop: project ? "-2px" : "0",
    transition: "margin-top 0.3s ease",
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
      <motion.main className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <video loading="lazy" autoPlay loop muted className="fullscreen">
          <source src={indexvid} type="video/mp4" />
          Your video does not support fullscreen video.
        </video>
        <h1>Solutions. For every screen.</h1>
      </motion.main>
      <motion.section className="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <ul className="unordered">
          <li>
            <Link to={"/services"} style={{ textDecoration: "none" }}>
              <h6 style={styleService} onMouseEnter={handleService} onMouseLeave={handleService}>
                SERVICES
              </h6>
            </Link>
          </li>
          <li>
            <Link to={"/work"} style={{ textDecoration: "none" }}>
              <h6 style={styleProject} onMouseEnter={handleProject} onMouseLeave={handleProject}>
                PROJECTS
              </h6>
            </Link>
          </li>
          <li>
            <Link to={"/rates"} style={{ textDecoration: "none" }}>
              <h6 style={styleRate} onMouseEnter={handleRate} onMouseLeave={handleRate}>
                RATES
              </h6>
            </Link>
          </li>
        </ul>
      </motion.section>
      <Outlet />
    </>
  );
};

export default Main;
