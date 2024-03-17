import "./Contact.scss"
import { motion } from "framer-motion"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

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
            staggerChildren:0.1
        }
    }
}
const Contact = () => {
    const formRef=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_50ahxjj", 'template_1o9idfg', formRef.current, "cDnxYJqibJr25A3rr")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1  variants={variants} >Let's work together</motion.h1>
        <motion.div  variants={variants} className="item">
            <h2>Mail</h2>
            <span>aboudecharkawi@gmail.com</span>
        </motion.div>
        <motion.div  variants={variants} className="item">
            <h2>Address</h2>
            <span>Tripoli Lebanon</span>
        </motion.div>
        <motion.div  variants={variants} className="item">
            <h2>Phone</h2>
            <span>+961 79165588</span>
        </motion.div>
      </motion.div>
      <div className="formContainer" >
        <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name"  name="from_name"/> 
            <input type="email" required placeholder="Email" name="email"/>
            <textarea rows={8} placeholder="Message" name="message"></textarea> 
            <button>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
