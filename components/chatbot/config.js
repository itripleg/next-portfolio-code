import { createChatBotMessage } from "react-chatbot-kit";
import Motoko from "./Motoko.js";
import Image from "next/image";
const config = {
  initialMessages: [
    createChatBotMessage(`How did you find me?`),
    // createChatBotMessage(`Where have you been?`),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#333333" },
  },
  // widgets: [
  //   {
  //     widgetName: "Motoko",
  //     widgetFunc: (props) => {
  //       <Motoko {...props} />;
  //     },
  //   },
  // ],
  customComponents: {
    header: () => <></>,
    // botAvatar: (props) => (
    //   <Image src="/horror.jpg" layout="fill" className=""></Image>
    // ),
  },
};

export default config;
