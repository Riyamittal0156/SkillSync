# SkillSync - Align your Ambition
SkillSync is a self-hosted, offline-capable learning ecosystem designed to streamline the learning process for tech studends. It uses a local Large Language Model (LLM) to generate personalized roadmaps and schedules, gamifies the learning process with streak tracking, and provides a distraction-free environment for mastering technology stacks

# SkillSync: The Offline-First AI Learning Ecosystem
![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg) 
![Status](https://img.shields.io/badge/Status-Prototype-warning.svg) 
![Stack](https://img.shields.io/badge/Stack-MERN-success.svg) 
![AI](https://img.shields.io/badge/AI-Local_Ollama-purple)

## 📖 Table of Contents
- [About the Project]
- [Problem Statement and Project Elaboration]
- [Key Features]
- [Tech Stack and Project Architecture]
- [License](#-license)

---

## About the Project

### The Problem
Beginner developers face three critical hurdles:
1.  **Analysis Paralysis:** Overwhelmed by fragmented resources (YouTube, Docs, Udemy).
2.  **Lack of Structure:** Difficulty creating a realistic, time-bound roadmap.
3.  **The "Credibility Gap":** Online certificates are often viewed as "participation trophies" by employers because they don't prove coding ability.

### The Solution
SkillSync bridges the gap between self-study and bootcamps using a **Local-First Architecture**. It acts as a personal mentor that generates custom roadmaps based on user proficiency and time availability, dynamically adjusts schedules when targets are missed, and provides a gamified environment with streaks, leaderboards, and certifications.

**Crucially, SkillSync operates entirely without external/paid APIs**, ensuring data privacy, zero operational costs, and accessibility even in low-connectivity environments.

---

## Key Features 

Neuro-Roadmap Generator:** Uses a local LLM (Llama 3 / Mistral via Ollama) to generate granular, node-based learning trees tailored to the user's specific goals and time constraints.

* Git-Synced "Proof of Work" (USP):** Instead of multiple-choice quizzes, users submit *actual code repositories*. The local AI scans the codebase to verify implementation logic (e.g., "Does this auth middleware actually handle errors?"), converting commits into verified XP.
* Smart Schedule Dashboard:** An intelligent calendar that adapts to the user's pace. If a day is missed, the AI re-optimizes the remaining schedule to prevent the "falling behind" demotivation loop.
* LAN-Party Mode:** A peer-to-peer study room feature allowing students on the same college WiFi to compete in "Code Sprints" without internet access.
* Resume-Ready Artifacts:** Automatically generates professional bullet points for resumes based on completed, code-verified modules.

---

## Tech Stack and Project Architecture

### Frontend (Client)
* **Framework:** React.js (Vite) for high-performance UI.
* **State Management:** Redux Toolkit.
* **UI Library:** shadcn/ui (Tailwind CSS) for accessibility and design.
* **Visualization:** React Flow (Interactive Roadmaps), Recharts (Analytics).
* **Code Editor:** Monaco Editor (VS Code engine embedded).

### Backend (Server)
* **Runtime:** Node.js & Express.js.
* **Database:** MongoDB (Mongoose ODM) for storing user progress, resource metadata, and local logs.
* **Authentication:** Passport.js (Local Strategy & JWT).
* **Validation:** Zod schemas.

### AI & Intelligence Layer
* **Inference Engine:** [Ollama](https://ollama.com/) (Running Llama 3 or Mistral locally).
* **Orchestration:** LangChain.js to structure prompts.
* **Voice Processing:** Web Speech API (Browser Native) for the mock interview bot.

---
