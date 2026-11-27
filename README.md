# ⚡ JUNO — Live AI Assistant Demo

### Jude's Neural Operations Assistant

**A browser-based conversational AI interface with voice interaction, operational modes, and a futuristic command-center UI.**

<p align="center">

<a href="https://judereyes.github.io/JUNO-Live-Demo/"><strong>🚀 LAUNCH JUNO LIVE</strong></a>

</p>

<p align="center">

![HTML](https://img.shields.io/badge/HTML5-Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-HUD_Design-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers_AI-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active_Development-00C7B7?style=for-the-badge)

</p>

---

## ◈ Overview

JUNO — Jude's Neural Operations Assistant — is a personal AI assistant project created by **Jude Reyes**.

This repository contains the public browser-based demo: a responsive single-page interface connected to a separately hosted Cloudflare Worker. The Worker calls **Cloudflare Workers AI** to generate conversational responses.

JUNO is designed to demonstrate how conversational AI, voice interaction, contextual work modes, and a focused user interface can work together in one assistant experience.

> This is an evolving portfolio project, not a finished commercial product. AI output can be inaccurate and should be checked before use in important decisions.

## 🚀 Live Demo

**[Open JUNO Live](https://judereyes.github.io/JUNO-Live-Demo/)**

## ✨ Features

| Feature | Description |
|---|---|
| General AI conversation | Ask open-ended questions and continue a conversation |
| Session context | Recent conversation turns are retained in the current browser tab |
| English, Filipino & Taglish | The assistant is instructed to respond in the user's language |
| Voice input | Browser speech recognition in supported browsers |
| Voice output | Browser-native speech synthesis |
| Operational modes | General, Work, Jobs, Interview, Automation, and Client |
| Command shortcuts | Open selected websites using direct commands |
| Activity HUD | Live interaction status, voice state, and recent activity |
| Text attachments | Read supported text-based files and include their contents as prompt context |
| Responsive interface | Futuristic command-center layout with responsive controls |

### Operational modes

- **GENERAL** — open-ended questions, writing, translation, brainstorming, and everyday assistance.
- **WORK** — client instructions, summaries, checklists, and SOP drafting.
- **JOBS** — job-posting analysis, fit/gap reviews, and application planning.
- **INTERVIEW** — interview practice and answer feedback.
- **AUTOMATION** — workflow planning, triggers, actions, and error handling.
- **CLIENT** — task extraction, prioritization, and client updates.

Modes provide useful context; they do not prevent users from asking unrelated questions.

## 🧠 Architecture

The public demo separates the browser interface from the AI service.

```text
┌──────────────────────────────────────────────┐
│              JUNO — GitHub Pages             │
│                                              │
│  HTML / CSS / JavaScript                     │
│  HUD • Chat Console • Work Modes • Voice     │
│  Session Conversation Context                │
└──────────────────────┬───────────────────────┘
                       │ HTTPS + JSON
                       ▼
┌──────────────────────────────────────────────┐
│          Cloudflare Worker: juno-ai-engine   │
│                                              │
│  Request validation • CORS • Context         │
│  Secure server-side AI binding               │
└──────────────────────┬───────────────────────┘
                       │ Workers AI binding
                       ▼
┌──────────────────────────────────────────────┐
│             Cloudflare Workers AI            │
│                                              │
│  @cf/zai-org/glm-4.7-flash                    │
│  Conversational response generation          │
└──────────────────────────────────────────────┘
```

### Live service configuration

| Component | Configuration |
|---|---|
| Frontend hosting | GitHub Pages |
| Frontend repository | `JudeReyes/JUNO-Live-Demo` |
| Public frontend | `https://judereyes.github.io/JUNO-Live-Demo/` |
| AI backend | Cloudflare Worker: `juno-ai-engine` |
| Worker endpoint | `https://juno-ai-engine.jude-reyes0618.workers.dev/` |
| AI provider | Cloudflare Workers AI |
| Model | `@cf/zai-org/glm-4.7-flash` |
| Worker binding | `AI` |
| Browser context | `sessionStorage` (current tab/session) |

The browser sends recent user/assistant messages to the Worker. The Worker uses its server-side Workers AI binding and returns a reply. No provider API key is embedded in the public HTML.

## 🎙️ Voice interaction

Voice features depend on browser support and permissions:

- Speech input uses the browser's Speech Recognition API where available.
- Speech output uses the browser's Speech Synthesis API.
- Chrome is the primary browser used during development.
- Available voices and pronunciation quality depend on the operating system and installed browser voices.

Voice recognition and speech playback are browser features; they are not generated by the Workers AI model itself.

## 📎 Attachment support

The demo can read text-based files in the browser, including:

- `.txt`
- `.md`
- `.csv`
- `.json`
- `.log`

The current demo includes up to 14,000 characters of extracted text in the AI request. PDF, Word, and image OCR/document parsing are not currently implemented. Do not upload confidential information to a public demo.

## 🛠️ Technology stack

**Frontend**
- HTML5
- CSS3
- Vanilla JavaScript
- Web Speech APIs
- Session Storage

**AI backend**
- Cloudflare Workers
- Cloudflare Workers AI
- JSON over HTTPS
- Server-side AI binding

**Delivery**
- GitHub
- GitHub Pages
- Cloudflare dashboard / Worker deployment

## 🔐 Security and privacy

- Do not place API keys, passwords, or private credentials in `index.html` or any public repository.
- The frontend calls the Worker endpoint; the AI binding is configured server-side.
- The Worker applies an origin allow-list for the GitHub Pages site.
- Conversation context is kept in the current browser tab's session storage and sent to the AI service when a request is made.
- Avoid submitting passwords, financial details, confidential client data, or sensitive personal information.
- AI responses may be incomplete or incorrect; verify important information independently.

## ⚠️ Current limitations

- No live web search or current vacancy/news lookup is connected.
- No external email, calendar, CRM, or productivity accounts are connected.
- Work modes provide contextual guidance; they do not execute real-world actions.
- Long-term cross-device memory and user accounts are not implemented.
- Only the listed text formats are readable as attachments.
- Voice capabilities vary by browser and device.
- Availability, model access, and usage limits depend on the Cloudflare account and current Workers AI plan.

## 🗺️ Development roadmap

- [x] Futuristic responsive HUD interface
- [x] Command console and operational modes
- [x] Browser voice input/output
- [x] Cloudflare Worker deployment
- [x] Workers AI binding and successful backend response test
- [x] Frontend connection to the Workers AI endpoint
- [x] In-tab conversation context
- [x] Consistent professional control styling
- [ ] End-to-end verification on the public GitHub Pages deployment
- [ ] Improved document and PDF processing
- [ ] Optional persistent memory with clear privacy controls
- [ ] Additional integrations with explicit user approval

## 📂 Repository structure

```text
JUNO-Live-Demo/
├── index.html
├── README.md
└── .github/
```

The AI backend is hosted separately as a Cloudflare Worker and is not stored in this public frontend repository.

## 🔗 Project links

| Resource | Link |
|---|---|
| Live JUNO Demo | [Launch JUNO](https://judereyes.github.io/JUNO-Live-Demo/) |
| Main JUNO Repository | [JudeReyes/JUNO](https://github.com/JudeReyes/JUNO) |
| Portfolio | [Jude Reyes — Technical VA](https://jude-va-portfolio.lovable.app) |
| GitHub | [JudeReyes](https://github.com/JudeReyes) |
| LinkedIn | [Jude Reyes](https://www.linkedin.com/in/judereyes0618) |

## 👨‍💻 Developer

**Jude Reyes**  
Technical Virtual Assistant | Workflow Automation | AI Tools | Web Development

JUNO is a hands-on portfolio project exploring conversational AI integration, frontend engineering, serverless deployment, voice interaction, and human-computer interaction.

---

<p align="center">

# ⚡ JUNO

**UNDERSTAND • ASSIST • ORGANIZE • RESPOND**

Designed & built by **Jude Reyes**

<a href="https://judereyes.github.io/JUNO-Live-Demo/"><strong>🚀 EXPERIENCE JUNO LIVE</strong></a>

</p>
