import React from 'react'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 shadow-md py-2 w-full'>
        <ul className=' flex justify-center gap-6 text-gray-500 text-xl'>
            <li className='hover:cursor-pointer'>Home</li>
            <li className='hover:cursor-pointer'>About</li>
            <li className='hover:cursor-pointer'>Contact</li>
            <li className='hover:cursor-pointer'>Write</li>
            <li className='hover:cursor-pointer'>Logout</li>
        </ul>
    </nav>
  )
}
