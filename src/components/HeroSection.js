import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css';
import {GoldBar} from './Goldbar';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headLine, description,description2, buttonLabel, img, alt, imgStart, barImage
}) {
    return (
        <>
           <div className = {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{display : 'flex', flexDirection : imgStart == 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                
                      
                                <div className="top-line">{topLine}</div>
                       
                                <h1 className = {lightText ? 'heading' : 'heading dark'}><GoldBar image = {barImage}></GoldBar>{headLine}</h1>
                                <p className = {lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                               
                                <p className = {lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description2}</p>
                                
                                <Link to ="/about" className='homeButton'>
                                    <Button buttonSize='btn==wide' buttonColor='grey'>{buttonLabel}</Button>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default HeroSection