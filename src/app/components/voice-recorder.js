import { useState,useRef } from 'react';
import { Mic,Square } from 'lucide-react';

export default function VoiceRecorder(){
    const [isRecording, setIsRecording] = useState(false);
    const [audioBase64, setAudioBase64] = useState(null);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);
    return (
        <div>
            <button>
                {isRecording ? <Square size={20} className="text-amber-700" /> : <Mic size={20} className="text-amber-700" />}
            </button>
        </div>

    )
}