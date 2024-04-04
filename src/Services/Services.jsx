import "./Services.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import image from "../public/people.webp"

const variants={
  initial:{
    y:100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.2
    }

  }
}

const Services = () => {
  const ref=useRef()
  const inView= useInView(ref, {margin:"-100px"})

  const scrollTo =((id)=>{
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  })
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
            <h2>Crafting User Experiences</h2>
            <p>"Translate ideas into intuitive and visually appealing web applications. This includes designing user flows, building user interfaces, and ensuring a seamless experience across all devices."</p>
            <button onClick={()=> scrollTo("Contact")}>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Building the Foundation</h2>
            <p>" Develop the core structure of web applications, focusing on data management and server-side logic. This involves creating and managing databases, implementing APIs for data exchange, and ensuring application security."</p>
            <button onClick={()=> scrollTo("Contact")} >Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Bringing it to Life</h2>
            <p>"Transform web applications from static designs to interactive experiences. This encompasses integrating various functionalities, implementing real-time features, and utilizing third-party APIs to enhance user experience."</p>
            <button onClick={()=> scrollTo("Contact")} >Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Launching & Maintaining</h2>
            <p>"Deploy applications to the real world, ensuring smooth operation and ongoing maintenance. This involves configuring deployments, monitoring performance, addressing any bugs, and keeping the application up-to-date with the latest technologies."</p>
            <button onClick={()=> scrollTo("Contact")} >Go</button>
          </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
