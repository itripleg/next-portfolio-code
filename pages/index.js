import React from "react";
import Image from 'next/image'
import Router from 'next/router'
import Portfolio from '/pages/Portfolio'

export default function Index() {



  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Portfolio />
      </main>
    )
}
