import { useState, useEffect } from "react";
import Message from "./Message";
import axios from "axios";

const ChatMessages = ({ chatLog }) => {
  //   const [messages, setMessages] = useState([
  //     { type: "user", content: "Hello, bot!" },
  //     { type: "bot", content: "Hello, user!" },
  //   ]);

  // async function getResponse() {
  //   const response = await fetch(
  //     "https://worldcoin-gpt-backend.vercel.app/chat_json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ question: "What is worldcoin?" }),
  //     }
  //   );

  // function extractLinksAndSources(text) {
  // Regular expression to match URLs (simplified for this use case)
  // const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Split the text into lines
  //   const lines = text.split("\n");

  //   // Find the line index of 'SOURCES:'
  //   const sourcesIndex = lines.findIndex((line) => line.trim() === "SOURCES:");

  //   const sourcesText = lines.slice(0, sourcesIndex).join("\n").trim();

  //   // Extract the links (all lines after 'SOURCES:')
  //   const linksText = lines
  //     .slice(sourcesIndex + 1)
  //     .join("\n")
  //     .trim();
  //   const links = linksText.match(urlRegex);
  //   return { sourcesText, links };
  // }

  // let data = JSON.stringify({
  //   question: "what is worldcoin?",
  // });

  // let config = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  //   url: "https://worldcoin-gpt-backend.vercel.app/chat",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // };

  // axios
  //   .request(config)
  //   .then((response) => {
  //     const data = response.data;
  //     const { sourcesText, links } = extractLinksAndSources(data);
  //     console.log(sourcesText, links);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div className="fixed bottom-14 left-1/2 transform translate-x-[-50%] w-full md:w-8/12 top-16 overflow-y-scroll bg-white">
      {chatLog.map((message, index) => (
        <Message key={index} type={message.type} content={message.content} />
      ))}
    </div>
  );
};

export default ChatMessages;
