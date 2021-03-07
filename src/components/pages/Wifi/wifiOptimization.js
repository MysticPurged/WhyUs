import React from 'react'
import WifiHeroSection from '../../WifiHeroSection'
import ServiceHeader from '../Services/ServiceHeader'
import './Data'
import {Title, WifiObjectOne, WifiObjectTwo, WifiObjectThree } from './Data'
function wifiOptimization() {
    return (
        <div>
            <ServiceHeader{...Title}/>
            <WifiHeroSection{...WifiObjectOne}/>
            <WifiHeroSection{...WifiObjectTwo}/>
            <WifiHeroSection{...WifiObjectThree}/>
        </div>
    )
}

export default wifiOptimization
