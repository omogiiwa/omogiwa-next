"use client";

import { useState, useRef, useEffect } from "react";
import "./ai.css";

export default function AIPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions = [
    "What do you do?",
    "Tell me about your services",
    "Show me some of your work",
  ];

  useEffect(() => {
    const container = messagesRef.current;

    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  async function sendMessage(text) {
    const message = text.trim();

    if (!message || loading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: message },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "bot",
          text: data.reply || "I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Giwa AI error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "bot",
          text: "I couldn't connect just now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <main className="ai-page">
      <div className="ai-orbit ai-orbit-one" />
      <div className="ai-orbit ai-orbit-two" />

      <section className="ai-chat">
        <header className="ai-chat-header">
          <div className="ai-avatar">
            <img src="/giwa-ai-icon.svg" alt="Giwa AI" />
          </div>

          <div className="ai-header-info">
            <strong>Giwa AI</strong>
            <span>Ask about the work</span>
          </div>

          <div className="ai-live">
            <span />
            Online
          </div>
        </header>

        <div className="ai-messages" ref={messagesRef}>
          {messages.length === 0 && (
            <div className="ai-welcome">
              <div className="ai-welcome-mark">
                <img src="/giwa-ai-icon.svg" alt="" />
              </div>

              <h1>
                Ask me <span>anything.</span>
              </h1>

              <p>
                Get to know me.
              </p>

              <div className="ai-suggestions">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    disabled={loading}
                  >
                    {suggestion}
                    <span>↗</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`ai-message ${
                message.role === "user"
                  ? "ai-message-user"
                  : "ai-message-bot"
              }`}
            >
              {message.role === "bot" && (
                <div className="ai-message-avatar">
                  <img src="/giwa-ai-icon.svg" alt="" />
                </div>
              )}

              <div className="ai-message-content">
                <span className="message-label">
                  {message.role === "user" ? "You" : "Giwa"}
                </span>

                <p>{message.text}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="ai-message ai-message-bot">
              <div className="ai-message-avatar">
                <img src="/giwa-ai-icon.svg" alt="" />
              </div>

              <div className="ai-message-content">
                <span className="message-label">Giwa</span>

                <p className="ai-thinking">
                  <span />
                  <span />
                  <span />
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="ai-composer-wrap">
          <form className="ai-input-area" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Message Giwa AI..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={loading}
              autoComplete="off"
              aria-label="Message Giwa AI"
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim() || loading}
            >
              ↑
            </button>
          </form>

          <p className="ai-disclaimer">
            GIWA / AI · Whenever you're in doubt, ask me to connect you
            with the real Giwa.
          </p>
        </div>
      </section>
    </main>
  );
}