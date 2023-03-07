import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    
    
    <div classname="flex justify-between bg-gray-500 shadow-lg shadow-gray-700 items-center">
        
        <ul className="flex ">
            <li className="px-5 font-bold">
                <Link to="/">Home</Link>
            </li> 
            <li className="px-5 font-bold">
                <Link to="/about">About</Link>
            </li>
            <li className="px-5 font-bold">
                <Link to="/contact">Contact</Link>
            </li>              
           
        </ul>
    </div>
    
  )
}

export default Header