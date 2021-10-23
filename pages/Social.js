import Head from "next/head";
import Image from "next/image";
import { getSession } from "next-auth/client";
import Header from "../components/social/Header";
import Login from "../components/social/Login";
import Sidebar from "../components/social/Sidebar";
import Feed from "../components/social/Feed";
import Widgets from "../components/social/Widgets";

export default function Social({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 fixed w-full top-0 ">
      <Head>
        <title>Fakebook</title>
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
