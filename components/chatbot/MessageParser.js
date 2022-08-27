import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    message = message.toLowerCase();
    if (
      message.match("hi") ||
      message.includes("hello") ||
      message.includes("hey")
    ) {
      actions.reply();
      return;
    }
    if (
      message.includes("slut") ||
      message.includes("kink") ||
      message.includes("risque")
    ) {
      actions.slut();
      return;
    }
    if (
      message.includes("fuck") ||
      message.includes("bitch") ||
      message.includes("cunt") ||
      message.includes("loser") ||
      message.includes("stupid") ||
      message.includes("baka")
    ) {
      actions.swear();
      return;
    }
    if (message.includes("joke")) {
      actions.joke();
      return;
    }
    if (message.includes("noir")) {
      actions.noir();
      return;
    }
    if (message.includes("help")) {
      actions.help();
      return;
    }
    if (message.includes("cat")) {
      actions.cat();
      return;
    }
    if (message.includes("secret")) {
      actions.secret();
      return;
    } else {
      actions.rude();
      return;
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
