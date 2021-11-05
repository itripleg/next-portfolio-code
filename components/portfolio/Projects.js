import { CodeIcon, HomeIcon } from "@heroicons/react/solid";
import { projects } from "./data";
import Image from "next/image";

function Projects() {
  return (
    //projects is a component section that makes up part of <Portfolo/>
    <div className="">
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20 lg:flex-col h-full">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              {"Current and Past Projects"}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {`Here are some projects I'm currently working on. Most are still in
            beta with limited features but used for demonstration purposes. I
            will try to post all revelant code to my Github as progress is made.`}
            </p>
          </div>
          <div className="flex flex-wrap -m-4 grid-cols-2 justify-center gap-3 md:gap-0 min-h-200">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative h-full">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                    layout="fill"
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
