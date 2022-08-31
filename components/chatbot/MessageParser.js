import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    message = message.toLowerCase();
    if (message.includes("hello") || message.includes("hey")) {
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
      message.includes("baka") ||
      message.includes("ass") ||
      message.includes("lame")
    ) {
      actions.swear();
      return;
    }
    if (message.includes("joke")) {
      actions.joke();
      return;
    }
    if (message.includes("3d")) {
      actions.threeD();
      return;
    }
    if (message.includes("noir")) {
      actions.noir();
      return;
    }
    if (message.includes("help") || message.includes("who are you")) {
      actions.help();
      return;
    }
    if (
      message.includes("cat") ||
      message.includes("gif") ||
      message.includes("meow")
    ) {
      actions.cat();
      return;
    }
    if (message.includes("jb") || message.includes("josh")) {
      actions.jb();
      return;
    }
    if (message.includes("rachel")) {
      actions.rachel();
      return;
    }
    if (message.includes("bern") || messagemessage.includes("berenice")) {
      actions.bern();
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
