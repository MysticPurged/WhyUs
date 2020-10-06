import React from 'react'
import './OurWork.css'
import {GoldBar} from './Goldbar'

function OurWork({ lightBg, topLine, lightText, lightTextDesc, headLine, description,description2, buttonLabel, img, alt, imgStart,title, image1, image2, image3,image4, name1, name2, name3, role1, role2,role3, barImage}) {
    return (
        <>
            <div className = {lightBg ? 'our-work__hero-section' : 'our-work__hero-section darkBg'}>
                <div className="our-work-container">
                    <div className="our-work-row-heading">
                        <h1 className={lightText ? 'heading' : 'heading dark'}><GoldBar image = {barImage}></GoldBar>{title}</h1>
                    </div>

                </div>
            </div>  
        </>
    )
}

export default OurWork
