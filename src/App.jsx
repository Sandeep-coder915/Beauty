import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar.jsx";
import AppRoutes from "./routes.config.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
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
      <ScrollToTop /> Ensure this is included for scrolling behavior

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AppRoutes />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Footer darkMode={darkMode} />
      </motion.div>
    </div>
  );
}

export default App;
