import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div className="grid place-items-center ">
      <div className="relative">
        <Image
          src={"https://links.papareact.com/t4i"}
          // layout="fill"
          objectFit="contain"
          width={200}
          height={200}
          alt="Instagram"
        />
      </div>
      <p className="flex pb-4 md:pb-6 text-center mx-4 md:mx-60 lg:p-8 sm:text-xl font-bold text-blue-500">
        {`This is a demo version of a Facebook-like social media app I'm making
                for R&D purposes. By "signing in" to this demo, you will (only) be sharing public
                profile information you have already aggreed to make public; (Like your display
                name, email, and profile pic.) This info is currently used for
                cosmetic display purposes only. I currently intend to leave any info this early demo collects public.`}
      </p>
      <p className="flex pb-6 md:pb-12 text-center mx-4 md:mx-60 lg:p-16 sm:text-xl font-bold text-gray-700 animate-pulse">
        {`To put it simply: Don't post sensitive information you wouldn't want
        others to see here. Use my contact form if you need me to delete
        something you submitted.`}
      </p>
      <h1
        onClick={signIn}
        className="p-5 mb-12 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        {`I know what I'm doing`}
      </h1>
      <div className="text-center"></div>
      <h1 className="font-bold">To Do List</h1>
      <p>Order posts from newest to oldest</p>
      <p>Load user profile picture when using Facebook authentication method</p>
      <p>Remove searchbox outline</p>
      <p>Improve mobile responiveness</p>
      <p>Add submit post button</p>
      <p>Add clear/delete post button</p>
      <strike>
        Populate stories and contacts with randomly generated user data
      </strike>
      <strike>Retrieve all posts from Firebase datastore </strike>
      <strike>Include optional photo with posts</strike>
      <strike>Add timestamp to posts</strike>

      <p></p>
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
