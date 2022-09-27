import { useState } from "react";
function Checklist() {
  // const
  return (
    <>
      <style jsx>{`
        p {
          color: white;
          padding-left: 10px;
        }
        p:hover {
          color: green;
        }
        h1 {
          color: green;
          padding: 2px;
        }
        input {
          padding: 2px;
        }
      `}</style>
      <div className="flex bg-black text-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2 place-content-start">
          <h1 className="text-center col-span-full">Trade checklist</h1>
          <div className="flex items-center ">
            <input type="checkbox"></input>
            <h1>Trading with the trend?</h1>
            <p>
              Make sure we're trading in the direction of the overall market
              movement. Unless we have a reason to counter trade.
            </p>
          </div>
          <div className="flex items-center">
            <input type="checkbox"></input>
            <h1>Entering at support/resistance level?</h1>
            <p>
              We want to set our entry level at as close to key levels. Try not
              to enter a choppy consolidation zone.
            </p>
          </div>
          <div className="flex items-center">
            <input type="checkbox"></input>
            <h1>Setting stop loss and take profit.</h1>
            <p>
              Stop loss and take profit should be at least 3 to 1 risk to
              reward.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checklist;
