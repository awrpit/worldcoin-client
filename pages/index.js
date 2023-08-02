import ChatBox from "@/components/ChatBox";
import ChatMessages from "@/components/ChatMessages";
import Header from "@/components/Header";
import WelcomeMessage from "@/components/WelcomeMessage";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [input, setInput] = useState();
  const [chatLog, setchatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    setchatLog((prevLog) => [...prevLog, { type: "user", content: input }]);
    setInput("");
    setIsLoading(true);
    const responseMessage = await fetchData(input);
    console.log("response", responseMessage);
    setchatLog((prevLog) => [
      ...prevLog,
      { type: "bot", content: responseMessage },
    ]);
    setIsLoading(false);
    console.log(chatLog);
  }

  async function fetchData(question) {
    const data = JSON.stringify({
      question: `${question}, answer strictly in markdown, return the response in a json object with answer(contains markdown) and sources`,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://worldcoin-gpt-backend.vercel.app/chat",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios.request(config);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // function extractLinksAndSources(text) {
  //   // Regular expression to match URLs (simplified for this use case)
  //   const urlRegex = /(https?:\/\/[^\s]+)/g;

  //   // Split the text into lines
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

  return (
    <div className="flex flex-col h-screen">
      <Header />

      {chatLog.length === 0 ? (
        <WelcomeMessage setInput={setInput} />
      ) : (
        <ChatMessages chatLog={chatLog} />
      )}

      <ChatBox
        setInput={setInput}
        input={input}
        submitHandler={submitHandler}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Home;
