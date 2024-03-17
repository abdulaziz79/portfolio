import React from 'react'
import "./Hero.scss"
import { motion } from 'framer-motion'

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.2
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants={
    initial:{
        x:0,
  
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
}

const Hero = () => {
    const scrollTo = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }

    }
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" whileInView="animate">
            <motion.h2 variants={textVariants}>ABDULAZIZ CHERKAWI </motion.h2>
            <motion.h1 variants={textVariants}>Full stack web developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants} onClick={()=>scrollTo("Portfolio")} >Latest Work</motion.button>
                <motion.button variants={textVariants} onClick={()=>scrollTo("Contact")}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
            Writer Content Creator Influencer
        </motion.div>
      <div className="imageContainer">
        <img src='/aziz.png'  alt='' style={{width:"100%"}}/> 
      </div>
    </div>
  )
}

export default Hero
