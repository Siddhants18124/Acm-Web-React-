import React from 'react'
import './Navbar.css'
import Logo from '../../assets/images/LOGO.png'

function Navbar() {
    return (
        <header>
            <div class="header">
                <a href="index.html" class="logo">
                    <img srcSet={Logo} />
                </a>
                <div class="pages">
                    <a href="#home">HOME</a>
                    <a href="#aboutus">ABOUT US</a>
                    <a href="#events">EVENTS</a>
                    <a href="#contactus">CONTACT US</a>
                    <a href="../gallery2/gallery.html">GALLERY</a>
                </div>
                <div class="community">
                    <a href="https://discord.com/invite/7XNFKPG5C4" target="_blank" class="button">COMMUNITY</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar