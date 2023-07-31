import React from "react";
import Image from "next/image";

function Message({ type, content }) {
  return (
    <div
      className={`p-3 ${type === "user" ? "" : "bg-gray-100"} flex flex-row `}
    >
      {type === "user" ? (
        <>
          <Image
            src="/response.svg"
            width={30}
            height={30}
            alt="worldcoin"
            className="m-1"
          />
          <p className="text-md md:text-l py-1 px-2 font-georgia">{content}</p>
        </>
      ) : (
        <>
          <Image
            src="/usericon.svg"
            width={30}
            height={30}
            alt="worldcoin"
            className="m-1"
          />
          <p className="text-md md:text-l py-1 px-2 font-georgia">
            {content.sourcesText}
          </p>
        </>
      )}
    </div>
  );
}

export default Message;
