import TextLoop from "react-text-loop";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  const variants = {
    show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <>
      <section
        id="about"
        className="flex flex-col justify-center items-center 
        bg-gradient-to-b from-gray-900 to-black via-black md:px-20"
      >
        <div className="lg:mb-20 lg:mt-20">
          <h1
            className="title-font sm:text-4xl text-3xl pt-12 font-medium
           text-white text-center mb-6 md:space-x-8"
          >
            {`Let's `}
            <TextLoop interval="4500" className="">
              <h1> Build </h1>
              <h1> Work </h1>
              <h1> Decentralize </h1>
              <h1> Succeed </h1>
              <h1> Thrive </h1>
              <h1> Play </h1>
            </TextLoop>{" "}
            Together
          </h1>
        </div>
        <div className="container mx-auto flex px-10  flex-row  items-center">
          <div className=" md:w-100  flex flex-col mb-16 items-center text-center ">
            <div className="flex flex-col items-center md:flex-col justify-items-center lg:px-[175px]">
              <Image
                alt="me"
                src="/me_mask.jpg"
                className="loading=lazy rounded-full h-20 m-4 transition transform duration-150 md:h-26 md:w-1 lg:h-36"
                width="150"
                height="150"
              />

              <motion.div
                className="py-12 "
                variants={variants}
                initial={{ opacity: 0 }}
                animate={"show"}
              >
                <p className=" lg:block text-center mt-6 mb-10 lg:mb-0">
                  Dev, pentester, crypto and blockchain enthusiast. I love to
                  code with new technology helping decentralize the web. Based
                  in Asheville, North Carolina. I built this page with 💖using{" "}
                  <a href="http://nextjs.org" className="underline">
                    Next.js
                  </a>{" "}
                  and{" "}
                  <a href="http://tailwindcss.com" className="underline">
                    {" "}
                    Tailwind CSS
                  </a>
                  . Hosted on{" "}
                  <a href="https://www.netlify.com/" className="underline">
                    Netlify
                  </a>{" "}
                  via handwritten code in my{" "}
                  <a
                    href="https://github.com/itripleg/next-portfolio-code"
                    className="underline"
                  >
                    Github.
                  </a>
                  <motion.div
                    animate={{ opacity: 1, y: 20, scale: 1.5 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    Checkout my new{" "}
                    <a
                      href="https://jbtechblog.netlify.app/"
                      className="underline"
                    >
                      Blog!
                    </a>
                  </motion.div>
                </p>
              </motion.div>
              <div className="flex ml-5">
                <a
                  onClick={() => {
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex text-white bg-gradient-to-tl from-green-900 to-green-400 via-green-600 border-0 py-2 md:py-4 px-6 focus:outline-none hover:bg-green-600
                rounded text-lg transition transform duration-150 hover:scale-110 text-center"
                >
                  Work With Me
                </a>
                <a
                  onClick={() => {
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-center ml-4 inline-flex text-gray-400 bg-gradient-to-tl from-gray-900 to-gray-500 border-0 py-2 md:py-4 px-8 focus:outline-none hover:bg-gray-700
               hover:text-white rounded text-lg transition transform duration-150 hover:scale-110"
                >
                  See My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
