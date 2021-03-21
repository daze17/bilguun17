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
                                <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    
                                    
                                    
                           
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