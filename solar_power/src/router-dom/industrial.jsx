import React from 'react';
import IndustrialMain from '../industrial/industrialmain';
import IndustrialTypes from '../industrial/type';
import IndustrialHowToWork from '../industrial/howtowork';
import Footer from '../components/Footer';

function Industrial() {
  return (
    <div>
      <IndustrialMain />
      <IndustrialTypes />
      <IndustrialHowToWork />
      <Footer />
    </div>
  );
}

export default Industrial;
