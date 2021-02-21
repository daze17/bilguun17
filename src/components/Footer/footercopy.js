import React from 'react'
import './Footer.css'
import facebookRect from '@iconify/icons-brandico/facebook-rect';
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-bytesize/github';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import linkedinFill from '@iconify/icons-akar-icons/linkedin-fill';

const Footer = ()=>{
    return(
        <div>
            <div className="footer-svg">
                <svg 
                    viewBox="0 0 500 150" 
                    preserveAspectRatio="none" 
                    width="100%"
                    height="100%" 
                    className="round">
                <path d="M-7.34,51.80 C47.40,33.05 209.93,-45.88 500.00,49.98 L500.00,0.00 L0.00,0.00 Z">
                </path>
                </svg>
            </div>
            <div className="footer-container">
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100011136487427" target="_blank"> <Icon icon={facebookRect} className="footer-icons" /> </a>
                    <a href="https://www.w3schools.com" target="_blank"> <Icon icon={instagramFill} className="footer-icons" /> </a>
                    <a href="https://www.w3schools.com" target="_blank"> <Icon icon={githubIcon} className="footer-icons" /> </a>
                    <a href="https://www.w3schools.com" target="_blank"> <Icon icon={linkedinFill} className="footer-icons" /> </a>
                </div>
                <p>bilguun889@gmail.com</p>
                <p> © 2021 Bilguun Baasansuren </p>
                
            </div>
        </div>


        
    )
}

export default Footer