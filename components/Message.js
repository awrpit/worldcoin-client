import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../styles/Message.module.css"
import { Popover } from "@headlessui/react";

function Message({ type, content }) {
  return (
    <div
      className={`p-3 ${type === "user" ? "" : "bg-gray-100"} flex flex-row `}
    >
      {type === "user" ? (
        <>
          <Image
            src="/usericon.svg"
            width={30}
            height={30}
            alt="usericon"
            className="m-1"
          />
          <p className="text-md md:text-l py-1 px-2 font-georgia">{content}</p>
        </>
      ) : (
        <>
          <Image
            src="/response.svg"
            width={30}
            height={30}
            alt="response"
            className="m-1"
          />
          {/* <p className="text-md md:text-l py-1 px-2 font-georgia"> */}
            {/* {content.sourcesText} */}
            <>
            <div className="flex flex-col">
            <MarkdownDisplay content={content.answer} />
            <Popover className="px-2 font-georgia">
              <Popover.Button className="bg-gray-200 hover:bg-gray-700 hover:text-white text-black rounded-md p-1 my-2">
                Checkout Sources
              </Popover.Button>
              <Popover.Panel className="flex flex-row gap-2 ">
                   {
            content.sources.map((source, index) => {
              return   <a
                    key={index}     
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                   Source {index+1}
                  </a>
            })
          }
              </Popover.Panel>
            </Popover>
            <div >
           

            </div>
        
            </div>
            </>
          {/* </p> */}
        </>
      )}
    </div>
  );
}

const CodeBlock = ({ language, value }) => {
  return (
    <div style={{ position: "relative" }}>
      <SyntaxHighlighter language={language || "bash"} style={materialDark}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

const MarkdownDisplay = ({ content }) => {
  console.log(content)
  return (
    <ReactMarkdown
      linkTarget="_blank"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <CodeBlock
              language={match[1]}
              value={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            <div className="inline-block mx-1 max-w-[99%] overflow-x-auto">
              <code
                className="rounded-md px-1 pt-1 bg-dark-gray text-light-gray"
                {...props}
              >
                {children}
              </code>
            </div>
          );
        },
      }}
      className={styles.markdown}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Message;
