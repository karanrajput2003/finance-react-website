import React from 'react'
import { FaAngleDown } from "react-icons/fa";


function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <h1>Finova</h1>
        </div>
        <div className='navitems'>
            <h6>Products <FaAngleDown /></h6>
            <h6>Pricing</h6>
            <h6>Features <FaAngleDown /></h6>
            <h6>Resources <FaAngleDown /></h6>
        </div>
        <div className="nav-buttons">
            {/* <button className='login'>Login</button> */}
            <button className='get-a-demo'>Get a Demo</button>
        </div>
    </div>
  )
}

export default Navbar