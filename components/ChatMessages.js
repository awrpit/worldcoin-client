import { useState } from "react";
import Message from "./Message";

const ChatMessages = ({ chatLog }) => {
  //   const [messages, setMessages] = useState([
  //     { type: "user", content: "Hello, bot!" },
  //     { type: "bot", content: "Hello, user!" },
  //   ]);

  return (
    <div className="fixed bottom-14 left-1/2 transform translate-x-[-50%] w-full md:w-8/12 top-16 overflow-y-scroll bg-white">
      {chatLog.map((message, index) => (
        <Message key={index} type={message.type} content={message.content} />
      ))}
    </div>
  );
};

export default ChatMessages;
