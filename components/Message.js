import React from "react";
import Image from "next/image";

function Message({ type, content }) {
  return (
    <div
      className={`p-3 ${
        type === "user" ? "bg-blue-200" : "bg-gray-200"
      } flex flex-row `}
    >
      {type === "user" ? (
        <>
          <Image src="/worldcoin.svg" width={40} height={40} alt="worldcoin" />
          <p className="text-lg md:text-xl py-1 px-2 font-georgia">{content}</p>
        </>
      ) : (
        <>
          <Image src="/next.svg" width={40} height={40} alt="worldcoin" />
          <p className="text-lg md:text-xl py-1 px-2 font-georgia">
            {content.sourceText}
          </p>
        </>
      )}
    </div>
  );
}

export default Message;
