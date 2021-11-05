import Head from "next/head";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import Login from "../components/social/Login";
import dynamic from "next/dynamic";
import { useState } from "react";
const Header = dynamic(() => import("../components/social/Header"));
const Sidebar = dynamic(() => import("../components/social/Sidebar"));
const Feed = dynamic(() => import("../components/social/Feed"));
const Widgets = dynamic(() => import("../components/social/Widgets"));

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
