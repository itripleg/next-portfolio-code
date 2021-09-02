import React from "react";
// import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Portfolio() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <div className="no-scrollbar">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    )
}
