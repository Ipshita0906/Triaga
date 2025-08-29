// components/CareNavigatorChatbot.js

import React, { useState } from "react";

export default function CareNavigatorChatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your Care Navigator. How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  // Simple simulated AI response
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { id: Date.now(), text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          id: Date.now() + 1,
          text:
            "I'm here to assist with triage, appointment info, and answer basic FAQs. For emergencies, please contact your doctor immediately.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window" aria-live="polite">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            {msg.text}
          </div>
        ))}
      </div>
      <input
        aria-label="Type your message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type your question or say 'help'"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
