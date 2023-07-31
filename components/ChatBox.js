import Footer from "./Footer";

const ChatBox = ({ input, setInput, submitHandler, isLoading }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-10">
        <div className="flex h-10 items-center justify-center">
          {isLoading && (
            <button 
            className="flex flex-row bg-black text-white px-2 py-1 rounded-lg justify-center items-center "
            >
            <Loading  className="p-2"/>
            <span className="px-1">
              Loading...
            </span>

            </button>
          )}
        </div>
        <div className="border-t w-full md:w-7/12 md:mx-auto px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4 bg-white">
          <form
            onSubmit={submitHandler}
            className="flex items-center justify-between"
          >
            <input
              className="w-full font-georgia p-2 mr-2 rounded-md border-gray-200 border outline-none focus:border-slate-800 "
              type="text"
              placeholder="Enter your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="p-2 rounded-md bg-slate-800 text-white hover:bg-slate-950"
              type="submit"
            >
              <IconArrowElbow />
            </button>
          </form>
          <Footer />
        </div>
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




 


function Loading (){
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}


export default ChatBox;
