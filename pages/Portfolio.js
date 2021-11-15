import Navbar from "../components/Navbar";
import About from "../components/portfolio/About";
// import Skills from "../components/portfolio/Skills";
// import Projects from "../components/portfolio/Projects";
// import Contact from "../components/portfolio/Contact";
import { ArrowUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
import GithubCalendar from "react-github-calendar";

// const About = dynamic(() => import("../components/portfolio/About"));
const Skills = dynamic(() => import("../components/portfolio/Skills"));
const Projects = dynamic(() => import("../components/portfolio/Projects"));
const Contact = dynamic(() => import("../components/portfolio/Contact"));

export default function Portfolio() {
  const { observe, inView } = useInView({ rootMargin: "150px" });
  return (
    <main className="text-gray-400 body-font bg-black">
      <div className="pb-8">
        <About />
        <Projects />
        {/*        <div className="w-full bg-black flex mx-auto justify-center">
          <p className="text-center justify-center items-center pr-4">
            Github Activity
          </p>
          <GithubCalendar
            username="itripleg"
            hideColorLegend
            hideTotalCount
            color={"#2DD13EFF"}
          />
        </div>*/}
        <Skills />
        <Contact />
        <div ref={observe}>
          {inView && (
            <Link className="z-" href={"/Portfolio"}>
              <a>
                <ArrowUpIcon
                  className="fixed bottom-1/2 right-0 m-4 text-white hidden
                 xl:block w-10 animation transition-all ease-in-out duration-1000 bg-gradient-to-b from-gray-600 rounded-md"
                />
              </a>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
