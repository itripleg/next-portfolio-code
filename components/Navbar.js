import React, { useState } from 'react'
import { ArrowRightIcon, HomeIcon, MenuIcon } from "@heroicons/react/solid";
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useMoralis } from 'react-moralis';

function Navbar() {
  return (
    <header className="bg-gray-800  top-0 z-10 text-gray-400 sticky">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        Left side of navigation bar Link
        <div className="flex">
          <HomeIcon className="w-8 h-6 mr-2 md:ml-0 hover:text-white"><Link href={'/'}></Link></HomeIcon> 
        </div>
        <span className="flex mx-auto lg:mr-10"></span>
        <h1 className="title-font font-medium text-white
          cursor-pointer hover:underline 
          select-none mb-4 md:mb-0 "> 
          <Link href="/#about" className="text-xl mr-4">Joshua Bell</Link>
        </h1>
        <nav className="md:mr-auto md:ml-4 md:py-1 
          md:pl-4 md:border-l md:border-gray-700 
          flex flex-wrap items-center text-base 
          justify-center">
          <Link href="/#projects" className="mr-5 hover:text-white">
            Past Work
          </Link>
          <Link href="/#skills" className="mr-5 hover:text-white">
            Skills
          </Link>
          <Link href="/#contact" className="mr-5 hover:text-white">
            Contact
          </Link>
          <Link href="/Web3" className="mr-5 hover:text-white">
            Web3
          </Link>          
        </nav>
        <div>   
          <Link
            href="https://github.com/itripleg/" passHref={true}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base">
            Github
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar