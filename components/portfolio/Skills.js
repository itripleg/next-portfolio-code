import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "./data";

export default function Skills() {
  return (
    <div className="pb-20 bg-gradient-to-b from-black via-green-900 to-black ">
      <section id="skills">
        <div className="px-5 py-10 lg:pt-20">
          <div className="text-center mb-20">
            <ChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              A wide range of various computer sciences and fullstack
              technology. Always learning more!
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
