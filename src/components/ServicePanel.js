import React from 'react'
import {Link} from 'react-router-dom'
import './ServicePanel.css'
import {GoldBar} from './Goldbar'
function ServicePanel({title, icon1, icon2, icon3, icon4, barImage}) {
    return (
        <>
            <div className='services-hero'>
                <div className="services-container">
                    <div className="services-row">
                         <div className="services-title">
                            <h1><GoldBar image = {barImage}></GoldBar>{title}</h1>
                        </div>   
                    </div>
                    <div className="services-row">
                            <div className="services-col">
                                <Link to='/cableManagement'>
                                <img src={icon1} alt="" className="service_image"/>
                                </Link>
                            </div>
                            <div className="services-col">
                                <Link to='/services'>
                                <img src={icon2} alt="" className="service_image"/>
                                </Link>
                            </div>
                            <div className="services-col">
                                <Link to = '/services'>
                                <img src={icon3} alt="" className="service_image"/>
                                </Link>
                            </div>
                            <div className="services-col">
                                <Link to = '/wifiOptimization'>
                                <img src={icon4} alt="" className="service_image"/>
                                </Link>
                            </div>
                       
                    </div>
                    </div>
            </div>
        </>
    )
}

export default ServicePanel
