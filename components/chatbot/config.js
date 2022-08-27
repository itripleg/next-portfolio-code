import { createChatBotMessage } from "react-chatbot-kit";
import Motoko from "./Motoko.js";
const config = {
  initialMessages: [createChatBotMessage(`How did you find me?`)],
  customStyles: {
    // botMessageBox: { backgroundColor: "#333333" },
  },
  widgets: [
    {
      widgetName: "Motoko",
      widgetFunc: (props) => {
        <Motoko {...props} />;
      },
    },
  ],
};

export default config;
