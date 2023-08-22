import React from 'react';
import "../css/carrousel.min.css";
import workData from "../database/work.json";

const ProjectCarrousel = () => {
    const ProjectBlock = ({project}) => {
        const blockStyle = {
            backgroundImage: `url(${project.thumbnail})`
        }
        return (
            <div className="projectblock" style={blockStyle}>
                <h3 className="projtitle">{project.title}</h3>
                <p className="projdescr">{project.short}</p>
            </div>
        )
    };
  
    return (
    <main className="carrouselgrid">
      <section className="gridcontent">
        {workData.map((project, index) => (
            <ProjectBlock key={index} project={project} />
        ))}
      </section>
    </main>
  );
}

export default ProjectCarrousel