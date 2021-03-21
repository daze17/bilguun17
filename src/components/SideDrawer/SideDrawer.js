import React from 'react'
import './SideDrawer.css'
import CloseButton from './CloseButton'
import { motion } from 'framer-motion'
import MenuItem from './MenuItems'
import dark from '../../Img/sun.svg'
import moon from '../../Img/cil_moon_side.svg'

const SideDrawer = ({ isShown, closeDrawer, setDarkMode, darkMode }) => {

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  const logoVariants = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.85
      }
    },
    closed: {
      opacity: 0,

    }
  };
const pages = ([
      {title: 'Home', id: 4},
      {title: 'About', id: 0},
      {title: 'Work', id: 1},
      {title: 'Contact', id: 2},
      {title: 'Resume', id: 3}
  ])

  return (
    <nav className={isShown ? "side_drawer open" : "side_drawer"}>
      <div className="scroll">
      <motion.div 
          variants={logoVariants}
          initial={false}
          animate={isShown ? "open" : "closed"}
      >
                <CloseButton click={closeDrawer} className="close-button"/>
      </motion.div>
      <div className="list-wrapper">
        <motion.ul
            variants={variants}
            initial={false}
            animate={isShown ? "open" : "closed"} 
        >
          {pages.map(page => (
            <MenuItem title={page.title} key={page.id} isShown={isShown} closeDrawer={closeDrawer}/>
          ))}
            <div className="switch-button-container">
              <motion.li
                          variants={logoVariants}
                          initial={false}
                          animate={isShown ? "open" : "closed"}
              >
                   {darkMode ? 
                    <img src={dark}  alt="dark mode" className="side-sun-button"
                    onClick={()=> setDarkMode(prevMode => !prevMode)}
                  /> :
                    <img src={moon}  alt="dark mode" className="side-moon-button"
                    onClick={()=> setDarkMode(prevMode => !prevMode)}
                  />
                  } 
              </motion.li>
          </div>
        </motion.ul>
        </div>
      </div>
    </nav>
  )
}

export default SideDrawer
