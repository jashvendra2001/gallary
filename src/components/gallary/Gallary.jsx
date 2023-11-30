import React, { useState } from 'react'
import "./gallary.css"

const Gallary = () => {
    const[img,setImg]=useState(0);

    const next=()=>{
    if(img===data.length-1)
    {
        setImg(0)
        return
    }
    else{
        setImg(img+1)
    }
    }

    



    const prev=()=>{

        if(img===0)
    {
        setImg(data.length-1)
        return
    }
    else{
        setImg(img-1)
    }

    }
    const data=[
        "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1701261026789-aca18e71ae4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1701220293175-5c17f172b77a?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button onClick={prev}>prev</button>
       {
        data.map((item,i)=>{
            return(
                <img className='img' key={i} src={item} alt="logo"  style={ img===i ? {} :{display :" none"}} />
            )
     
        })
       }
        <button onClick={next}>Next</button>

      
    </div>
  )
}

export default Gallary
