import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const appId = "REyr2sTyKaApzCp9B5RZgKYbrBLQT7bmO5Zow0AG";
  const serverUrl = "https://8ztahdupkaup.grandmoralis.com:2053/server";

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Josh Bell Dev</title>
        <link
          rel="icon"
          href="data:image/svg+xml,
            <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 110 90%22>
            <text y=%22.9em%22 font-size=%2290%22>👨🏾‍💻</text></svg>"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Josh Bell developer services" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Programming" />
        <meta name="author" content="Joshua Bell" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
