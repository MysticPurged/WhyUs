import React from 'react'
import './ContactHeader.css'

function ContactHeader({image, title}) {
    return (
        <>
          <div className="contact-title">
            <h1>{title}</h1>      
        </div>  
        <div className="contact-image">
        <img   src={image} alt="image"/>
        </div>
        </>
    )
}

export default ContactHeader
