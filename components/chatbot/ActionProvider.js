import React from "react";
import { responses } from "./responses";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const reply = () => {
    // alert("zomg!");
    const botMessage = createChatBotMessage(
      responses.polite[Math.floor(Math.random() * responses.polite.length)]
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const slut = () => {
    const msg1 = createChatBotMessage("Oh. You're one of those clients", {
      delay: 500,
    });
    const msg2 = createChatBotMessage("Hold on, I got something for ya...", {
      delay: 2000,
    });
    const msg3 = createChatBotMessage("Here ya go.", {
      widget: "risque",
      delay: 4500,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg1, msg2, msg3],
    }));
  };

  const rude = () => {
    const msg = createChatBotMessage(
      responses.rude[Math.floor(Math.random() * responses.rude.length)]
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };
  const joke = () => {
    const msg = createChatBotMessage(
      responses.jokes[Math.floor(Math.random() * responses.jokes.length)]
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };
  const swear = () => {
    const msg = createChatBotMessage(
      responses.swear[Math.floor(Math.random() * responses.swear.length)]
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };
  const noir = () => {
    const msg = createChatBotMessage(
      responses.noir[Math.floor(Math.random() * responses.noir.length)],
      { widget: "noir" }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
    return;
  };
  const jb = () => {
    const msg = createChatBotMessage(
      responses.jb[Math.floor(Math.random() * responses.jb.length)],
      { widget: "jb" }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };
  const secret = () => {
    const msg = createChatBotMessage(
      responses.secret[Math.floor(Math.random() * responses.secret.length)]
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };
  const help = () => {
    const msg1 = createChatBotMessage(responses.help[0]);
    const msg2 = createChatBotMessage(responses.help[1], { delay: 2000 });
    const msg3 = createChatBotMessage(responses.help[2], { delay: 4000 });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg1, msg2, msg3],
    }));
  };
  const cat = () => {
    const msg = createChatBotMessage(
      responses.cat[Math.floor(Math.random() * responses.cat.length)],
      { widget: "cat" }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            reply,
            slut,
            rude,
            joke,
            swear,
            noir,
            secret,
            help,
            cat,
            jb,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
