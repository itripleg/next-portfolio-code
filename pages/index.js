// import React from "react";
// import Image from "next/image";
import Portfolio from "../pages/Portfolio";
// import Head from "next/head";
// import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
// import Projects from "../components/portfolio/Projects";
// import dynamic from "next/dynamic";

export default function Index(session) {
  // const Portfolio = dynamic(() => import("../pages/Portfolio"));
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const showSplashScreen = async () => {
      console.log("setting timeout");
      await setTimeout(() => {
        setSplash(false);
      }, 2211);
    };
    showSplashScreen();
    return () => {};
  }, []);

  return splash ? (
    <main className="bg-gray-800 text-white loading ">
      <div className="flex mx-auto items-center min-h-screen text-center justify-center align-center pb-40 h-40">
        <p className="animate-bounce text-xl">buncombe.tech</p>
      </div>
    </main>
  ) : (
    <Portfolio />
  );
}
