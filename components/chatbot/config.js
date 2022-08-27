import { createChatBotMessage } from "react-chatbot-kit";
import { responses } from "./responses";
import RisqueLink from "./RisqueLink";
import Simple from "./Simple";
import Cats from "./Cats";

const config = {
  initialMessages: [
    createChatBotMessage(
      responses.greetings[
        Math.floor(Math.random() * responses.greetings.length)
      ]
    ),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#333333" },
  },
  state: {
    gist: [],
  },
  widgets: [
    {
      widgetName: "simple",
      widgetFunc: (props) => <Simple {...props} />,
      // mapStateToProps: ["gist"],
      // props: "",
    },
    {
      widgetName: "risque",
      widgetFunc: (props) => <RisqueLink {...props} />,
      // mapStateToProps: ["gist"],
      // props: "",
    },
    {
      widgetName: "cat",
      widgetFunc: (props) => <Cats {...props} />,
      // mapStateToProps: ["gist"],
      // props: "",
    },
  ],
  customComponents: {
    header: () => <></>,
    botAvatar: (props) => (
      <div className="max-w-[50px]">
        <img src="/horror.jpg" layout="" className="rounded-full" />
      </div>
    ),
  },
};

export default config;
