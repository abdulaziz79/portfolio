import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Test = () => {
  const dragConstraintsRef = useRef();

  useEffect(() => {
    const boundingBox = document.body.getBoundingClientRect();
    const { width: bodyWidth, height: bodyHeight } = boundingBox;

    // Set drag constraints based on the body dimensions
    dragConstraintsRef.current = {
      left: boundingBox,
      right: bodyWidth,
      top: 0,
      bottom: bodyHeight,
    };
  }, []);

  const [open, setOpen]=useState(false)

  const variants={
    visible:{opacity:1, x:500, transition:{staggerChildren:0.2}},
    hidden:{opacity:0}
  }

  const items=["item1","item2","item3","item4"]
  return (
    <div className='course'>
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item)=>(
          <motion.li variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
      <motion.div className="box" 
      variants={variants}
      // animate={{opacity:1, scale:1, x:-200, y:-200}} 
      // whileHover={{opacity:1, scale:2}}
      // transition={{duration:2}}
      drag
      dragConstraints={dragConstraintsRef.current}
      animate={open ? "visible" : "hidden"}
      
      ></motion.div>
      <button onClick={()=>setOpen(prev=>!prev)}>click</button>

    </div>
  )
}

export default Test