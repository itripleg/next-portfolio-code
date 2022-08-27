import config from "../components/chatbot/config.js";
import MessageParser from "../components/chatbot/MessageParser.js";
import ActionProvider from "../components/chatbot/ActionProvider.js";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Motoko from "../components/chatbot/Motoko.js";

function Spooky() {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("handling click");
  // };

  return (
    // outer component wrapper
    <>
      <Motoko />
    </>
  );
}

export default Spooky;
