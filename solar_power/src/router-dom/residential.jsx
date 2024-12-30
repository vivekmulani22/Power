import React from 'react'
import ResidentialMain from '../residential/residentialmain'
import ResidentialType from '../residential/type'
import ResidentialHowToWork from '../residential/howtowork'
import Footer from '../components/Footer'

function residential() {
  return (
    <div id='type'>
       <ResidentialMain />
        <ResidentialType />
       <ResidentialHowToWork />
       <Footer />
    </div>
  )
}

export default residential
