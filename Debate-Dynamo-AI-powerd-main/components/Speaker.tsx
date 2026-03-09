'use client';
import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    responsiveVoice?: {
      speak: (text: string, voice?: string, params?: {
        rate?: number;
        onstart?: () => void;
        onend?: () => void;
      }) => void;
      cancel: () => void;
    };
  }
}

export default function Speaker({ text }: { text: string }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = () => {
    if (typeof window !== 'undefined') {
      // Try ResponsiveVoice first
      if (window.responsiveVoice) {
        window.responsiveVoice.speak(text, "UK English Female", {
          rate: 0.9,
          onstart: () => setIsSpeaking(true),
          onend: () => setIsSpeaking(false)
        });
      } 
      // Fallback to Web Speech API
      else if (window.speechSynthesis) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Create new utterance
        utteranceRef.current = new SpeechSynthesisUtterance(text);
        utteranceRef.current.onstart = () => setIsSpeaking(true);
        utteranceRef.current.onend = () => setIsSpeaking(false);
        utteranceRef.current.onerror = () => setIsSpeaking(false);
        
        window.speechSynthesis.speak(utteranceRef.current);
      }
    }
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined') {
      // Stop ResponsiveVoice if exists
      if (window.responsiveVoice) {
        window.responsiveVoice.cancel();
      }
      
      // Stop Web Speech API if exists
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      stopSpeaking();
    };
  }, []);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={isSpeaking ? stopSpeaking : speak}
        className={`py-2 px-4 rounded-lg ${
          isSpeaking
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        {isSpeaking ? '⏹ Stop' : '🔊 Play'}
      </button>
      <span className="text-sm text-gray-500">
        {isSpeaking ? 'Playing...' : 'Hear response'}
      </span>
    </div>
  );
}