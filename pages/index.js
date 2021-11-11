// import React from "react";
// import Image from "next/image";
// import Portfolio from "../pages/Portfolio";
// import Head from "next/head";
// import Navbar from "../components/Navbar";
// import Projects from "../components/portfolio/Projects";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function Index(session) {
  const Portfolio = dynamic(() => import("../pages/Portfolio"));
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const showSplashScreen = async () => {
      await setTimeout(() => {
        setSplash(false);
      }, 1800);
    };
    showSplashScreen();
    return () => {};
  }, [splash, setSplash]);

  return splash ? (
    <main className="bg-black text-white ">
      <div className="flex mx-auto items-center min-h-screen text-center justify-center align-center pb-40 h-40">
        <p className="transition-all duration-500 ease-in-out animate-bounce text-xl">
          buncombe.tech
        </p>
      </div>
    </main>
  ) : (
    <Portfolio />
  );
}
