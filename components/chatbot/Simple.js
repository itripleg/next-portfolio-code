import React from "react";

function Simple() {
  const images = ["./noir.jpg", "./noir2.gif", "./noir3.gif", "./noir4.jpg"];

  return <img src={images[Math.floor(Math.random() * images.length)]} />;
}

export default Simple;
