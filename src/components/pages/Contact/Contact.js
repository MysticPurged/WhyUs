import React from 'react'
import ContactForm from '../../ContactForm'
import ContactHeader from './ContactHeader'

import { contactObjectOne } from './Data'

function Contact() {
    return (
        <div>
           
            <ContactHeader{...contactObjectOne}/>
            <ContactForm/>
        </div>
    )
}

export default Contact
