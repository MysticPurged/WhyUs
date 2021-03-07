import React from 'react'
import WifiHeroSection from '../../WifiHeroSection'
import ServiceHeader from '../Services/ServiceHeader'
import {CableObjectTwo, CableObjectOne, CableObjectThree, Title} from  './Data'

function cableManagement() {
    return (
        <div>
            <ServiceHeader{...Title}/>
            <WifiHeroSection{...CableObjectOne}/>
            <WifiHeroSection{...CableObjectTwo}/>
            <WifiHeroSection{...CableObjectThree}/>
        </div>
    )
}

export default cableManagement
