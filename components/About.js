import React from 'react'
import TextLoop from 'react-text-loop'

function About() {
	return (
		<section id="about">
					<h1 className="title-font sm:text-4xl text-3xl pt-12 font-medium text-white text-center mb-6">
						Lets {''}
							<TextLoop interval="5000">
								<h1> Build </h1>
                <h1> Work </h1>
                <h1> Decentralize </h1>
                <h1> Succeed </h1>
                <h1> Thrive </h1>
                <h1> Play </h1>
							</TextLoop>{' '} 
						Together
					</h1>
			<div className="container mx-auto flex px-10  flex-row  items-center  ">
				<div className=" md:w-100 md:pr-16 flex flex-col mb-16 items-center text-center ">
					<div className="flex flex-col items-center  md:flex-col lg:flex-row ">
						<img src="./me.jpg" className="loading=lazy rounded-full 
							h-20 m-4 transition transform duration-150 hover:scale-110 md:h-26 lg:h-36"/>
						<p className="text-center mt-6 mb-10 lg:mb-0 p-12 ">
							Full Stack developer. Musican. Crypto and Blockchain enthusist.
							I love working with bleeding edge technology helping to decentralize the web.
							This page was built using Next.js and Tailwind CSS.</p>
							<div className=" flex">							
						<a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600
              	rounded text-lg transition transform duration-150 hover:scale-110 text-center">
              Work With Me
            </a>
            <a
              href="#projects"
              className="text-center ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700
               hover:text-white rounded text-lg transition transform duration-150 hover:scale-110">
              See My Past Work
            </a>
					</div>

					</div>

				</div>
			</div>
		</section>
	)
}

export default About