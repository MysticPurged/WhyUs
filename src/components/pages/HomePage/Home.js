import React from 'react'
import HeroSection from '../../HeroSection'
import ServicePanel from '../../ServicePanel'
import Welcome from '../../Welcome'
import OurWork from '../../OurWork'
import {homeObjOne} from './Data'
import {homeObjTwo} from './Data'
import {homeObjThree} from './Data'
function Home() {
    return (
        <>
         <Welcome/> 
          <HeroSection{...homeObjOne}/> 
          <ServicePanel{...homeObjTwo}/>
          <OurWork{...homeObjThree}/>
          
        </>
    )
}

export default Home
