import React from 'react'
import './Skills.css'
import { Icon } from '@iconify/react';
import Html5 from '@iconify/icons-cib/html5-shield';
import Css3 from '@iconify/icons-cib/css3-shiled';
import javascript20Filled from '@iconify/icons-fluent/javascript-20-filled';
import bxlReact from '@iconify/icons-cib/react';
import gatsbyIcon from '@iconify/icons-cib/gatsby';
import nextJs from '@iconify/icons-cib/next-js';
import mongodbIcon from '@iconify/icons-cib/mongodb';
import nodeIcon from '@iconify/icons-fa-brands/node';



const Skills = () =>{
    return(
        <div className="skill-container">
            <h1 className="skill-title" data-aos="fade-up">SKILLS</h1>
            <div className="icon-list">
                <div className="skill-icon">
                    <Icon icon={Html5} style={{fontSize: '70px'}} />
                html5
                </div>
                <div className="skill-icon">
                    <Icon icon={Css3} style={{fontSize: '70px'}} />
                css3
                </div>
                <div className="skill-icon">
                    <Icon icon={javascript20Filled} className="javascript-icon" style={{fontSize: '70px'}} />
                javascript
                </div>
                <div className="skill-icon">
                    <Icon  icon={bxlReact} style={{fontSize: '70px'}} />
                react
                </div>
                <div className="skill-icon">
                    <Icon icon={gatsbyIcon} style={{fontSize: '70px'}} />    
                gatsby
                </div>
                <div className="skill-icon">
                    <Icon icon={nextJs} style={{fontSize: '70px'}} />    
                nextjs
                </div>
                <div className="skill-icon">
                    <Icon icon={mongodbIcon} style={{fontSize: '70px'}} />    
                mongodb
                </div>
                <div className="skill-icon">
                    <Icon icon={nodeIcon} style={{fontSize: '70px'}} />    
                nodejs
                </div>
                
            </div>
        </div>
    )
}

export default Skills