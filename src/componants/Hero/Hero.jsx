import './Hero.css'
import logo from "../../assets/react.svg"
import dev from "../../assets/images/developer.jpg"
import css from "../../assets/images/css-3.png"
import html from "../../assets/images/html-5.png"
import js from "../../assets/images/js.png"



import React from 'react'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend  Developer | Transforming Ideas into Seanless and
                Visually Stunning Web Solutions
            </p>

        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src={logo} alt=''/>
                </div>
                <img src={dev} alt=''/>

            </div>

            <div>

                <div className='tech-icon'>
                    <img src={css} style={{ width: '50px', height: '50px' }} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={html} style={{ width: '50px', height: '50px' }} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={js} style={{ width: '50px', height: '50px' }} alt=''/>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Hero