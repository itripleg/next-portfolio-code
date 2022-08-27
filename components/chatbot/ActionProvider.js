import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const yell = () => {
    // alert("zomg!");
    const botMessage = createChatBotMessage("you got mad skillz bro");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const glhf = () => {
    const botMessage = createChatBotMessage("Good luck! Have fun!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { yell, glhf },
        });
      })}
    </div>
  );
};

export default ActionProvider;
