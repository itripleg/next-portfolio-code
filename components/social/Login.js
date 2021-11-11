import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div className="grid place-items-center ">
      <div className="relative">
        <Image
          src={"/Facebook-logo.png"}
          // layout="fill"
          objectFit="contain"
          width={200}
          height={200}
          alt="logo"
        />
      </div>
      <p className="flex pb-6 text-center mx-4 md:mx-60 lg:p-16 sm:text-xl font-bold text-blue-500">
        {`This is a demo version of a Facebook-like social media app I'm making
                for R&D purposes. Your public info is currently used for
                cosmetic display purposes only.`}
      </p>
      <p className="flex pb-12 text-center mx-4 md:mx-60 lg:p-16 sm:text-xl font-bold text-gray-700 animate-pulse">
        {`Don't post sensitive information you wouldn't want
        others to see here.`}
      </p>
      <h1
        onClick={signIn}
        className="p-5 mb-12 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        {`Let me in!`}
      </h1>
      <div className=" text-center">
        <h1 className="font-bold">To Do List</h1>
        <li>
          <strike>Order posts from newest to oldest</strike>
        </li>
        <strike>Load user profile picture when using Facebook login</strike>
        <li>Remove searchbox outline</li>
        <strike>Improve mobile responiveness</strike>
        <li>Add submit post button</li>
        <li>Add clear/delete post button</li>
        <li>
          <strike>
            Populate stories and contacts with randomly generated user data
          </strike>
        </li>
        <li>
          <strike>Retrieve all posts from Firebase datastore </strike>
        </li>
        <li>
          <strike>Include optional photo with posts</strike>
        </li>
        <li>
          <strike>Add timestamp to posts</strike>
        </li>
      </div>
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
