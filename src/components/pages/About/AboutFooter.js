import React from 'react'
import './AboutFooter.css'
import {GoldBar} from '../../Goldbar'

function AboutFooter({ lightBg, topLine, lightText, lightTextDesc, headLine, description,description2, buttonLabel, img, alt, imgStart,title, image1, image2, image3, name1, name2, name3, role1, role2,role3, barImage}) {
    return (
        <>
           <div className = {lightBg ? 'about__hero-section' : 'about__hero-section darkBg'}>
                <div className="about-container">
                    <div className="about-row-heading">
                        <h1 className={lightText ? 'heading' : 'heading dark'}><GoldBar image = {barImage}></GoldBar>{title}</h1>
                    </div>
                    <div className="about-row about__hero-row" style={{display : 'flex', flexDirection : imgStart == 'start' ? 'row-reverse' : 'row'}}>
                        <div className="about-col">
                            <div className="about__hero-img-wrapper">
                                
                            <img src={image1} alt={alt} className="about__hero-img"/>
                            <h1 className = {lightText? 'Name' : 'Name dark'}>Cameron Keylock</h1>
                            </div>
                        </div>
                        <div className="about-col">
                            <div className="about__hero-img-wrapper">
                                
                            <img src={image2} alt={alt} className="about__hero-img"/>
                            <h1 className = {lightText? 'Name' : 'Name dark'}>Thashil Maharaj</h1>
                            </div>
                        </div>
                        <div className="about-col">
                            <div className="about__hero-img-wrapper">
                                <img src={image3} alt={alt} className="about__hero-img"/>
                                <h1 className = {lightText? 'Name' : 'Name dark'}>Herman Woest</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
        
    )
}

export default AboutFooter
