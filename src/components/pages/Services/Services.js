import React from 'react'
import AboutHeroSection from '../../AboutHeroSection'
import {serviceObjectFour, serviceObjectOne, serviceObjectThree, serviceObjectTwo} from './Data'
import ServiceHeader from './ServiceHeader'
function Services() {
    return (
        <>
        <ServiceHeader/>
           <AboutHeroSection{...serviceObjectOne}/> 
           <AboutHeroSection{...serviceObjectTwo}/> 
           <AboutHeroSection{...serviceObjectThree}/> 
           <AboutHeroSection{...serviceObjectFour}/> 
        </>
    )
}

export default Services
