import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar';
import { useState } from 'react';
// import { useMoralis } from 'react-moralis';
// import { MoralisProvider } from 'react-moralis';

const appId ="kDIpI7RTlC1K51JQQ5vFrWBYggHY09E7hrGrH52n";
const serverUrl ="https://rub78qqvax12.moralis.io:2053/server";



function MyApp({ Component, pageProps }) {
  // const doSomething = ()=> {alert()}
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
