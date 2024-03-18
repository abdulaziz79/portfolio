import "./navbar.scss"
import { motion } from "framer-motion"
import image from "../public/facebook.png"
import image1 from "../public/instagram.png"
import image2 from "../public/youtube.png"
import image3 from "../public/dribbble.png"


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
                <a href="#"><img src={image} alt="" /></a>
                <a href="#"><img src={image1} alt="" /></a>
                <a href="#"><img src={image2} alt="" /></a>
                <a href="#"><img src={image3} alt="" /></a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
