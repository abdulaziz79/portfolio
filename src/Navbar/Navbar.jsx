import "./navbar.scss"
import { motion } from "framer-motion"
import image from "../public/facebook.png"
import image1 from "../public/instagram.png"
import image2 from "../public/git.png"
import image3 from "../public/linkedin.png"


import React from 'react'
import Sidebar from "../Sidebar/Sidebar.jsx"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* sidbar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Abdulaziz Dev</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/abdelaziz-cherkawi-248233270/"><img src={image3} alt="" /></a>
                <a href="https://github.com/abdulaziz79"><img src={image2} alt="" /></a>
                <a href="https://www.instagram.com/aboudecherkawe?igsh=MXViNG45Nm5uOWk4Ng%3D%3D&utm_source=qr"><img src={image1} alt="" /></a>
                <a href="https://www.facebook.com/share/nSBfDmTZ4tvMo73k/?mibextid=WC7FNe"><img src={image} alt="" /></a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
