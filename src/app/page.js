"use client";
import React, { useState } from "react";
import { Dropdown } from "./components/dropdown";
import { translate } from "@/app/actions/translate";
import VoiceRecorder from "@/app/components/voice-recorder";

const languagesOptions = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
];

export default function Home() {
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("es");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleLanguageFromChange = (value) => {
    setLanguageFrom(value);
  };

  const handleLanguageToChange = (value) => {
    setLanguageTo(value);
  };

  const handleInputTextChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
  };

  const handleInputSet = async (value) => {
    setInputText(value);
    const formData = new FormData();
    formData.append("text", value);
    formData.append("languageTo", languageTo);
    formData.append("languageFrom", languageFrom);
    const translation = await translate(formData);
    setTranslatedText(translation.translation);
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl">
          Translate with <span className="text-amber-700">Ease</span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Break language barriers instantly with our powerful translation app.
          Try it now!
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl mx-auto">
        <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center p-2 pb-2 gap-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
            <form
              className="w-full"
              action={async (formData) => {
                const result = await translate(formData);
                setTranslatedText(result.translation);
                console.log(result);
              }}
            >
              <div className="flex flex-row gap-4">
                <div className="container flex flex-col">
                  <Dropdown
                    name="languageFrom"
                    value={languageFrom}
                    options={languagesOptions}
                    onChange={handleLanguageFromChange}
                  />
                  <textarea
                    placeholder="Enter text to translate"
                    className="border border-slate-800 rounded-md p-4 lg:w-[400px] text-black"
                    value={inputText}
                    name="text"
                    required
                    onChange={handleInputTextChange}
                  />
                </div>

                <div className="container flex flex-col">
                  <Dropdown
                    name="languageTo"
                    value={languageTo}
                    options={languagesOptions}
                    onChange={handleLanguageToChange}
                  />
                  <textarea
                    placeholder="Translated text will appear here"
                    className="border border-slate-800 rounded-md p-4 lg:w-[400px] text-black"
                    value={translatedText}
                    readOnly
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 h-16">
                <button
                  type="submit"
                  className="p-2 rounded-md bg-slate-800 text-white"
                >
                  translate
                </button>
                {languageFrom === "en" && <VoiceRecorder handleSetText={handleInputSet} />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
