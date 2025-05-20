import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handlechange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({
      ...prev, 
      [name]: value,
    }))
  }
  
  const handlesubmit = (e) => {
  e.preventDefault();
  const mailtoLink = `mailto:gokulsiva1101@gmail.com?subject=Message from ${form.name}&body=${form.message}%0D%0A%0D%0AFrom: ${form.name}%0D%0AEmail: ${form.email}`;
  window.location.href = mailtoLink;
}

  
  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handlechange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handlechange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
