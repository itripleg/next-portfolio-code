import React from "react";
import Image from "next/image";
import Link from "next/link";

function Risque() {
  //this page is satire made by request for a friend
  return (
    <div className="bg-pink-900 lg:p-20 p-2 h-screen lg:h-[1050px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-6xl italic pb-6">Risqué Services</h1>
        <p className="p-6">
          Wow, if you found this page you're either a robot, hacker, or a{" "}
          <em className="text-pink-300 animate-pulse">special</em> client
          looking for
        </p>
        <ul className="list-disc italic py-6">
          <li>How To Be A Better Slut</li>
          <li>What Black Guys Really Want</li>
        </ul>
        <p className="">
          Just use our normal{" "}
          <a
            href="https://buncombe.tech/Portfolio#contact"
            className="underline"
          >
            contact
          </a>{" "}
          form with <em>"Risque"</em> as the subject! Can't wait to help ;)
        </p>
        <div className="flex flex-col pt-6 items-center pt-16">
          <Image
            className="rounded-full"
            width="600"
            height="600"
            src="/SLUT1.webp"
          />
          <p className=" text-white italic text-pink-700">
            Illustration by Cécile Dormeau
          </p>
        </div>
      </div>
    </div>
  );
}

export default Risque;
