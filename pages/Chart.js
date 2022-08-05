// import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import ChartBar from "../components/ChartBar";
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
        <div className="grid grid-cols-12">
          {/* <p>this is a test</p> */}
          <div className="hidden sm:block col-span-2 items-center flex justify-center place-items-center w-full">
            <ChartBar />
          </div>
          <div className="chart col-span-full sm:col-span-10">
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
            className="bg-gray-800 text-gray-300 grid grid-cols-2 md:grid-cols-3 p-4
          gap-4 place-content-stretch place-items-center text-center col-end-13 col-start-1"
          >
            <div className="list ">
              <p className="underline">Investopedia Learning</p>
              <br />
              <ul className="">
                <li>
                  <a href="https://www.investopedia.com/terms/t/trendanalysis.asp">
                    Trend Analysis
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/trading/support-and-resistance-basics/">
                    Support and Resistance
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/terms/m/movingaverage.asp">
                    Moving Averages
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/top-7-technical-analysis-tools-4773275">
                    Indicators
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/ask/answers/05/fibonacciretracement.asp">
                    Fibonacci Retracements
                  </a>
                </li>
              </ul>
            </div>
            <div className="list">
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
            <div className="flex lg:block col-span-2 md:col-auto ">
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
