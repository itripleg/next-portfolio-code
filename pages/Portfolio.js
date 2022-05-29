import About from "../components/portfolio/About";
import { ArrowUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
import GithubCalendar from "react-github-calendar";

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
        <a href="https://github.com/itripleg">
          <p className="text-center justify-center">Checkout My Github!</p>
          <div className="flex justify-center p-6">
            <GithubCalendar
              username="itripleg"
              hideColorLegend
              hideTotalCount
              color={"#2DD13EFF"}
            />
          </div>
        </a>
        <Skills />
        <Contact />
        <div ref={observe}>
          {inView && (
            <Link className="" href={"/Portfolio"}>
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
