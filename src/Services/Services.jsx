import "./Services.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import image from "../public/people.webp"

const variants={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2
    }

  }
}

const Services = () => {
  const ref=useRef()
  const inView= useInView(ref, {margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} whileInView="animate">
        <motion.div className="textContainer" variants={variants} >
            <p>focus on helping your brand grow <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
          <div className="title">
            <img src={image} alt="" />
            <h1>
             <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
              </h1>
          </div>
          <div className="title">
            
            <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
            <button>WHAT WE DO</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
          <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Branding</h2>
            <p>"Lorem ipsum dolor sit amet, aliqua. . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <button>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Branding</h2>
            <p>"Lorem ipsum dolor sit amet, aliqua. . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <button>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Branding</h2>
            <p>"Lorem ipsum dolor sit amet, aliqua. . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <button>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Branding</h2>
            <p>"Lorem ipsum dolor sit amet, aliqua. . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
