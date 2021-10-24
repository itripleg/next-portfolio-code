import React from "react";
import Image from "next/image";
import Portfolio from "../pages/Portfolio";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Projects from "../components/portfolio/Projects";

export default function Index(session) {
  useEffect(() => {
    return <h1>Use Effect Test</h1>;
  }, []);
  return (
    <main className="">
      <div className="">
        <Portfolio />
      </div>
    </main>
  );
}
