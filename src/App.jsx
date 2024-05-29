import { useContext, useEffect } from 'react'
import './App.scss'
import { ThemeContext } from './context/ThemeContext'
import { DARK_THEME } from './constants/themeConstants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";

function App() {
  
  const { theme, toggleTheme} = useContext(ThemeContext);
  console.log(theme);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if(theme === DARK_THEME){
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [theme]);
  return (
    <>
      
    </>
  )
}

export default App
