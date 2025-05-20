import React, { useState } from 'react'
import myImage from "../assets/profile.png";
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate();
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-white to-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent'>Hi,I'm Gokul Siva</h1>
          <p className='text-gray-500 text-2xl max-w-3xl mx-auto'>As a passionate front-end developer with expertise in React.js, JavaScript, HTML, CSS, and Tailwind CSS, I transform design concepts into responsive, interactive web experiences. My approach combines technical precision with creative problem-solving to build applications that are both visually striking and functionally robust.</p>
        </div>
        <div className="relative flex flex-col gap-8 items-center justify-center my-16">
 
  <div className="justify-center items-center absolute w-80 h-80 bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 rounded-full blur-xl opacity-40"></div>
  <div className="relative z-10 bg-white bg-opacity-60 shadow-lg backdrop-blur-sm p-8 rounded-lg  text-center max-w-xl flex flex-col items-center">
    <img src={myImage} width="200px" height="100px"></img>
    <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
    <p className="text-gray-600 text-xl">
    Since early 2025, I've immersed myself in front-end development, rapidly building skills in React.js, JavaScript, HTML, CSS, and Tailwind CSS. My problem-solving background helps me create clean, responsive interfaces despite being new to the field. Through multiple projects, I've demonstrated technical growth and commitment to best practices while continuously expanding my development toolkit.
    </p>
  </div>
  <div className='bg-white rounded-lg shadow-lg max-w-xl text-center bg-opacity-60 backdrop-blur-sm p-5'>
    <h1 className="text-2xl font-bold mb-4 text-violet-600">HTML,CSS,JAVASCRIPT</h1>
    <p className='text-xl text-gray-600'>I’ve mastered HTML, CSS, and JavaScript by building responsive projects like an e-commerce site, a pastry website, etc. These highlight my skills in clean code, interactive UI elements, and seamless user experiences across devices. I’m passionate about creating accessible, visually engaging websites with intuitive design.</p>
    <button className='mt-2 bg-violet-600 shadow-sm transform transition-all duration-300 hover:scale-110 text-white rounded-lg px-4 py-2' onClick={()=>navigate("/Projects")}>View My Projects</button>
  </div>
  <div className='bg-white rounded-lg shadow-lg max-w-xl text-center bg-opacity-60 backdrop-blur-sm p-5'>
    <h1 className="text-2xl font-bold mb-4 text-indigo-600">Tailwind CSS</h1>
    <p className='text-xl text-gray-600'>I’ve learned Tailwind CSS and used it to build well-structured, fully responsive websites.
    It helps me create clean, consistent designs quickly with utility-first classes and efficient layouts.</p>
    <button className='mt-2 bg-indigo-600 shadow-sm transform transition-all duration-300 hover:scale-110 text-white rounded-lg px-4 py-2' onClick={()=>navigate("/Projects")}>View My Projects</button>
  </div>
  <div className='bg-white rounded-lg shadow-lg max-w-xl text-center bg-opacity-60 backdrop-blur-sm p-5'>
    <h1 className="text-2xl font-bold mb-4 text-green-600">React JS</h1>
    <p className='text-xl text-gray-600'>I’ve learned React.js and gained hands-on experience with components, hooks, props, state, React Router, etc. I’m particularly interested in building dynamic interfaces using React’s powerful features. I’ve developed projects like a simple e-commerce website, a quiz app, and a basic AI teacher assistant to apply and strengthen my skills.</p>
    <button className='mt-2 bg-green-600 shadow-sm transform transition-all duration-300 hover:scale-110 text-white rounded-lg px-4 py-2' onClick={()=>navigate("/Projects")}>View My Projects</button>
  </div>
  </div>





      </div>
    </div>
  )
}

export default Home