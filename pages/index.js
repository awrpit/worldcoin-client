import ChatBox from "@/components/ChatBox";
import ChatMessages from "@/components/ChatMessages";
import Header from "@/components/Header";
import WelcomeMessage from "@/components/WelcomeMessage";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [input, setInput] = useState();
  const [chatLog, setchatLog] = useState([]);

  async function submitHandler(e) {
    e.preventDefault();
    setchatLog([...chatLog, { type: "user", content: input }]);
    const responseMessage = await fetchData(input);
    setchatLog([...chatLog, { type: "bot", content: responseMessage }]);

    setInput("");
  }

  async function fetchData(question) {
    const data = JSON.stringify(question);

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
      const { sourcesText, links } = extractLinksAndSources(data);

      return {
        sourcesText,
        links,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  function extractLinksAndSources(text) {
    // Regular expression to match URLs (simplified for this use case)
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Split the text into lines
    const lines = text.split("\n");

    // Find the line index of 'SOURCES:'
    const sourcesIndex = lines.findIndex((line) => line.trim() === "SOURCES:");

    const sourcesText = lines.slice(0, sourcesIndex).join("\n").trim();

    // Extract the links (all lines after 'SOURCES:')
    const linksText = lines
      .slice(sourcesIndex + 1)
      .join("\n")
      .trim();
    const links = linksText.match(urlRegex);
    return { sourcesText, links };
  }

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
      />
    </div>
  );
}

export default Home;
