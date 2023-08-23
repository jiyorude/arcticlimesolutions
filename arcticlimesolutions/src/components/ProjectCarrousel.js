import React from "react";
import "../css/carrousel.min.css";
import projects from "../database/work";

const ProjectCarrousel = () => {
  const ProjectBlock = ({ project }) => {
    return (
      <div className="projectblock" style={{ backgroundImage: `url(${project.thumbnail})` }}>
        <h3 className="projtitle">{project.title}</h3>
        <p className="projdescr">{project.short}</p>
      </div>
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
