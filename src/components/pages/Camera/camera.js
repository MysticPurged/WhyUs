import React from 'react'
import WifiHeroSection from '../../WifiHeroSection'
import ServiceHeader from '../Services/ServiceHeader'
import wifiOptimization from '../Wifi/wifiOptimization'
import {Title, CameraObjectOne, CameraObjectTwo} from './Data'
function camera() {
    return (
        <div>
            <ServiceHeader{...Title}/>
            <WifiHeroSection{...CameraObjectOne}/>
            <WifiHeroSection{...CameraObjectTwo}/>
        </div>
    )
}

export default camera
