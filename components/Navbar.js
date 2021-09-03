import React, { useState } from 'react'
import { ArrowRightIcon, HomeIcon, MenuIcon } from "@heroicons/react/solid";
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import { useMoralis } from 'react-moralis';

function Navbar() {

const CustomHomeIcon = React.forwardRef(function CustomComponent(props, ref) {
  return (
      <Link href={'/'} passHref={true}> 
      <HomeIcon className="w-8 h-6 mr-2 md:ml-0 hover:text-white" >
      </HomeIcon>
    </Link>
  );
});

  return (
    <header className="bg-gray-800  top-0 z-10 text-gray-400 sticky">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex">
          <CustomHomeIcon/>
        </div>
      <span className="flex mx-auto lg:mr-10"></span>
      <h1 className="title-font font-medium text-white
        cursor-pointer hover:underline 
        select-none mb-4 md:mb-0 "> 
        <Link href="/#about" passHref={true} className="text-xl mr-4">Joshua Bell</Link>
      </h1>
      <nav className="md:mr-auto md:ml-4 md:py-1 
        md:pl-4 md:border-l md:border-gray-700 
        flex flex-wrap items-center text-base 
        justify-center space-x-3 md:space-x-6">
        <Link href="/#projects" passHref={true} className="mr-5 hover:text-white">
          Past Work
        </Link>
        <Link href="/#skills" passHref={true} className="mr-5 hover:text-white">
          Skills
        </Link>
        <Link href="/#contact" passHref={true} className="mr-5 hover:text-white">
          Contact
        </Link>
        <Link href="/Blockchain" passHref={true} className="mr-5 hover:text-white">
          Blockchain
        </Link>          
      </nav>
      <div>   
        <div className="p-4 flex">
          <Link
            href="https://github.com/itripleg/" passHref={true}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 
            focus:outline-none hover:bg-gray-700 rounded text-base">
              Github
          </Link>
          <ArrowRightIcon className="invisible md:visible w-4 h-4 ml-1 md:mt-1" />
          </div>
        </div>
      </div>
    </header>
    )
}

export default Navbar