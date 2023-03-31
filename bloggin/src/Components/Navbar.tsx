import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {GrFacebook, GrTwitter} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 shadow-md py-2 w-full flex justify-around items-center'>
        <div className='flex gap-3 justify-center items-center'>
           <AiFillInstagram className='h-full hover:cursor-pointer w-6'/>
           <GrFacebook className='h-full hover:cursor-pointer w-5'/>
           <GrTwitter className='h-full hover:cursor-pointer w-5'/>
        </div>
        <ul className=' flex justify-center gap-6 text-gray-900 text-xl font-light'>
            <li className='hover:cursor-pointer'><Link to="/">Home</Link></li>
            <li className='hover:cursor-pointer'><Link to="/about">About</Link></li>
            <li className='hover:cursor-pointer'><Link to="/contact">Contact</Link></li>
            <li className='hover:cursor-pointer'><Link to="/write">Write</Link></li>
            <li className='hover:cursor-pointer'>Logout</li>
        </ul>
        <div className=''>
          <CgProfile className='w-7 h-7 hover:cursor-pointer'/>
        </div>
    </nav>
  )
}
