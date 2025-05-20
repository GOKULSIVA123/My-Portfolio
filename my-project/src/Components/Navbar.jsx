import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location=useLocation();
  return (
    <nav className='bg-gradient-to-r from-violet-400 via-blue-300 to-green-300 p-6'>
        <div className='max-w-7xl mx-auto flex flex-row items-center justify-between'>
            <div>
                <span className='text-xl text-white font-bold bg-white bg-opacity-20 rounded-lg px-4 py-2'>GOKUL SIVA</span>
            </div>
              <ul className='hidden md:flex flex-row space-x-8'>
                <li>
                    <a href='/' className={location.pathname==="/"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"} >About</a>
                </li>
                <li>
                    <a href='/Projects'className={location.pathname==="/Projects"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"}>Projects</a>
                </li>
                <li>
                    <a href='/Skills' className={location.pathname==="/Skills"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"}>Skills</a>
                </li>
                <li>
                    <a href='/Contact' className={location.pathname==="/Contact"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"}>Contact</a>
                </li>
              </ul>
              <div className='md:hidden'>
            <button onClick={()=>setMenuOpen(!menuOpen)}>{
                menuOpen?(<X className='h-6 w-6'></X>):(<Menu className='h-6 w-6'></Menu>)
            }</button>
        </div>
        </div>
        <div className='md:hidden mt-4'>
        { menuOpen && (
        <ul className='flex flex-col space-y-4 items-start justify-center'>
                <li>
                    <a href='/' className={location.pathname==="/"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"} >About</a>
                </li>
                <li>
                    <a href='/Projects'className={location.pathname==="/Projects"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"}>Projects</a>
                </li>
                <li>
                    <a href='/Skills' className={location.pathname==="/Skills"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"}>Skills</a>
                </li>
                <li>
                    <a href='/Contact' className={location.pathname==="/Contact"?"text-violet-600 font-[600]":"text-white font-[600] hover:text-violet-600"}>Contact</a>
                </li>
              </ul>
)}
        </div>
    </nav>
 

  );
}

export default Navbar;
