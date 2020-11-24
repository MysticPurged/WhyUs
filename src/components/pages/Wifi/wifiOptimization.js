import React from 'react'
import WifiHeroSection from '../../WifiHeroSection'
import './Data'
import { WifiObjectOne } from './Data'
function wifiOptimization() {
    return (
        <div>
            <WifiHeroSection{...WifiObjectOne}/>
        </div>
    )
}

export default wifiOptimization
