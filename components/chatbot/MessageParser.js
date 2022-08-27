import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import responses from "./responses";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (message.includes("hack")) {
      actions.yell();
    }
    if (message.includes("game" || "tits")) {
      actions.glhf();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
