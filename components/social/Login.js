import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div className="grid place-items-center mt-6">
      <p className="flex text-wrap text-center md:mx-60 lg:p-16 sm:text-xl font-bold text-blue-500">
        This is a demo version of a Facebook-like social media app. By signing
        in below, you will only be displaying information you have already
        aggreed to make public (display name, email, profile pic, etc.) This
        info is only used for display purposes on the demo app.
      </p>
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        alt="logo"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Next.js
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await providers(context),
    },
  };
}
