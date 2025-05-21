import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {Routes,Route} from "react-router-dom" 
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Skills" element={<Skills></Skills>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App