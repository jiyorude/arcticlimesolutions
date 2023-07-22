import React from 'react'
import HeaderAlt from './components/HeaderAlt'
import FooterAlt from "./components/FooterAlt";
import ServicesContent from './components/ServicesContent';

const Services = () => {
  return (
    <>
    <HeaderAlt />
    <ServicesContent />
    <FooterAlt selectedID={0} />
    </>
  )
}

export default Services