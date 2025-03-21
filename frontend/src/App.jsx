import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Header from './components/Common/Header'


function App() {
  

  return (
    <div>
        <Header/>
          <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path="/about" element = {<About/>}/>
              <Route path="/contact" element = {<Contact/>}/>
              <Route path="/services" element = {<Services/>}/>
              <Route path="/testimonials" element = {<Testimonials/>}/>
          </Routes>
      </div>
  )
}

export default App
