import Head from "next/head";
import { useSession } from "next-auth/react";
import Login from "../components/social/Login";
import dynamic from "next/dynamic";
import { useState } from "react";
const Header = dynamic(() => import("../components/social/Header"));
const Sidebar = dynamic(() => import("../components/social/Sidebar"));
const Feed = dynamic(() => import("../components/social/Feed"));
const Widgets = dynamic(() => import("../components/social/Widgets"));

export default function Social() {
  const { data: session } = useSession();
  if (!session) {
    return <Login />;
  }
  return (
    <div
      className={`h-screen bg-gray-100 w-full transition transform duration-120 ease-out fixed`}
    >
      {console.log("session access token: ", session.accessToken)}
      <Head>
        <title>Fakebook</title>
      </Head>
      <Header />

      {/*<button onClick={showNavBar}>Navbar</button>*/}
      <main className="flex">
        <Sidebar />
        <Feed className="" />
        <Widgets className="" />
      </main>
    </div>
  );
}
