"use client";

import { useState, useRef, useEffect } from "react";

import "./ai.css";

export default function AIPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const suggestions = [
    "What does Omogbolahan do?",
    "Tell me about his services",
    "Show me some of his work",
    "Why is he a designer?",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const message = text.trim();
    if (!message || loading) return;

    setMessages((m) => [...m, { role: "user", text: message }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "bot", text: data.reply || "Sorry, something went wrong." },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Sorry, I couldn't connect. Try again." },
      ]);
    }
    setLoading(false);
  }

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
              onClick={() => sendMessage(suggestion)}
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

          {messages.length === 0 && (
            <div className="ai-empty">
              <span>01</span>
              Start the conversation.
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`ai-message ${
                m.role === "user" ? "ai-message-user" : "ai-message-bot"
              }`}
            >
              <span className="message-label">
                {m.role === "user" ? "You" : "Giwa AI"}
              </span>
              <p>{m.text}</p>
            </div>
          ))}

          {loading && (
            <div className="ai-message ai-message-bot">
              <span className="message-label">Giwa AI</span>
              <p>Thinking...</p>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <form
          className="ai-input-area"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
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
