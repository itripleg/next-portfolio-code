import React from "react";
// import Navbar from '../components/Navbar'
// import About from '../components/About'
// import Skills from '../components/Skills'
// import Projects from '../components/Projects'
// import Contact from '../components/Contact'
import { ArrowUpIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DAbout = dynamic(() => import('../components/About'))
const DSkills = dynamic(() => import('../components/Skills'))
const DProjects = dynamic(() => import('../components/Projects'))
const DContact = dynamic(() => import('../components/Contact'))


export default function Portfolio() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font ">
        <div className="">
          <DAbout />
          <DSkills />
          <DProjects />
          <DContact />
          <Link className="" href={"/"}>
            <a>
              <ArrowUpIcon  className="fixed bottom-0 right-0 m-4 text-white hidden md:block w-10"/>
            </a>
          </Link>
        </div>
      </main>
    )
}
