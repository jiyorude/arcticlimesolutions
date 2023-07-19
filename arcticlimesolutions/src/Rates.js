import React from 'react';
import Header from './components/Header';
import RatesContent from './components/RatesContent';
import FooterAlt from './components/FooterAlt';

const Rates = () => {
  return (
    <>
    <Header />
    <RatesContent />
    <FooterAlt selectedID={0}/>
    </>
  )
}

export default Rates