import React from "react";
import "../css/carrousel.min.css";
import projects from "../database/work";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCarrousel = () => {
  const ProjectBlock = ({ project }) => {
    return (
      <Link to={`/project/${project.id}`}>
      <motion.div
        className="projectblock"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3 className="projtitle">{project.title}</h3>
        <p className="projdescr">{project.short}</p>
      </motion.div>
      </Link>
    );
  };

  return (
    <main className="carrouselgrid">
      <section className="gridcontent">
        {projects.map((project, index) => (
          <ProjectBlock key={index} project={project} />
        ))}
      </section>
    </main>
  );
};

export default ProjectCarrousel;
