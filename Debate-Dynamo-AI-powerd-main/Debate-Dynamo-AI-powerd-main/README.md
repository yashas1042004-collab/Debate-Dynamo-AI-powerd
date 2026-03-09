# Debate-Dynamo
# 🧠 Debate Dynamo: AI-Powered Argument Coach

Debate Dynamo is a personalized education platform that helps students improve their critical thinking and argumentation skills through real-time, AI-powered debates. It features a gamified “Fallacy Battle Royale” mode where users practice spotting logical fallacies and sharpen their reasoning — all while engaging in dynamic voice-based debates with an AI coach.

## 🚀 Features

- 🎤 **Voice-to-AI Debates** – Speak directly to the AI using your mic (Web Speech API).
- ⚔️ **Fallacy Battle Royale Mode** – Timed debate mode where users earn points spotting logical fallacies.
- 🧠 **GPT-4/Mistral-Powered Argument Engine** – Generates relevant, nuanced arguments including fallacies.
- 🕵️ **Fallacy Detection Engine** – Detects logical fallacies like ad hominem, strawman, and slippery slope in real-time.
- 📊 **Progress Dashboard** – Tracks user accuracy, most-missed fallacies, and improvements over time.
- 🧙 **Mimic Mode** – AI can debate like Socrates or other famous philosophers (optional wow feature).

## 🎯 Purpose

Students often lack real-time debate partners and critical feedback. Debate Dynamo provides:
- A 24/7 AI debate partner.
- A safe, fun environment to learn argument structure and identify fallacies.
- Personalized feedback and engagement through gamification.

## 🔧 Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| **Frontend** | Next.js, Tailwind CSS, Framer Motion |
| **Voice**    | Web Speech API, react-speech-recognition |
| **AI Engine**| GPT-4 API / HuggingFace Mistral 7B   |
| **Fallacy Detection** | logical-fallacy-detector + custom logic |
| **Backend**  | Node.js + Express (optional)         |
| **Database** | Firebase (for progress tracking)     |
| **Hosting**  | Vercel                               |

## ✨ Key Features

| 🔑 **Feature**               | 🧩 **Description**                                                                 |
|-----------------------------|-------------------------------------------------------------------------------------|
| **Voice-to-AI Debating**     | Real-time debate with AI using browser mic input powered by Web Speech API.        |
| **Fallacy Battle Royale Mode** | Gamified timed debate mode with health bars and score tracking for engagement.    |
| **AI Argument Generator**    | GPT-4 / Mistral generates arguments that subtly include logical fallacies.         |
| **Fallacy Detection Engine** | Detects fallacies like ad hominem, strawman using rule-based + pattern detection. |
| **Progress Dashboard**       | Tracks user accuracy, most-missed fallacies, and shows growth over time.           |
| **Mimic Mode (Wow Feature)** | AI debates in the style of figures like Socrates or Elon Musk for variety.         |
| **Gamification Elements**    | Includes timers, sound effects, animations, and confetti to boost interactivity.   |
| **Preloaded Debate Topics**  | Comes with ready-made debate topics and responses for demo without API calls.      |


🛡️ Future Enhancements
Add debate styles (Socratic, Lincoln-Douglas, etc.)

Speech-to-emotion detection

User profiles with fallacy mastery levels

Classrooms for teachers to monitor debate growth
