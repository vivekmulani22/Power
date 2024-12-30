import React from 'react'
import CommercialMain from '../commercial/commercialmain'
import CommercialType from '../commercial/type'
import Howtowork from '../commercial/howtowork'
import Footer from '../components/Footer'

function commercial() {
  return (
    <div>
      <CommercialMain />
     <CommercialType />
     <Howtowork />
     <Footer />
    </div>
  )
}

export default commercial
