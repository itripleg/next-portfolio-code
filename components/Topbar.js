import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid';

function Topbar() {
	return (
		<header className="bg-gray-900 top-0 z-10 flex">
			<div className="container flex p-7 flex-col mb-5 h-7 text-gray text-center md:flex-row mx-auto">
				<h1 className="text-white">Welcome!</h1>
				 {/*<h1 className="ml-5 invisible md:visible">Please login to Web3 get started</h1>*/}
{/*				<Link href="/Web3" passHref={true}>
					<button className="position absolute 
					right-1 mr-10 transition
					 transform duration-150
					  hover:scale-150 w-15">Login to Web3</button>
				</Link>*/}
			</div>
		</header>
	)
}

export default Topbar