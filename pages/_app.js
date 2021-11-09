import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
// import { useState } from "react";
// import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

const appId = "REyr2sTyKaApzCp9B5RZgKYbrBLQT7bmO5Zow0AG";
const serverUrl = "https://8ztahdupkaup.grandmoralis.com:2053/server";
// if (appId && serverUrl)
// console.log(process.env.REACT_APP_MORALIS_SERVER_URL);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {/*<MoralisProvider appId={appId} serverUrl={serverUrl}>*/}
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,
            <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 110 90%22>
            <text y=%22.9em%22 font-size=%2290%22>🧙🏽‍</text></svg>"
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      {/*</MoralisProvider>*/}
    </SessionProvider>
  );
}
