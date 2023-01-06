import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "./data";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <div className="pb-8 bg-gradient-to-b from-black via-pink-600 to-black">
      <section id="projects" className="text-gray-400">
        <div className="container text-center px-5 py-8 md:py-20 lg:py-34 mx-auto lg:px-40">
          <div className="flex flex-col w-full mb-20 lg:flex-col h-full">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              {"Projects"}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {`Here are some projects I'm currently working on. The social media clones are 
               made for demo purposes, but feel free to login to them and make a post! I
               will upload all relevant code to my Github as progress is made.`}{" "}
              <br />
              <Link className="w-1/5" href="/Three">
                <a className="text-center text-bold text-lg hover:cursor-pointer underline text-black animate-pulse">
                  Checkout some new experimental stuff!
                </a>
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap -m-4 grid-cols-2 justify-center gap-3 md:gap-0 min-h-200">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="md:w-1/2 w-100 p-4"
              >
                <div className="flex relative h-full ">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-md lg:rounded-none"
                    src={project.image}
                    layout="fill"
                    unoptimized={true}
                  />
                  <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
