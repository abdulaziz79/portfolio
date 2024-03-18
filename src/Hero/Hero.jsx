import React from 'react';
import "./Hero.scss";
import { motion, useViewportScroll, useTransform } from 'framer-motion'; // Import useViewportScroll and useTransform
import image from "../public/aziz.png";
import image1 from "../public/scroll.png";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,

    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
}

const Hero = () => {
    const { scrollY } = useViewportScroll(); // Get scrollY value from useViewportScroll hook
    const yBg = useTransform(scrollY, [0, 200], [0, -200]); // Transform scrollY for parallax effect

    // Function to scroll to a specific section
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Check if screen width is greater than 768px (adjust this value as needed)
    const isDesktop = window.innerWidth > 768;

    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={isDesktop ? textVariants : {}} initial={isDesktop ? "initial" : "animate"} whileInView="animate">
                    <motion.h2 variants={textVariants}>ABDULAZIZ CHERKAWI </motion.h2>
                    <motion.h1 variants={textVariants}>Full stack web developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} onClick={() => scrollTo("Portfolio")}>Latest Work</motion.button>
                        <motion.button variants={textVariants} onClick={() => scrollTo("Contact")}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src={image1} alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer">
                <img src={image} alt='' style={{ width: "100%" }} />
            </div>
        </div>
    )
}

export default Hero;
