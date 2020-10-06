import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import{MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css'
import './animate.css'

import {IconContext} from 'react-icons/lib'


function Navbar(image_logo) {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);   
    const closeMobileMenue = () => setClick(false);
    image_logo = 'images/Group 12.png'
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton)


    return (
        <>
        <IconContext.Provider value= {{color : '#ffffff'}}>
            <div className="navbar fadeInUp">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenue}>
                       <img className='navbar-logo-image'  src={image_logo} alt="logo"/>
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links"  onClick={closeMobileMenue}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links"  onClick={closeMobileMenue}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links"  onClick={closeMobileMenue}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links"  onClick={closeMobileMenue}>
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
