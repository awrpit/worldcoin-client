import Message from "./Message";

const ChatMessages = ({ chatLog }) => {
  return (
    <div
      className="mx-auto w-full md:w-8/12 top-16 overflow-y-scroll bg-white scrollbar-none pb-32 "
    >
      {chatLog.map((message, index) => (
        <Message key={index} type={message.type} content={message.content} />
      ))}
    </div>
  );
};

export default ChatMessages;
