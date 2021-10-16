import React from "react";
import Image from 'next/image'
import Portfolio from '../pages/Portfolio'
import Head from 'next/head'

export default function Index(session) {



  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Portfolio />
      </main>
    )
}