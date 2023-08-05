import React from 'react';
import HeaderAlt from './components/Header';
import RatesContent from './components/RatesContent';
import FooterAlt from './components/FooterAlt';

const Rates = () => {
  return (
    <>
    <HeaderAlt />
    <RatesContent />
    <FooterAlt selectedID={0}/>
    </>
  )
}

export default Rates