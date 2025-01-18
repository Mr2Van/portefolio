import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import MobileNav from './MobileNav/MobileNav'


const Navbar = () => {
    const [openMenu, setOpenMenu] =useState(false)

    const toggleMenu =() => {
        setOpenMenu(!openMenu);
    };
    
  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <span className='logo'>Van Eke</span>

                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>work Experience</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact Me</a>
                    </li>

                    <button className='contact-btn' onClick={() =>{}}>
                        Hire Me
                    </button>
                </ul>
                <button className='menu-btn' onClick={toggleMenu} >
                    <span
                     class={"material-symbols-outlined"}
                     style={{fontSize:"1.8rem"}}
                    
                    >{openMenu ? "close":"menu"}</span> 

                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar