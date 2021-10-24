import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useMoralis } from "react-moralis";
import React, { useState } from "react";
import Moralis from "moralis";
import Profile from "../components/web3/Profile";
import ReactDOM from "react";

const SignupBox = () => {
  const { login, isInitialized } = useMoralis();

  const emailSignup = async () => {
    console.log(email, password);
    try {
      const user = await Moralis.User.signup(email, password);
      alert("User Created!");
    } catch (err) {
      alert(err.message);
    }
  };
};

const Login = () => {
  const { login, isInitialized } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailLogin = async () => {
    console.log(email, password);
    try {
      const user = await Moralis.User.logIn(email, password);
      if (user) {
        window.location.reload();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      className="h-60 w-auto md:w-60 bg-gray-800 text-gray rounded-md
    p-4 m-4 text-center transform transition hover:scale-110 animate-pulse"
    >
      <form>
        <input
          className="rounded-md w-full h-12 text-center"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <input
          className="rounded-md w-full h-12 text-center"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </form>
      <button className="hover:text-green-500 mt-4 p-6" onClick={emailLogin}>
        Login
      </button>
      <p className="p-0 hover:underline hover:text-green-500 text-xs mt-4"></p>
    </div>
  );
};

export default function Web3() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    authError,
    logout,
    user,
  } = useMoralis();
  const [useEmail, showEmailBox] = useState(false);
  //   const [useSignupBox, showSignupBox] = useState(false);

  // const currentUser = async() => await Moralis.User.current();
  //   if(!currentUser){
  //     logout();
  //   }

  //   const handleSignup = () => {
  //       showSignupBox(!useSignupBox);
  //     };

  const handleEmail = () => {
    showEmailBox(!useEmail);
  };

  const metamaskLogin = async () => {
    if (showEmailBox) {
      showEmailBox(false);
    }
    await authenticate();
  };

  // If client is already authenticated
  if (isAuthenticated) {
    return <Profile />;
  }
  //Else client not authenticated
  return (
    <div id="signInOptions" className="text-gray-400 bg-gray-900 h-full z-0">
      {/*Main container*/}
      <Head>
        <title>Josh Bell Dev</title>
        <meta name="description" content="Created by Joshua Bell" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      {/*Login Card Container*/}
      <div className="flex-col p-20 text-center md:p-40 md:text-lg">
        <h1 className="text-xl text-white ">
          Please Login to Web3 to Continue
        </h1>
        <div className="container p-4 flex flex-col md:flex-row mx-auto justify-center md:p-20 lg:p-40">
          <div
            className="h-60 w-auto md:w-60 bg-gray-800 text-gray rounded-md p-4 m-4
            text-center transform transition hover:scale-110 hover:text-green-500 "
            onClick={metamaskLogin}
          >
            <h1 className="mb-8">Login With Metamask</h1>
            <Image
              src="/metamask.png"
              alt="metamask"
              height="100"
              width="100"
              className=""
            />
          </div>
          {useEmail ? (
            <Login />
          ) : (
            <div
              className="h-60 w-auto md:w-60 bg-gray-800 text-gray rounded-md p-4 m-4
            text-center transform transition hover:scale-110 hover:text-green-500"
              onClick={handleEmail}
            >
              <h1 className="mb-8 z-100">Login With Email</h1>
              <Image
                src="/email.png"
                alt="email"
                height="100"
                width="100"
                className="text-green-800"
              />
            </div>
          )}
          {/*{(useSignupBox ? <SignupBox /> : */}
          <div
            className="h-60 w-auto md:w-60 bg-gray-800 text-gray rounded-md p-4 m-4
            text-center transform transition hover:scale-110 hover:text-green-500 opacity-25"
          >
            {/*onClick={handleSignup}>*/}
            <h1 className="mb-8 z-100 text-white">Email Signup *Soon!*</h1>
            <Image
              src="/moralis.png"
              alt="moralis"
              height="100"
              width="100"
              className=""
            />
          </div>
        </div>
        <p>
          {
            "*Alpha testing is currently only available to Metamask users and privatly invited email address. If you'd like to be a tester, please use my contact form. More options coming soon!"
          }
        </p>
      </div>
    </div>
  );
}
