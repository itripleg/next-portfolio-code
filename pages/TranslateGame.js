import React, { useState } from "react";

const TranslateGame = () => {
  const startGame = () => {};

  return (
    <div className="h-screen bg-green-600">
      <div className="container mx-auto content-center items-center text-center">
        <h1 className="pt-20">Welcome to Translate Game!</h1>
        <div className="h-20"></div>
        <button
          className="bg-purple-900 rounded-full p-4 w-20 mb-4"
          onClick={startGame}
        >
          Start Game!
        </button>
        <p className="text-xl p-8">0</p>
        <div>
          <p id="phrase"></p>
          <div className="flex h-16 gap-2">
            <input className="w-full rounded-full tracking-tight"></input>
            <button className="bg-blue-800 h-full  rounded-full w-20 ">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateGame;
