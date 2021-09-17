import React, { useState } from 'react'
import { ArrowRightIcon, HomeIcon, MenuIcon } from "@heroicons/react/solid";
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
// import { useMoralis } from 'react-moralis';

function Navbar() {

  return (
    <header className="bg-gray-800 md:top-0 z-10 text-gray-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-center">
        <Link href={'/'} passHref={true}>
          <a><HomeIcon className="w-8 h-6 md:ml-0 hover:text-white mb-3 md:m-0"/></a>
        </Link>
        </div>
      <span className="flex mx-auto lg:mr-10"></span>
      <h1 className="title-font font-medium text-white
        cursor-pointer hover:underline 
        select-none mb-4 md:mb-0 hidden md:block md:mr-4"> 
        <Link href="/Portfolio#about" passHref={true} className="text-xl">Joshua Bell</Link>
      </h1>
      <nav className="md:mr-auto md:ml-4 md:py-1 
        md:pl-4 md:border-l md:border-gray-700 
        flex flex-wrap items-center text-base 
        justify-center space-x-3 md:space-x-6">
        <Link href="/Portfolio#projects" passHref={true} className="mr-5 hover:text-white">
          <a>Projects</a>
        </Link>
        <Link href="/Portfolio#skills" passHref={true} className="mr-5 hover:text-white">
          Skills
        </Link>
        <Link href="/Portfolio#contact" passHref={true} className="mr-5 hover:text-white">
          Contact
        </Link>
        <Link href="/Web3" passHref={true} className="mr-5 hover:text-white">
          Web3
        </Link>
        <Link href="/Chart" passHref={true} className="mr-5 hover:text-white">
          <a className="text-green-500 text-lg">Chart</a>
        </Link>       
      </nav>
      <div>   
        <div className="p-4 flex">
          <Link
            href="https://github.com/itripleg/" passHref={true}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 
            focus:outline-none hover:bg-gray-700 rounded text-base">
              <a className="ml-4">Github</a>
          </Link>
          <ArrowRightIcon className="invisible md:visible w-4 h-4 ml-1 md:mt-1" />
          </div>
        </div>
      </div>
    </header>
    )
}

export default Navbar