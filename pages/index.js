import Head from 'next/head'
import Image from 'next/image'
import Portfolio from './Portfolio'
import Link from 'next/link'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

export default function Home() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Head>
        <title>Josh Bell Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
            <main className="bg-gray-900 p-7 mt-20 text-center mx-auto">
          <div className="p-28">
            <Link href="/Portfolio" className="w-full">About Me</Link>
          </div>
          <div className="p-28">
            <Link href="/Portfolio#contact">Contact</Link>
          </div>
          <div className="p-28 w-full">
            <Link href="https://github.com/itripleg">Github</Link>
          </div>
      </main>
      
    </div>
  )
}
