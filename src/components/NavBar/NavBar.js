import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";
import dark from '../../Img/dark-mode.svg'
import moon from '../../Img/cil_moon.svg'
import DrawerToggleButton from './DrawerToggleButton'
import './NavBar.css'

const NavBar = ({ toggleDrawer, scroll, darkMode, setDarkMode}) =>{
    return(
        <header className={scroll ? "toolbar-scrolled" : "toolbar-up"}>
            <nav className="navbar">
                <motion.div className="nav-logo">
                    <HashLink to="/#"> Bilguun </HashLink>
                </motion.div>

                <div className="burger-menu">
                    <DrawerToggleButton click={toggleDrawer}/>
                </div>

                <div className="nav-items">
                    <ul>
                        <li>
                            <HashLink to="/#About">About</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#Work">Works</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#Contact">Contact</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#About">Resume</HashLink>
                        </li>
                        <li>
                            <div className="switch-button-container">
                                <img src={dark} 
                                className={darkMode ? "sun-button" : "sun-button-dis"} 
                                alt="dark mode"
                                onClick={()=> setDarkMode(prevMode => !prevMode)}
                                />
                                <img src={moon}
                                className={darkMode ? "moon-button-dis" : "moon-button"} 
                                alt="dark mode"
                                onClick={()=> setDarkMode(prevMode => !prevMode)}
                                />
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default NavBar