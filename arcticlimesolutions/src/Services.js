import React from 'react'
import Header from './components/Header'
import FooterAlt from "./components/FooterAlt";
import ServicesContent from './components/ServicesContent';

const Services = () => {
  return (
    <>
    <Header />
    <ServicesContent />
    <FooterAlt selectedID={0} />
    </>
  )
}

export default Services