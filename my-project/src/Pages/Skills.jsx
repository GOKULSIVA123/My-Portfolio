import React, { useState } from 'react'

function Skills() {
  const [activeitem,setActiveitem]=useState("technical")
  const skills={
    technical:[
        {name:"HTML",Proficiency:90},
        {name:"CSS",Proficiency:75},
        {name:"JAVASCRIPT",Proficiency:70},
        {name:"TAILWIND CSS",Proficiency:80},
        {name:"REACT JS",Proficiency:65}
    ],
    soft:[
        {name:"Communication",Proficiency:65},
        {name:"Team Work",Proficiency:75},
        {name:"Problem Solving",Proficiency:85},
        {name:"Time Management",Proficiency:85},
        {name:"Creativity",Proficiency:70},
        {name:"Leadership",Proficiency:55}
    ]
  }
  const getprofilevel=(Proficiency)=>{
    if (Proficiency>=90) return "Expert"
    else if (Proficiency>=75) return "Good"
    else if(Proficiency>=60) return "Intermediate"
    else return "Beginner"
  }
  return (
    <div className='min-h-screen max-w-full bg-gradient-to-b from-white to-gray-50'>
        <div className='max-w-7xl mx-auto px-16 py-16 flex flex-col justify-center items-center text-center'>
            <div>
            <h1 className='font-bold bg-gradient-to-r from-violet-500 to-indigo-500 text-[40px] bg-clip-text text-transparent'>My Skills</h1>
            <p className='text-gray-600 text-xl max-w-2xl mt-3'>A comprehensive overview of my frontend development skills and technical strengths.
Experienced in building responsive, accessible, and interactive user interfaces.
Focused on clean code, visual design, and delivering seamless user experiences.</p>
        </div>
        <div className='flex flex-row justify-between items-center gap-10 mt-5'>
            <button onClick={()=>setActiveitem("technical")} className={activeitem==="technical"?"bg-violet-400 shadow-lg text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-110":"bg-white px-6 py-3 rounded-lg shadow-lg font-semibold transform transition-all duration-300 hover:scale-110"}>Technical Skills</button>
            <button onClick={()=>setActiveitem("soft")} className={activeitem==="soft"?"transform transition-all duration-300 hover:scale-110 bg-violet-400 shadow-lg text-white px-6 py-3 rounded-lg font-semibold":"bg-white px-8 py-3 rounded-lg shadow-lg font-semibold transform transition-all duration-300 hover:scale-110"}>Soft Skills</button>
        </div>
        </div>
        <div className='ml-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols--4 gap-6'>
        {
            skills[activeitem].map((skill1,index)=>(
                <div key={index} className='bg-white p-6 max-w-xl rounded-lg shadow-lg mb-5 transition-all transform duration-300 hover:scale-105'>
                    <div className='flex items-center'>
                        <h2 className='text-gray-600 font-bold'>{skill1.name}</h2>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-600'>{getprofilevel(skill1.Proficiency)}</span>
                            <span className='font-semibold text-indigo-600'>{skill1.Proficiency}%</span>
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-full mt-1'>
                        <div className='h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-300' style={{width:`${skill1.Proficiency}%`}}>
                            <h1 className='text-gray-50 ml-3 opacity-80'>Proficiency</h1>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Skills