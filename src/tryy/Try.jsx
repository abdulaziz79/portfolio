import React, { useState } from 'react'
import { useLocalStorage } from './UseLocalStorage'


const Try = () => {
  const [value, setValue]=useState()
  const {setItem, getItem, remove}=useLocalStorage("value")
  
  return (
    <div>
      <h1>useLocalStorage</h1>
      <input 
      style={{width:"18rem", height:"3rem"}}
      type='text'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
       />
       <div>
        <button onClick={()=>setItem(value)} style={{width:"6rem",height:"3rem"}}>set</button>
        <button onClick={()=>console.log(getItem())} style={{width:"6rem",height:"3rem"}}>get</button>
        <button  onClick={()=>remove(value)} style={{width:"6rem",height:"3rem"}}>remove</button>
        
       </div>
    </div>
  )
}

export default Try



























// import React, { useState } from 'react'
// import { useLocalStorage } from './UseLocalStorage'

// const Try = () => {
//   const [value, setValue]=useState("")
//   const {setItem}= useLocalStorage("value")

//   return (
//     <div>
//       <h1>useLocalStorage</h1>
//       <input 
//       style={{width:"18rem", height:"3rem"}}
//       type='text'
//       value={value}
//       onChange={(e)=>setValue(e.target.value)}
//        />
//        <div>
//         <button onClick={()=> setItem(value)} style={{width:"6rem",height:"3rem"}}>set</button>
//         <button style={{width:"6rem",height:"3rem"}}>get</button>
//         <button style={{width:"6rem",height:"3rem"}}>remove</button>
        
//        </div>
//     </div>
//   )
// }

// export default Try
