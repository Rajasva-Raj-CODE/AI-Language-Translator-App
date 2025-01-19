import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4">
          <div className="container flex flex-col">
            <span>English</span>
            <textarea className="border border-slate-800 rounded-md p-4 text-black" />
          </div>
          <div className="container flex flex-col">
            <span>French</span>
            <textarea className="border border-slate-800 rounded-md p-4 text-black" />
          </div>
        </div>
        <button className="p-3 rounded-md bg-slate-800 text-white">
          Translate
        </button>
      </main>
    </div>
  );
}
