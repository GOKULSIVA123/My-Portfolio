import React from 'react'
import { ExternalLink } from 'lucide-react'
function Project() {
  const projects=[{
    id:1,
    title:"AI Powered Teacher Assistant",
    desc:"An interactive educational chatbot that answers student queries and explains concepts in real-time. Implemented conversational flows using React-Chatbot kit with a responsive, user-friendly interface.",
    link:"https://gokulsiva123.github.io/Ai-Teacher-Assistant/",
    technologies:["React Js","Tailwindcss","HTML","React-chatbot"]
  },
  {
    id:2,
    title:"Pastry Site",
    desc:"A visually appealing pastry shop website featuring product showcases and responsive design. Created smooth animations and intuitive navigation to enhance the browsing experience.",
    link:"https://gokulsiva123.github.io/cosmosite.github.io/",
    technologies:["HTML","CSS","JS"]
  },
  {
    id:3,
    title:"FoodCart Website",
    desc:"A dynamic food ordering platform with menu browsing, cart functionality, and checkout process. Implemented state management for tracking orders with a mobile-friendly interface.",
    link:"https://gokulsiva123.github.io/Food-Cart/",
    technologies:["HTML","React Js","Tailwind CSS"]
  },
  {
    id:4,
    title:"Simple Quiz App",
    desc:"An interactive quiz application with instant feedback and score tracking. Features a clean UI that guides users through questions with visual indicators for correct and incorrect answers.",
    link:"https://gokulsiva123.github.io/quiz-app/",
    technologies:["HTML","React Js","Tailwind CSS"]
  },
  {
    id:5,
    title:"TodoList App",
    desc:"A productivity tool for task management with persistent local storage. Allows creating, completing, and removing tasks with data preserved between sessions.",
    link:"https://todolistapps23.netlify.app/",
    technologies:["HTML","Tailwind CSS","JS","local storage"]
  },
  {
    id:5,
    title:"Weather App",
    desc:"A real-time weather application that displays current conditions using API integration. Shows temperature, humidity, and forecasts with location-based data retrieval.",
    link:"https://weatherapp1gs.netlify.app//",
    technologies:["HTML","Tailwind CSS","JS","Fetch Api"]
  },
  {
    id:6,
    title:"Rock Paper Scissor Game",
    desc:"An interactive browser game implementing classic Rock Paper Scissors mechanics against computer AI. Features score tracking and responsive controls for both desktop and mobile play.",
    link:"https://rockpaperscissongs.netlify.app/",
    technologies:["HTML","Tailwind CSS","JS"]
  },
  {
    id:6,
    title:"Responsive Food Store Site",
    desc:"A fully responsive restaurant website with menu displays and smooth animations. Optimized for all device sizes with custom transitions and efficient image loading.",
    link:"https://foodwebdesigngs156.netlify.app/",
    technologies:["HTML","Tailwind CSS","JS"]
  }]


  return (
    <div className='min-h-screen max-w-full mx-auto bg-gradient-to-r from-whie to-gray-50'>
      <div className='max-w-7xl'>
        <div className='flex flex-col items-center mt-5 px-4 py-4 text-center'>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-violet-500 via-green-500 to-indigo-500 bg-clip-text text-transparent'>My Projects</h1>
        <p className='text-gray-600 text-xl max-w-[600px] mt-3'>A showcase of my web development journey, featuring a collection of projects that I have designed and built using modern technologies and frameworks.
</p>
</div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {
          projects.map((item,index)=>(
            <div className='bg-white shadow-lg rounded-lg p-6 max-w-xl min-h-[200px] mb-3 ml-4 transition-all transform duration-300 hover:scale-110 ' key={index}>
              <h1 className='text-gray-700 font-bold'>{item.title}</h1>
              <p className='text-gray-500'>{item.desc}</p>
              <div className='flex flex-wrap gap-2 max-w-[400px]'>
                {
                  item.technologies.map((item1,index)=>(
                    
                    <div key={index} className='bg-indigo-300 rounded-full p-2 text-white mt-2 hover:cursor-pointer'>
                    {item1}
                    </div>
                  ))
                }
              </div>
            <div>
            <div className='mt-4'>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-6 text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center">View My Project<ExternalLink size={16}></ExternalLink></a>
            </div>
</div>

            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Project
