'use client';
import { useEffect, useRef } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

type SpeechRecognitionType = {
  new (): SpeechRecognition;
  prototype: SpeechRecognition;
};

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionType;
    webkitSpeechRecognition: SpeechRecognitionType;
  }
}

export default function Recorder({ 
  onTranscript 
}: { 
  onTranscript: (text: string) => void 
}) {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript
  } = useSpeechRecognition();

  useEffect(() => {
    onTranscript(transcript);
  }, [transcript, onTranscript]);

  const startListening = () => {
    if (!browserSupportsSpeechRecognition) return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <textarea
        onChange={(e) => onTranscript(e.target.value)}
        placeholder="Type your argument..."
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        rows={3}
      />
    );
  }

  return (
    <div className="space-y-4">
      <button
        onMouseDown={startListening}
        onMouseUp={stopListening}
        onTouchStart={startListening}
        onTouchEnd={stopListening}
        className={`w-full py-3 px-4 rounded-lg font-medium ${
          listening 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {listening ? '🎤 Listening... (Release to stop)' : 'Hold to Speak'}
      </button>
      
      {transcript && (
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-medium">Live transcription:</span> {transcript}
        </p>
      )}
    </div>
  );
}