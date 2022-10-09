import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Sup I'm Josh. Full stack dev!",
      "<Lets build something together/>",
      "Lets decentralize the web.",
      "Based in Asheville, NC 😎",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
    <div className="border"></div>
      <div>
        <span>{text}</span>
        <Cursor />
      </div>
    </>
  );
}
