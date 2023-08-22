import React from 'react';
import Header from './components/Header';
import FooterAlt from './components/FooterAlt';
import ProjectCarrousel from './components/ProjectCarrousel';

const Work = () => {
  return (
    <>
    <Header />
    <ProjectCarrousel />
    <FooterAlt selectedID={0} />
    </>
  )
}

export default Work