import { useRef } from "react"
import "./Portfolio.scss"
import image1 from "../public/CRAFTVISTA.png"
import image2 from "../public/dash.png"
import image3 from "../public/image3.png"
import image4 from "../public/image4.png"


import { useScroll, motion , useSpring, useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title: "craftVista",
        img:image1,
        desc:"craftVista: Your one-stop solution for connecting with local service providers. Built with React for a seamless user experience, Material UI for sleek design, and powered by Node.js for reliable performance. Find trusted professionals for all your home service needs effortlessly",
        link:"https://craft-vista.vercel.app/"
    },
    {
        id:2,
        title: "Monla-LLC",
        img:image3,
        desc:"A dynamic automotive platform developed by a team of 5. Offering a seamless experience for buying car products and accessing reliable vehicle maintenance services. Built with expertise in React and Node.js to ensure optimal performance and user satisfaction.",
        link:"https://monla-llc.vercel.app/"
    },
    {
        id:3,
        title: "Vanilla js app",
        img:image2,
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea ipsam nulla minus, molestiae veritatis aliquid assumenda repudiandae sit reprehenderit voluptatem facere omnis, alias impedit quo vel dicta at quis!"
    },
    {
        id:4,
        title: "react commerce",
        img:image4,
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea ipsam nulla minus, molestiae veritatis aliquid assumenda repudiandae sit reprehenderit voluptatem facere omnis, alias impedit quo vel dicta at quis!"
    }
]

const Single=({item})=>{
    const handleClick = () => {
        if(item.link){
        window.open(item.link, "_blank");
        }
    };
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,})
    const scaleX=useSpring(scrollYProgress,{
        // stiffness:100,
        damping:30
    })
    const y = useTransform(scrollYProgress, [0,1],[-180,180])
    return(
        <section >
            <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y:y}}>
                <h2 >{item.title}</h2>
                <p>{item.desc} </p>
                <a href={item.link} onClick={handleClick} target="_blank" rel="noopener noreferrer">
                            <button>See Demo</button>
                        </a>
            </motion.div>
            </div>
            </div>
            
        </section>
    )
}

const Portfolio = () => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref, offset:["end end","start start"]})
    const scaleX=useSpring(scrollYProgress,{
        // stiffness:100,
        damping:30
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar">

            </motion.div>
        </div>
     {items.map(item=>(
        <Single item={item} key={item.id} />
     ))}
    </div>
  )
}

export default Portfolio
