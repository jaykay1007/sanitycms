import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
function Navbar() {
  return (
   <header className='bg-red-600'>
    <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
            <NavLink to="/"  
            activeClassName = "text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            >
                JK
            </NavLink>
            <NavLink to="/about"
            className={(navData)=>navData.isActive?"text-red-100 bg-red-700 py-3 px-3 my-6" :"inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}
            >
                About Me
            </NavLink>
            <NavLink to="/post"
            className={(navData)=>navData.isActive?"text-red-100 bg-red-700 py-3 px-3 my-6" :"inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}

            >
                Blog Posts
            </NavLink>
            <NavLink to="/project"
             className={(navData)=>navData.isActive?"text-red-100 bg-red-700 py-3 px-3 my-6" :"inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}
            >
                Project
            </NavLink>
           
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
            <SocialIcon url="https://twitter.com/jk" className='mr-4' target="_blank" fgColor='#fff' style={{height:35,width:35}}/>
            <SocialIcon url="https://youtube.com/jk" className='mr-4' target="_blank" fgColor='#fff' style={{height:35,width:35}}/>
            <SocialIcon url="https://instagram.com/jk" className='mr-4' target="_blank" fgColor='#fff' style={{height:35,width:35}}/>
        </div>
    </div>
   </header>
  )
}

export default Navbar
