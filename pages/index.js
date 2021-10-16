import React from "react";
import Image from 'next/image'
import Portfolio from '../pages/Portfolio'
import Head from 'next/head'
import { getSession } from 'next-auth/client'

export default function Index(session) {



  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Portfolio />
      </main>
    )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}