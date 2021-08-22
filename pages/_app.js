import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MoralisProvider } from 'react-moralis';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';

const appId ="kDIpI7RTlC1K51JQQ5vFrWBYggHY09E7hrGrH52n";
const serverUrl ="https://rub78qqvax12.moralis.io:2053/server";



function MyApp({ Component, pageProps }) {
  const doSomething = ()=> {alert()}
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Navbar />
      <Component {...pageProps} />
    </MoralisProvider>
    )
}

export default MyApp
