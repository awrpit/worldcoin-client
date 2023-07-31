import React from "react";

function WelcomeMessage({ setInput }) {
  const sampleMessages = [
    "What is worldcoin?",
    "Who are the founders of worldcoin?",
    "How does worldcoin work?",
  ];

  return (
    <div className="flex h-screen w-screen rounded border items-center justify-center">
      <div className="px-4 py-6 rounded-lg bg-slate-200 font-georgia m-3">
        <h1 className="text-xl md:text-3xl pb-3">
          Welcome to the WorldCoinGPT ChatBot!
        </h1>
        <p className="max-w-fit text-md text-gray-500 py-2">
          You can get started with asking one of the following questions of the
          following questions.
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {sampleMessages.map((message, index) => (
            <button
              key={index}
              className="h-auto p-0 text-base flex flex-row hover:underline"
              onClick={() => setInput(message)}
            >
              <IconArrowRight className="pt-1" />
              <span className="pl-2">{message}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function IconArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  );
}

export default WelcomeMessage;
