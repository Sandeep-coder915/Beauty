import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import AppRoutes from './routes.config.jsx'
import Footer from './Components/Footer.jsx'
 
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light" && localStorage.getItem("theme") !== "dark" ? false : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>

    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
     <AppRoutes/>

     <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
