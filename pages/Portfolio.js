import Navbar from "../components/Navbar";
import About from "../components/portfolio/About";
// import Skills from "../components/portfolio/Skills";
// import Projects from "../components/portfolio/Projects";
// import Contact from "../components/portfolio/Contact";
import { ArrowUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

// const About = dynamic(() => import("../components/portfolio/About"));
const Skills = dynamic(() => import("../components/portfolio/Skills"));
const Projects = dynamic(() => import("../components/portfolio/Projects"));
const Contact = dynamic(() => import("../components/portfolio/Contact"));

export default function Portfolio() {
  const { observe, inView } = useInView({ rootMargin: "150px" });
  return (
    <main className="text-gray-400 body-font ">
      <div className="bg-gradient-to-br from-black to-pink-900 via-green-800 pb-8">
        <About />
        <Skills />
        <Projects />
        <div ref={observe}>
          {inView && (
            <Link className="" href={"/Portfolio"}>
              <a>
                <ArrowUpIcon
                  className="fixed bottom-1/2 right-0 m-4 text-white hidden
                 xl:block w-10 animation animate-bounce transition-all ease duration-100 bg-gradient-to-b from-gray-600 rounded-md"
                />
              </a>
            </Link>
          )}
          <Contact />
        </div>
      </div>
    </main>
  );
}
