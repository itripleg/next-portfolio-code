// import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Chart = () => {
  // apparently we need client side/dynamic rendering for tv-widget to work reliably
  const DynamicChart = dynamic(() => import("react-tradingview-widget"), {
    ssr: false,
  });

  return (
    <>
      {/* <div className="notification bg-yellow-600 py-4 flex justify-center ">
        Chart undergoing scheduled maintenance!
      </div> */}
      <div className="bg">
        <div className="container">
          {/* <p>this is a test</p> */}
          <div className="chart">
            <DynamicChart
              symbol="BTCUSDT"
              theme="Dark"
              autosize
              // withdateranges
              calendar
              // hide_legend
              // enable_publishing
              hide_side_toolbar={false}
              watchlist={[
                "CRYPTOCAP:BTC.D",
                "CRYPTOCAP:ETH.D",
                "CRYPTOCAP:BNB.D",
                "BINANCE:BTCUSDT",
                "BINANCE:ETHUSDT",
                "BINANCE:BNBUSDT",
                "BINANCE:EOSUSDT",
                "BINANCE:DOTUSDT",
                "BINANCE:UNIUSDT",
              ]}
              studies={
                [
                  // "RSI@tv-basicstudies"
                ]
              }
            />
          </div>
          <br />
          {/* To do list */}
          <div
            className="bg-gray-800 text-gray-300 grid grid-cols-2 p-4
          gap-4 place-content-stretch place-items-center text-center"
          >
            <div className="p-2 ">
              <p className="underline">To do list</p>
              <br />
              <ul className="">
                <li>Save previous chart layout...</li>
                <li>Add bullish/bearish bias...</li>
                <li>Common harmonic patterns...</li>
                <li>Draggable chart positions...</li>
                <li>Add easy indicators on...</li>
              </ul>
            </div>
            <div className="flex lg:block">
              <div className="card">
                <p className="text-gray-600">
                  You can checkout my past TA ideas on Trading view
                </p>
                <Link href="https://www.tradingview.com/u/hashbang/">
                  <a className="text-green-900 text-bold">@Hashbang</a>
                </Link>
              </div>
              <img
                src="/tv.png"
                className="max-h-[75px] rounded-full md:hidden p-2"
              ></img>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
