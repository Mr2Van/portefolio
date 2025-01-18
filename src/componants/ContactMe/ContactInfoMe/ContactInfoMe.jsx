import React from 'react'
import "./ContactInfoMe.css"

const ContactInfoMe = ( {iconUrl, text}) => {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
            <img src={iconUrl} alt={text}/>

        </div>

        <p>{text}</p>
    </div>
  )
}

export default ContactInfoMe