import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar'
import SideDrawer from '../SideDrawer/SideDrawer'
import { useCycle } from 'framer-motion' 


const NotFoundPage = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
  
 const [darkMode, setDarkMode] = useState(getInitialMode())
 useEffect(()=>{
     localStorage.setItem('dark', JSON.stringify(darkMode));
     (darkMode) ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
 },[darkMode]);

 function getInitialMode() {
   const isReturningUser = "dark" in localStorage;
   const savedMode = JSON.parse(localStorage.getItem('dark'));
   const userPrefersDark = getPrefColorSheme();
   if (isReturningUser){
       return savedMode;
   } else if (userPrefersDark) {
       return true;
   } else {
       return false;
   }
}
 function getPrefColorSheme(){
     if(!window.matchMedia) return;
     return window.matchMedia("(prefers-color-scheme: dark)").matches;
 }
  return(
        <div>
        <div className="home" >
            <NavBar toggleDrawer={() => toggleOpen()} setDarkMode={setDarkMode} darkMode={darkMode}/> 
            <SideDrawer
                isShown={isOpen}
                closeDrawer={() => toggleOpen()}
                />
            <div className="home-wrapper">
                <div className="home-text-wrapper">
                    <h1 className="home-title">404 page doesn't exist bro.</h1>

                </div>
            </div>
       </div>
       </div>
  );
}

export default NotFoundPage;