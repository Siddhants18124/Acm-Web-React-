import React from 'react'
import '../Navbar/Navbar.css'
import Tweet from '../../assets/images/twitter.png'
import Insta from '../../assets/images/insta.png'
import Linkedin from '../../assets/images/linkedin.png'
import Tops from '../../assets/images/tops.png'
import Bottoms from '../../assets/images/bottoms.png'
import Vector from '../../assets/images/vector.png'
import Pic1 from '../../assets/images/pic1.jpg'
import Pic2 from '../../assets/images/pic2.jpg'
import Pic3 from '../../assets/images/pic3.jpg'
import Pic4 from '../../assets/images/pic4.jpg'
import Topright from '../../assets/images/topright.png'
import Bottomleft from '../../assets/images/bottomleft.png'

function Hero() {
    return (
        <>
            {/* <!-- hidden sidebar starts --> */}
            <div class="main_box">
                <input type="checkbox" id="check" />
                <div class="btn_one">
                    <label for="check">
                        <i class="fa-solid fa-bars"></i>
                    </label>
                </div>

                <div class="sidebar_menu">
                    <div class="logo">
                        <a href="#">ACM.BMU</a>
                    </div>

                    <div class="btn_two">
                        <label for="check">
                            <i class="fa-solid fa-xmark"></i>
                        </label>
                    </div>

                    <div class="menu">
                        <ul>
                            <li>
                                <a href="#home">HOME</a>
                            </li>
                            <li>
                                <a href="#aboutus">ABOUT US</a>
                            </li>
                            <li>
                                <a href="#events">EVENTS</a>
                            </li>
                            <li>
                                <a href="#contactus">CONTACT US</a>
                            </li>
                            <li>
                                <a href="gallery.html">GALLERY</a>
                            </li>
                        </ul>
                    </div>

                    <div class="social_media">
                        <ul>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </ul>
                    </div>
                </div>
            </div >
            {/* <!-- hidden sidebar ends --> */}
            <main>
                <div class="home">
                    <div class="name">
                        <div class="box">
                            <h1 class="heading-big">ACM.BMU</h1>
                            <h1 class="heading-big">STUDENTS CHAPTER</h1>
                            <div class="bline"></div>
                        </div>
                        <div class="sph">
                            <img srcSet={Tops} class="ones" />
                            <img srcSet={Bottoms} class="twos" />
                        </div>
                    </div>
                    <div class="vecone">
                        <img srcSet={Vector} />
                    </div>
                    <div class="social">
                        <div class="twit">
                            <a href="https://twitter.com/acm_bmu" target="_blank">
                                <img srcSet={Tweet} />
                            </a>
                        </div>
                        <div class="insta">
                            <a href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                                <img srcSet={Insta} />
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://www.linkedin.com/company/bmu-acm-student-chapter/" target="_blank">
                                <img srcSet={Linkedin} />
                            </a>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="scrol">
                        <a href="#aboutus"><i class="fa-solid fa-chevron-down"></i></a>
                        <a href="#aboutus"><i class="fa-solid fa-chevron-down"></i></a>
                        <a href="#aboutus"><i class="fa-solid fa-chevron-down"></i></a>
                    </div>
                </div>
                <div class="about" id="aboutus">
                    <div class="info">
                        <h1 id="acm">ABOUT US</h1>
                        <div class="linee"></div>
                        <div class="aboutacm">
                            <p>
                                The Association for Computing Machinery is a multi-faceted
                                technical chapter which focuses on bringing up the community of
                                computer enthusiasts together to promote innovation. From the
                                celebration of open source Hacktoberfest workshop to hands-on Game
                                Development, from Graphic Designing to intense Coding, from all
                                the fun events to major Tech talks, everything you find is here at
                                BMU ACM!
                            </p>
                        </div>
                        <div class="socials">
                            <a href="https://twitter.com/acm_bmu" target="_blank">
                                <img srcSet={Tweet} class="twi" />
                            </a>
                            <a href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                                <img srcSet={Insta} class="ins" />
                            </a>
                            <a href="https://www.linkedin.com/company/bmu-acm-student-chapter/" target="_blank">
                                <img srcSet={Linkedin} class="lin" />
                            </a>
                        </div>
                    </div>
                    <div class="part">
                        <div class="s-one">
                            <img srcSet={Topright} />
                        </div>
                        <div class="s-two">
                            <img srcSet={Bottomleft} />
                        </div>
                        <div class="gallery">
                            <div class="first">
                                <img srcSet={Pic1} id="picone" />
                                <img srcSet={Pic2} />
                                <img srcSet={Pic3} />
                                <img srcSet={Pic4} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>

    )
}

export default Hero