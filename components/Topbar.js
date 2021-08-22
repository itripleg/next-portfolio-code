import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid';

function Topbar() {
	return (
<header className="bg-gray-800  top-0 z-10">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
				<Link href={'/'}><p className="invisible md:visible">Home</p></Link>
        <span className="flex mx-auto lg:mr-10"></span>
        <h1 className="title-font font-medium text-white
					cursor-pointer hover:underline select-none mb-4 md:mb-0 "> 
					<a href="#about" className="text-xl mr-4">Joshua Bell</a></h1>
					<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        <div className="inline-flex items-center">
          <a href="/" className="mt-4 md:invisible">Home</a>
          <a
            href="https://github.com/itripleg/"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Github
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
			</div>
		</header>
	)
}

export default Topbar