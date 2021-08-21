import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import App from './App'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is index.js</h1>
      <Link href="/App">Home</Link>
    </div>
  )
}
