import { getProviders, signIn, signOut, useSession } from "next-auth/react";

export default function SignIn({ providers }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          Logged in as {session.user.name}
          <br /> Email: {session.user.email}
          <br /> Token: {session.accessToken}
          <br /> Image: {session.user.image}
          <img src={session.user.image}></img>
        </div>
        <button className="outline-black" onClick={() => signOut()}>
          Sign Out
        </button>
      </>
    );
  }

  return (
    <div className="h-screen ">
      <div className="flex flex-col justify-center items-center p-20">
        <h1>This is a custom signin page</h1>
        {Object.values(providers).map((provider) => (
          <div className="mt-20" key={provider.name}>
            <button
              className="outline-black"
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
