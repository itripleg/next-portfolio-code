import config from "../components/chatbot/config.js";
import MessageParser from "../components/chatbot/MessageParser.js";
import ActionProvider from "../components/chatbot/ActionProvider.js";
import "react-chatbot-kit/build/main.css";
import Image from "next/image";
import dynamic from "next/dynamic";
const Chatbot = dynamic(() => import("react-chatbot-kit"), { ssr: false });

function Noir() {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("handling click");
  // };

  return (
    <>
      <div className="bg-black ">
        {/* <Image
          src="/galaxy.gif"
          height="100"
          width="100"
          layout="fill"
          className=""
        ></Image> */}
        <div className="flex justify-center p-8">
          {/* <div className="h-20 w-20"> */}
          <div className="hidden md:block h-screen">
            <Image
              src="/horror.jpg"
              className="z-[0] rounded-full"
              width={200}
              height={200}
              // layout="fill"
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

export default Noir;
