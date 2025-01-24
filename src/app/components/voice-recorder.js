import { useState, useRef } from "react";
import { Mic, Square } from "lucide-react";

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBase64, setAudioBase64] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const toogleRecording = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
  };
  return (
    <div className="flex items-center p-4">
      <button
        onClick={toogleRecording}
        className={`w-12 h-12  rounded-full border border-gray-500 flex items-center justify-center ${
          isRecording ? "bg-red-500 text-white" : ""
        }`}
      >
        {isRecording ? (
          <Square className="w-4 h-4" />
        ) : (
          <Mic className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
