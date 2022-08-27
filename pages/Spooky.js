import config from "../components/chatbot/config.js";
import MessageParser from "../components/chatbot/MessageParser.js";
import ActionProvider from "../components/chatbot/ActionProvider.js";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Image from "next/image";
import "react-chatbot-kit/build/main.css";
import Motoko from "../components/chatbot/Motoko.js";

function Spooky() {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("handling click");
  // };

  return (
    <>
      <div className="">
        <div className="flex justify-center p-8">
          <div className="h-20 w-20">
            <Image
              src="/horror.jpg"
              className=" z-[0] rounded-full"
              width={200}
              height={200}
            ></Image>
          </div>
          <div className="min-h-screen">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Spooky;
