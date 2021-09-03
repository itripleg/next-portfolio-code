import React from "react";
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Image from 'next/image'
import Router from 'next/router'


export default function Index() {



  return (
      <main className="text-gray-400 bg-gray-900 body-font
       h-screen z-0 items-center">
       <About />
       <Projects />
      </main>
    )
}
