import React from 'react'
import "./ContactMe.css"
import ContactInfoMe from './ContactInfoMe/ContactInfoMe'
import git from "../../assets/images/github.png"
import email from "../../assets/images/e-mail.png"
import ContactForm from './ContactForm/ContactForm'

const my_mail="vaneke2000@gmail.com"

const ContactMe = () => {
  return (
    <section  className='contact-container'>
      <h5>Contact Me</h5>
      <div className='contact-content'>
      <div style={{ flex:1}}>
          <ContactInfoMe
            iconUrl={email}
            text= {my_mail}
          />
          <ContactInfoMe
            iconUrl={git}
            text= {my_mail}
          />
        </div>
      <div style={{ flex:1}}>
        <ContactForm/>
      </div>


    </div>

    </section>
  )
}

export default ContactMe