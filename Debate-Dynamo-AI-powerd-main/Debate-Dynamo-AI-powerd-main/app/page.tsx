'use client';

import { useState } from 'react';
import Recorder from '../components/Recorder';
import Speaker from '../components/Speaker';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const responses = [
        `Counterpoint to "${userInput}": Consider that...`,
        `While you said "${userInput}", studies show...`,
        `Alternative perspective: ${userInput} might overlook...`
      ];
      setAiResponse(responses[Math.floor(Math.random() * responses.length)]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <Recorder onTranscript={setUserInput} />
        {userInput && <p className="mt-4">You said: {userInput}</p>}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!userInput.trim() || isLoading}
        className={`w-full py-3 px-4 rounded-lg ${
          !userInput.trim() || isLoading ? 'bg-gray-400' : 'bg-blue-600 text-white'
        }`}
      >
        {isLoading ? 'Generating...' : 'Get AI Response'}
      </button>

      {aiResponse && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">AI Response:</h2>
          <p className="mb-4">{aiResponse}</p>
          <Speaker text={aiResponse} />
        </div>
      )}
    </div>
  );
}
