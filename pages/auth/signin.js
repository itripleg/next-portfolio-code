import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import UserImage from "../../components/UserImage";
import Image from "next/image";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="pl-2 flex container">
        {/*{console.log(session.provider)}*/}
        {/*{console.log(session)}*/}
        <div className="flex-row container ">
          <div className="p-4 text-center break-words">
            <UserImage width="80" height="80" />
            <br /> Provider: {session.provider}
            <br /> Provider Account Id: {session.providerAccountId}
            <br /> Logged in as {session.user.name}
            <br /> Email: {session.user.email}
            <br /> Session Image URL: {session.user.image}
            <br /> Token: {session.accessToken}
          </div>
          <button
            className="bg-gray-300 rounded-md p-3 right-0 fixed"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen ">
      <div className="flex flex-col justify-center items-center p-20">
        <h1>This is a custom signin page</h1>
        {Object.values(providers).map((provider) => (
          <div className="mt-20" key={provider.name}>
            <button
              className="outline-black p-4"
              onClick={() => {
                signIn(provider.id);
              }}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
