import React from 'react'
import {SocialIcon} from "react-social-icons"

function Footer() {
  return (
    <footer className='w-full bg-[#E9F1FA] shadow-lg p-6'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-6'>
        {/* Left Column */}
        <div className='space-y-4'>
          <h1 className='text-xl font-bold text-gray-600'>Contact Information</h1>
          <div className='space-y-2'>
            <h2 className='font-medium text-gray-700'>
              Email: <a href="mailto:gokulsiva1101@gmail.com" className='font-normal text-[#6E6E6E] hover:text-indigo-600 transition-colors'>gokulsiva1101@gmail.com</a>
            </h2>
            <h2 className='font-medium text-gray-700'>
              Contact no: <a href="tel:+919790885720" className='font-normal text-[#6E6E6E] hover:text-indigo-600 transition-colors'>9790885720</a>
            </h2>
          </div>
          <div className='flex flex-row gap-3 mt-4'>
            <SocialIcon 
              className="transition-all duration-300 hover:scale-110" 
              url='https://github.com/GOKULSIVA123' 
              target='_blank'
              style={{width:30, height:30}}
            />
            <SocialIcon 
              className="transition-all duration-300 hover:scale-110" 
              url='https://www.instagram.com/s.gokul_234' 
              target='_blank'
              style={{width:30, height:30}}
            />
            <SocialIcon 
              className="transition-all duration-300 hover:scale-110" 
              url='https://www.linkedin.com/in/gokul-siva-777a92359'
              target='_blank'
              style={{width:30, height:30}}
            />
          </div>
          <button className='bg-indigo-400 px-4 py-2 rounded-lg text-white font-semibold transition-all transform duration-300 hover:scale-110'>Let's Connect</button>
        </div>
        
        {/* Right Column */}
        <div className='flex flex-col md:items-end justify-between'>
          <div>
            <h1 className='text-xl font-bold text-gray-600 mb-3'>Download My Resume</h1>
            
          </div>
          <p className='text-sm text-gray-500 mt-6 md:text-right'>
            © {new Date().getFullYear()} Gokul Siva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
