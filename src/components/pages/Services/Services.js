import React from 'react'
import AboutHeroSection from '../../AboutHeroSection'
import ServiceHeroSection from '../../ServiceHeroSection'
import {serviceObjectFive, serviceObjectFour, serviceObjectOne, serviceObjectThree, serviceObjectTwo} from './Data'
import ServiceHeader from './ServiceHeader'
function Services() {
    return (
        <>
        <ServiceHeader/>
           <ServiceHeroSection{...serviceObjectOne}/> 
           <ServiceHeroSection{...serviceObjectTwo}/> 
           <ServiceHeroSection{...serviceObjectThree}/> 
           <ServiceHeroSection{...serviceObjectFour}/> 
   
        </>
    )
}

export default Services
