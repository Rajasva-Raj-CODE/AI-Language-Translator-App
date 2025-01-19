"use client";
import React, { useState } from "react";
import { Dropdown } from "./components/dropdown";

const languagesOptions = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
];

export default function Home() {
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("es");

  const handleLanguageFromChange = (value) => {
    setLanguageFrom(value);
  };

  const handleLanguageToChange = (value) => {
    setLanguageTo(value);
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl mx-auto">
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center p-2 pb-2 gap-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          <div className="flex flex-row gap-4">
            <div className="container flex flex-col">
              <Dropdown
                name="languageFrom"
                value={languageFrom}
                options={languagesOptions}
                onChange={handleLanguageFromChange}
              />
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
        </div>
      </div>
    </div>
  );
}
