// import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import dynamic from "next/dynamic";

const Chart = () => {
  // apparently we need client side/dynamic rendering for tv-widget to work reliably
  const DynamicChart = dynamic(() => import("react-tradingview-widget"), {
    ssr: false,
  });

  return (
    <>
      <div className="bg-yellow-600 py-4 flex justify-center">
        Chart undergoing scheduled maintenance!
      </div>
      <div className=" h-screen w-full bg-black px-16">
        <div className="h-2/3 px-8 pt-8">
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
        To Do:
        <div className="bg-gray-900 text-gray-300 p-8 mx-8  flex flex-col justify-center items-center">
          <p className="underline">To do list</p>
          <ul className="list-disc">
            <li>Save previous chart layout</li>
            <li>Add bullish/bearish bias</li>
            <li>Add common harmonic patterns</li>
            <li>Draggable chart positions</li>
            <li>Add easy indicators on</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Chart;
