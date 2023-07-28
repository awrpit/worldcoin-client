import { useState } from "react";
import Footer from "./Footer";

const ChatBox = ({ input, setInput, submitHandler }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform translate-x-[-50%] w-full md:w-7/12 bg-white p-5 rounded-t-lg border ">
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-between"
      >
        <input
          className="w-full p-2 mr-2 rounded-md border-gray-200 border outline-none focus:border-slate-800 "
          type="text"
          placeholder="Enter your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-2 rounded-md bg-slate-800 text-white hover:bg-slate-950 "
          type="submit"
        >
          <IconArrowElbow />
        </button>
      </form>
      <Footer />
    </div>
  );
};

function IconArrowElbow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  );
}

export default ChatBox;
