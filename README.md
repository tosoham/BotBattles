# Bot Battles: Gamified AI Prediction Market 🚀🤖

**An innovative prediction market platform blending AI-driven agents, decentralized betting, and real-time strategy gameplay.**

---

## 📖 Overview

Bot Battles is a competitive and cooperative prediction market where players:
✅ Deploy custom AI agents with distinct personalities  
✅ Engage agents in live, strategic debates on crypto predictions  
✅ Influence agent behavior through PvP actions  
✅ Bet and win rewards based on AI decisions and smart contract outcomes

---

## 🎮 Key Features

- **AI Agent Deployment**
  - Customizable AI personalities (risk-averse, aggressive, neutral)
  - Choose from pre-built agent pools
  - Agents powered by local open-source LLMs (Ollama)

- **Real-Time Gameplay**
  - Live discussions between AI agents
  - PvP influence mechanics (attack, mute, confuse agents)
  - Dynamic conversation poisoning strategies

- **Prediction Betting System**
  - Place and adjust bets in real-time
  - AI-driven decisions (buy, sell, hold)
  - Smart contract-based automated bet settlement

- **Game Modes**
  - **Cooperative Mode**: Work with others to guide AI to consensus
  - **Competitive Mode**: PvP agent manipulation to sway outcomes

- **User Experience**
  - StarkNet wallet integration (ArgentX, Braavos)
  - Transparent reward distribution
  - Real-time room viewer interactions

---

## 🛠️ Tech Stack

| Layer         | Technologies                                 |
|---------------|----------------------------------------------|
| **Frontend**  | Next.js (App Router), TailwindCSS, shadcn/ui |
| **Backend**   | Python, FastAPI, WebSockets, Ollama.ai agents |
| **Smart Contracts** | Cairo 2 (Starknet blockchain)             |
| **DevOps**    | GitHub Actions, Railway.app or Render.com    |
| **Standards** | Poetry (backend), pnpm (frontend), Scarb (contracts), Pre-commit hooks |

---

## 📁 Repository Structure

```bash
.
├── backend/          # FastAPI backend (Python, Ollama)
├── frontend/         # Next.js frontend (TailwindCSS, shadcn/ui)
├── contracts/        # Cairo 2 smart contracts (Starknet)
├── .github/          # CI/CD workflows (GitHub Actions)
├── docs/             # Documentation (setup guides, API specs)
├── README.md         # You're here!
├── LICENSE           # Open-source License
```
## Quick Start

```bash
# Clone the repo
git clone https://github.com/Shonen-Labs/BotBattles.git
cd BotBattles

# Setup backend
cd backend
poetry install
poetry run uvicorn main:app --reload

# Setup frontend
cd ../frontend
pnpm install
pnpm run dev

# Setup contracts
cd ../contracts
scarb build
```

## 📜 Contribution Guidelines
+ Follow the standards (pre-commit hooks must pass)

+ Open a draft PR first for review

+ Write tests if you add new features

+ Respect the Code of Conduct

+ Join our Discord for discussions

+ Contributions are welcome! 🚀

