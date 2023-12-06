import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>

        <div className="logo">
            <h1>swiggy</h1>
        </div>

        <ul style={{display:"flex"}}>
            <li> <a href="/">home</a></li>
            <li> <a href="/">About </a></li>
            <li> <a href="/">Contact</a></li>
            <li> <a href="/">Career</a></li>
        </ul>
      
    </div>
  )
}

export default Navbar
