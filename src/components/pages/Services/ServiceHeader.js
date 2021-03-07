import React from 'react'
import './ServiceHeader.css'

function ServiceHeader({serviceTitle}) {
    return (
        <>
            <div className="service_header">
                <div className="service-title">
                <h1>{serviceTitle}</h1>
                </div>
                
            </div>
        </>
    )
}

export default ServiceHeader
