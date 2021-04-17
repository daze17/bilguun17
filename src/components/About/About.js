import React from 'react'
import './About.css'
import moon from '../../Img/full moon.svg'
import Skills from '../Skills/Skills'
import { Link } from 'react-router-dom'


function About( darkMode ) {
    return(
        <div id="About" className="about">
            <div  className="bg-svg-wrapper">
            <svg
                class="curve"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                >
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
            </div>
                <div className="about-container">
                    <div className="about-wrapper">
                        {darkMode ? <img src={moon} className="child moon" alt="moon"/> : <img src={moon} className="child moon" alt="moon"/>}
                        <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="earth">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M746.487 600C780.521 541.165 800 472.857 800 400C800 179.086 620.914 0 400 0C179.086 0 0 179.086 0 400C0 472.857 19.4789 541.165 53.5129 600H746.487Z"/>
                        </svg>

                            <div className="about-text-wrapper">
                                <h1 className="about-title" data-aos="fade-up">ABOUT</h1>
                                <p className="about-text">                     Hello! I'm Bilguun Baasansuren, a front-end developer based in Ulaanbaatar Mongolia.
                                I'm comfortable with creating UI and UX designs by using Figma.
                                With my experience, I can build Single Page Applications by using React with Gatsby or NextJS, JavaScript (or TypeScript), HTML and CSS.
                                I am adaptable and confident to work into new team, furthermore I am able to pick up new frameworks to create
                                newer things. 
                                Also, I have a basic knowledge on Node js and Express js to make a back-end programming (Still learning).
                                Personally, I believe I am great at self-learning and I always intend to learn newer things. 
                                    
                           
                                </p>
                                
                                <Link to="/yo">
                                    <button className='about-button'>
                                        Learn more
                                    </button>
                                </Link>
                                <Skills/>

                            </div>
                        
                    </div>
                </div>
            <div className="bg-svg-slant">
                <svg
                    class="slant"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    >
                    <polygon points="0,100 100,0 100,100" />
                </svg>
            </div>
            
        </div>
    )
}

export default About