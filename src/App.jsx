import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import AppRoutes from './routes.config.jsx'
import Footer from './Components/Footer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <AppRoutes/>

     <Footer/>
      </>
  )
}

export default App
