import React from 'react';
import { motion } from 'framer-motion';

const variants={
    open:{
        transition:{
            staggerChildren:0.1
        }
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1
        }
    }
}
const itemVariants={
    open:{
        y:0,
        opacity:1
    },
    closed:{
        y:50,
        opacity:0
    }
}
const Links = ({setOpen}) => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} onClick={() => {scrollToSection(item); setOpen(false)}} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
