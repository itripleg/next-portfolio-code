import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const yell = () => {
    alert("zomg!");
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { yell },
        });
      })}
    </div>
  );
};

export default ActionProvider;
