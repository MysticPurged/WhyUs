import React from 'react'
import AboutHeroSection from '../../AboutHeroSection'
import ServicePanel from '../../ServicePanel'
import Welcome from '../../Welcome'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import {aboutObjectOne} from './Data'
import {aboutObjectTwo} from './Data'
import {aboutObjectThree} from './Data'

function About() {
    return (
        <>
         <AboutHeader/>
         <AboutHeroSection{...aboutObjectOne}/> 
         <AboutHeroSection{...aboutObjectTwo}/> 
         <AboutFooter{...aboutObjectThree}/>
        
          
        </>
    )
}

export default About
