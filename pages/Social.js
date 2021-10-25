import Head from "next/head";
import Image from "next/image";
import { getSession, useSession, signIn } from "next-auth/react";
import Header from "../components/social/Header";
import Login from "../components/social/Login";
import Sidebar from "../components/social/Sidebar";
import Feed from "../components/social/Feed";
import Widgets from "../components/social/Widgets";
import { useEffect, useState } from "react";

export default function Social() {
  //TODO: implement way to show/hide app navbar
  const [fixed, setFixed] = useState("fixed");
  const showNavBar = () => {
    fixed == "sticky" ? setFixed("fixed") : setFixed("sticky");
  };

  const { data: session } = useSession();
  if (!session) {
    return <Login />;
  }
  return (
    <div
      className={`h-screen bg-gray-100 ${fixed} w-full top-0 transition transform duration-120 ease-out`}
    >
      <Head>
        <title>Fakebook</title>
      </Head>
      <Header />
      {/*<button onClick={showNavBar}>Navbar</button>*/}
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
