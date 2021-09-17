import React from "react";
// import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { ArrowUpIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Portfolio() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font ">
        <div className="no-scrollbar">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Link className="" href={"/"}>
            <a>
              <ArrowUpIcon  className="fixed bottom-0 text-white hidden md:block w-10"/>
            </a>
          </Link>
        </div>
      </main>
    )
}
