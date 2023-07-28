import ChatBox from "@/components/ChatBox";
import ChatMessages from "@/components/ChatMessages";
import Header from "@/components/Header";
import WelcomeMessage from "@/components/WelcomeMessage";
import { useState } from "react";

function Home() {
  const [input, setInput] = useState();
  const [chatLog, setchatLog] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setchatLog([...chatLog, { type: "user", content: input }]);
    setInput("");
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
