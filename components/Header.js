import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full bg-slate-50 p-4 flex flex-row justify-between">
      <div className="flex flex-row">
        <Image src="/worldcoin.svg" width={50} height={50} alt="worldcoin" />
        <h1 className="font-georgia text-3xl">Worldcoin</h1>
      </div>
      <div className="flex flex-col ">
        <IconDownload className="" />
      </div>
    </div>
  );
}

function IconDownload() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="h-7 w-7"
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  );
}

export default Header;
