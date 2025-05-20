import React from 'react'
import { ExternalLink } from 'lucide-react'
function Project() {
  const projects=[{
    id:1,
    title:"Ai Powered Teacher Assistant",
    desc:"A Simple Ai Chatbot Made With React-Chatbot kit",
    link:"https://gokulsiva123.github.io/Ai-Teacher-Assistant/",
    technologies:["React Js","Tailwindcss","HTML","React-chatbot"]
  },
  {
    id:2,
    title:"Pastry Site",
    desc:"A Simple Pastry website using html and css",
    link:"https://gokulsiva123.github.io/cosmosite.github.io/",
    technologies:["HTML","CSS","JS"]
  },
  {
    id:3,
    title:"FoodCart Website",
    desc:"A simple FoodCart Website to add food cart and buy it",
    link:"https://gokulsiva123.github.io/Food-Cart/",
    technologies:["HTML","React Js","Tailwind CSS"]
  },
    {
    id:4,
    title:"Simple Quiz app",
    desc:"A Simple quiz App with 5 questions with dummy questions",
    link:"https://gokulsiva123.github.io/quiz-app/",
    technologies:["HTML","React Js","Tailwind CSS"]
  },
  {
    id:5,
    title:"TodoList App",
    desc:"A Todolist app to add task,toggle,delete task when done with local storage",
    link:"https://app.netlify.com/projects/todolistapp23/overview",
    technologies:["HTML","Tailwind CSS","JS","local storage"]
  },
  {
    id:5,
    title:"Weather App",
    desc:"A Weather app to get tempature and climate using weather api",
   link:"https://weatherappgokulsiva.netlify.app/",
    technologies:["HTML","Tailwind CSS","JS","Fetch Api"]
  },
  {
    id:6,
    title:"Rock Paper Scissor Game",
    desc:"A Rock Paper Scissor Game using javascript with the computer",
   link:"https://rockpaperscissorgs231.netlify.app/",
    technologies:["HTML","Tailwind CSS","JS"]
  },
  {
    id:6,
    title:"Responsive Food Store site",
    desc:"A Responsive Food store website using html and tailwindcss",
   link:"https://foodwebdesigngs156.netlify.app/",
    technologies:["HTML","Tailwind CSS","JS"]
  }
]
  return (
    <div className='min-h-screen max-w-full mx-auto bg-gradient-to-r from-whie to-gray-50'>
      <div className='max-w-7xl'>
        <div className='flex flex-col items-center mt-5 px-4 py-4 text-center'>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-violet-500 via-green-500 to-indigo-500 bg-clip-text text-transparent'>My Projects</h1>
        <p className='text-gray-600 text-xl max-w-[800px] mt-3'>A showcase of my web development journey, featuring a collection of projects that I have designed and built using modern technologies and frameworks.
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