import { ArrowRightIcon, HomeIcon, MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  console.log(router.pathname);

  const goTo = (location) => {
    window.scrollTo({
      top: location,
      behavior: "smooth",
    });
  };

  return (
    <header className="header bg-black from-green-900 to-black md:top-0 z-2 text-gray-400 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-center">
          <Link href={"/"} passHref={true}>
            <a>
              <HomeIcon className="w-8 h-6 md:ml-0 hover:text-white mb-3 md:m-0" />
            </a>
          </Link>
        </div>
        <span className="flex mx-auto lg:mr-10"></span>
        <h1
          className="title-font font-medium text-white 
        select-none mb-4 md:mb-0 hidden md:block md:mr-4"
        >
          <p className="text-xl"> Joshua Bell</p>
        </h1>
        <nav
          className="md:mr-auto md:ml-4 md:py-1 
        md:pl-4 md:border-l md:border-gray-700 
        flex flex-wrap items-center text-base 
        justify-center space-x-3 md:space-x-6"
        >
          {/* Links use conditional rendering to determine if they should smooth scroll or follow an href */}
          <Link href="/Chart" passHref={true} className="mr-5">
            <a className="text-gray-400 text-lg hover:text-white">Chart</a>
          </Link>
          {/* Projects */}
          {router.pathname != "/" ? (
            <Link
              href="/Portfolio#projects"
              // passHref={true}
              className="mr-5 hover:text-white"
            >
              <a className="hover:text-white">Projects</a>
            </Link>
          ) : (
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={() => {
                goTo(850);
              }}
            >
              Projects
            </a>
          )}
          {/* Skills */}
          {router.pathname != "/" ? (
            <Link
              href="/Portfolio#skills"
              // passHref={true}
              className="mr-5 hover:text-white"
            >
              <a className="hover:text-white">Skills</a>
            </Link>
          ) : (
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={() => {
                // goTo(1850);
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </a>
          )}
          {/* Web3 */}
          {/* <Link href="/Web3" passHref={true} className="mr-5">
            <a className="hover:text-white">Web3</a>
          </Link> */}
          {/* Contact */}
          {router.pathname != "/" ? (
            <Link
              href="/Portfolio#contact"
              // passHref={true}
              className="mr-5 hover:text-white"
            >
              <a className="hover:text-white">Contact</a>
            </Link>
          ) : (
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={() => {
                // goTo(1850);
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          )}
        </nav>
        <div>
          <div className="p-4 hidden md:flex">
            {/* <Link
              href="https://github.com/itripleg/"
              passHref={true}
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 
            focus:outline-none hover:bg-gray-700 rounded text-base"
            >
              <a className="ml-4 hover:text-white">Github</a>
            </Link> */}
            {/* <ArrowRightIcon className="invisible md:visible w-4 h-4 ml-1 md:mt-1" /> */}
            {/* <SocialIcon url="https://www.facebook.com/joshua.bell.902" /> */}
            <SocialIcon
              url="https://github.com/itripleg"
              className="w-2 h-20"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
