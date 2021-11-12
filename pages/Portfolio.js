import Navbar from "../components/Navbar";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
// import Projects from "../components/portfolio/Projects";
// import Contact from "../components/portfolio/Contact";
import { ArrowUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

// const DAbout = dynamic(() => import("../components/portfolio/About"));
// const DSkills = dynamic(() => import("../components/portfolio/Skills"));
const Projects = dynamic(() => import("../components/portfolio/Projects"));
const Contact = dynamic(() => import("../components/portfolio/Contact"));

export default function Portfolio() {
  const { observe, inView } = useInView();
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <div className="">
        <About />
        <Skills />
        <Projects />
        <div ref={observe}>{inView && <Contact />}</div>
        <Link className="" href={"/Portfolio"}>
          <a>
            <ArrowUpIcon className="fixed bottom-0 right-0 m-4 text-white hidden xl:block w-10" />
          </a>
        </Link>
      </div>
    </main>
  );
}
