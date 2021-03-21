import React from 'react'
import './Footer.css'
import facebookRect from '@iconify/icons-brandico/facebook-rect';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-bytesize/github';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import linkedinFill from '@iconify/icons-akar-icons/linkedin-fill';

const Footer = ()=>{
    return(
        <div>

            <div className="footer-container">
                <p><a href="tel:+976 89810500">+976 89810500</a></p>
                <p><a href="mailto:bilguun889@gmail.com">bilguun889@gmail.com</a></p>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100011136487427" target="_blank" rel="noreferrer"> <Icon icon={facebookRect} className="footer-icons" /> </a>
                    <a href="https://memegenerator.net/img/instances/74124464/kono-dio-da.jpg" target="_blank" rel="noreferrer"> <Icon icon={instagramFill} className="footer-icons" /> </a>
                    <a href="https://github.com/daze17" target="_blank" rel="noreferrer"> <Icon icon={githubIcon} className="footer-icons" /> </a>
                    <a href="https://memegenerator.net/img/instances/74124464/kono-dio-da.jpg" target="_blank" rel="noreferrer"> <Icon icon={linkedinFill} className="footer-icons" /> </a>
                </div>

                <p className="copyright"> © 2021 Bilguun Baasansuren </p>
                
            </div>
        </div>


        
    )
}

export default Footer