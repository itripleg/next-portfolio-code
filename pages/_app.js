import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
// import { useMoralis } from 'react-moralis';
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import { Provider } from "next-auth/client";

const appId = "kDIpI7RTlC1K51JQQ5vFrWBYggHY09E7hrGrH52n";
const serverUrl = "https://rub78qqvax12.moralis.io:2053/server";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,
            <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 110 90%22>
            <text y=%22.9em%22 font-size=%2290%22>🧙🏽‍</text></svg>"
          />
        </Head>
        {/*<Navbar />*/}
        <Component {...pageProps} />
      </MoralisProvider>
    </Provider>
  );
}

export default MyApp;
