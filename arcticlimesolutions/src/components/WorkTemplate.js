import React from 'react';
import "../css/worktemplate.min.css";
import HeaderAlt from "../components/HeaderAlt";
import FooterAlt from './FooterAlt';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const WorkTemplate = ({ projects}) => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(projectId));

  useEffect(() => {
    if (!project) {
      navigate("/404");
    }
  }, [project, projectId, navigate])

  if (!project) {
    return null;
  }
  
  return (
    <>
      <HeaderAlt />
      <motion.section className="workarea" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacitiy: 0 }}>
        <motion.section
          className="workdescr scrollbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacitiy: 0 }}
        >
          <p className='article'>
           {project.text}
          </p>
        </motion.section>
        <motion.section
          className="backgroundvideo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacitiy: 0 }}
        >
          <video loading="lazy" autoPlay loop muted className="bgprojectvid">
            <source src={project.video} type="video/mp4" />
            Your video does not support fullscreen video.
          </video>
        </motion.section>
        <motion.section className="clientinfo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacitiy: 0 }}>
          <p className="clientname">
            {project.client}
          </p>
        </motion.section>
      </motion.section>
      <motion.section className="roleinfo"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <p className="workrole">
          {project.roleOne}
          <br />
          {project.roleTwo}
          <br />
          {project.roleThree}
        </p>
      </motion.section>
      <FooterAlt selectedID={3} />
    </>
  );
}

export default WorkTemplate;