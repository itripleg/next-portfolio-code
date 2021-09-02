import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar';
// import { useMoralis } from 'react-moralis';
import React, { useState } from 'react';

// const Login  = () => {
//   const { login } = useMoralis();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   return(
//     <div className="h-60 w-auto md:w-60 bg-gray-800 text-gray rounded-md p-4 m-4
//             text-center transform transition hover:scale-110 animate-pulse">
//       <input className="rounded-md w-full h-12 text-center" placeholder="Email" value={email} onChange={(event)=> setEmail(event.currentTarget.value)}/>
//       <input className="rounded-md w-full h-12 text-center" placeholder="Password" type="password" value={password} onChange={(event)=> setPassword(event.currentTarget.value)}/>
//       <button className="hover:text-green-500 mt-4 p-6" onClick={() => login(email, password)}>Login</button>
//       <p className="p-0 hover:underline hover:text-green-500 text-xs mt-4">Or Signup</p>
//     </div>
//   )
// }

// export default function Web3() {
//   const {authenticate, isAuthenticated, isAuthenticating, authError, logout, user} = useMoralis();
//   const [useEmail, showEmailBox] = useState(false);
//   const handleEmail = () => {
//       showEmailBox(!useEmail)
//       console.log(useEmail)
//     };
//   const hideEmailBox = () => {
//       showEmailBox(false)
//     };


//   // If client is already authenticated
//   if(isAuthenticated) {
//    return(
//     <div className="h-screen bg-gray-900 p-20">
//       {/*Auth message and logout button*/}
//       <div className="container mx-auto flex gap-4 flex-col md:flex-row md:justify-between">
//         <h1 className="text-green-300 pt-3 m-4 animate-pulse center">Succesfully authenticated. Welcome back, { user.attributes.username } !</h1>
//         <button className="h-12 text-lg text-black bg-red-700 rounded-md w-40" onClick={logout}>Logout</button>
//       </div>
//       <div className= "container mx-auto mr-20 mt-20 text-gray-400 bg-gray-600 mr-80">
//         <h1 className="text-white text-xl">Profile</h1>
//         <p className="ml-20 ">Accounts: { user.attributes.accounts }</p>
//         <p className="ml-20 ">Email address: { user.attributes.email }</p>
//         <p className="ml-20 ">Avatar: { user.attributes.avatar }</p>
//       </div>
//     </div>
//     )  
//   }
//   //Else client not authenticated
//   return (
//     <div id="signInOptions" className="text-gray-400 bg-gray-900 h-screen z-0">
//       {/*Main container*/}
//       <Head>
//         <title>Josh Bell Dev</title>
//         <meta name="description" content="Created by Joshua Bell" />
//         {/*<link rel="icon" href="/favicon.ico" />*/}
//       </Head>
//       {/*Login Card Container*/}
//       <div className="flex-col p-20 text-center md:p-40 md:text-lg" >
//         <h1 className="text-xl text-white animate-pulse">Please Login to Web3 to Continue</h1>
//         <div className="container p-4 flex flex-col md:flex-row mx-auto justify-center md:p-20 lg:p-40" >
//           <div className="h-60 w-auto md:w-60 bg-gray-800 text-gray rounded-md p-4 m-4
//             text-center transform transition hover:scale-110 hover:text-green-500 animate-pulse"
//             onClick={authenticate, hideEmailBox}>
//             <h1 className="mb-8">Login With Metamask</h1>
//               <Image src="/metamask.png"
//                 alt="metamask"
//                 height="100"
//                 width="100" 
//                 className=""/>
//           </div> 
//           {(useEmail ? <Login /> : 
//           <div className="h-60 w-auto md:w-60 bg-gray-800 text-gray rounded-md p-4 m-4
//             text-center transform transition hover:scale-110 hover:text-green-500 animate-pulse"
//             onClick={handleEmail}>
//             <h1 className="mb-8 z-100">Login With Email</h1>
//               <Image src="/moralis.png"
//                 alt="moralis"
//                 height="100"
//                 width="100" 
//                 className=""/>
//           </div>)}
//         </div>
//       </div>
//   </div>
//   )
// }

const Web3 = () => {
  return (
    <div className="flex items-center mx-auto justify-content">
     
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>

  <form
    name="contact"
    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
      Contact Me
    </h2>
    <p className="leading-relaxed mb-5 text-center pt-3">
      Feel free to shoot me an email or call. Please note, I may not be available immediately between 11am-7pm on weekdays.
    </p>
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-400">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-4">
      <label
        htmlFor="email" className="leading-7 text-sm text-gray-400">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-4">
      <label
        htmlFor="message"
        className="leading-7 text-sm text-gray-400">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      />
    </div>
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Submit
    </button>
  </form>

    </div>
  )
}   
  
export default Web3