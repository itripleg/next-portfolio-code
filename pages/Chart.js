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
      <p className="w-full h-full bg-gray-900 p-0 text-center text-purple-900 text-bold">
        Chart is still in beta with more features to come!
      </p>
      <div className="bg-purple-900 h-screen flex w-screen ">
        {/*Hidden Sidebar*/}
        <div
          className="hidden w-20 bg-purple-900
          text-center"
        >
          <ChevronDownIcon className="animate-bounce duration-100 w-20 text-gray-800 bg-black " />
        </div>
        {/*End Sidebar*/}
        <div className=" w-full md:pb-0 ">
          <DynamicChart
            symbol="BTCUSDT"
            theme="Dark"
            autosize
            withdateranges
            // calendar
            // hide_legend
            enable_publishing
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
      </div>
    </>
  );
};

export default Chart;
