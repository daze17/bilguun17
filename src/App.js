import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import SideDrawer from './components/SideDrawer/SideDrawer'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { useCycle } from 'framer-motion' 
import Aos from 'aos'
import './App.css'
import "aos/dist/aos.css"


const App = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [navScroll, setNavScroll] = useState(false)
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  let lastScrollTop = 0;
  const handleScroll = (e) => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
       // downscroll code
       setNavScroll(true)
    } else {
       // upscroll code
       setNavScroll(false)
    }
    lastScrollTop = st <= 50 ? 50 : st;
  }
  useEffect(() => {
    isOpen ? document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'unset';
 }, [isOpen]);

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

  useEffect(()=>{
    Aos.init({ duration: 500 })
  }, [])

  return (
    <Router>
      <div onScroll={handleScroll} className="App">
        <Switch>
          <Route exact path="/bilguun17">
            <NavBar toggleDrawer={() => toggleOpen()} scroll={navScroll} darkMode={darkMode} setDarkMode={setDarkMode} /> 
            <SideDrawer
                isShown={isOpen}
                closeDrawer={() => toggleOpen()}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                />
            <HomePage/>
            <About darkMode={darkMode}/>
            <Works/>
            <Contact/>
            <Footer/>
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
