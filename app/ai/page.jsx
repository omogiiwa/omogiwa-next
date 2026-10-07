"use client";

import { useState } from "react";
import "./ai.css";

export default function AIPage() {
  const [input, setInput] = useState("");

  const suggestions = [
    "What does Omogbolahan do?",
    "Tell me about his services",
    "Show me some of his work",
    "Why is he a designer?",
  ];

  return (
    <main className="ai-page">
      <div className="ai-orbit ai-orbit-one"></div>
      <div className="ai-orbit ai-orbit-two"></div>

      <section className="ai-hero">
        <div className="ai-status">
          <span></span>
          Giwa AI
        </div>

        <h1>
          Ask me
          <br />
          <span>anything.</span>
        </h1>

        <p className="ai-intro">
          This AI knows verything about me, you can talk to it like it's the real me
        </p>

        <div className="ai-suggestions">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
            >
              {suggestion}
              <span></span>
            </button>
          ))}
        </div>
      </section>

      <section className="ai-chat">
        <div className="ai-chat-header">
         <div className="ai-avatar">
  <img src="/giwa-ai-icon.svg" alt="OmoGiwa AI" />
</div>
          <div>
            <strong>Giwa AI</strong>
            <span>Ask about the work</span>
          </div>

          <div className="ai-live">
            <span></span>
            Online
          </div>
        </div>

        <div className="ai-messages">
          <div className="ai-message ai-message-bot">
            <span className="message-label">Giwa AI</span>
            <p>
              Hey 👋
              <br />
              I'm here to help you understand Omogbolahan,
              his work, his services, or just what he's trying
              to build.
            </p>
          </div>

          <div className="ai-empty">
            <span>01</span>
            Start the conversation.
          </div>
        </div>
        <form
          className="ai-input-area"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit" aria-label="Send message">
            →
          </button>
        </form>
      </section>

      <footer className="ai-footer">
        <span>GIWA / AI</span>
        <span>
          Whenever you're in doubt, you can always ask me to connect you to the real Giwa
        </span>
      </footer>
    </main>
  );
}