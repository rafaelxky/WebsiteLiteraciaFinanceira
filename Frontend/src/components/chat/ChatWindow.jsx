import { useMemo, useState } from "react";
import MessageList from "./MessageList.jsx";
import MessageInput from "./MessageInput.jsx";
import { langService } from "../../Dependencies.js";

function createId() {
  return crypto?.randomUUID?.() ?? String(Date.now() + Math.random());
}

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";
const lang = langService.map;

export default function ChatWindow() {
  const initialMessages = useMemo(
    () => [
      {
        id: createId(),
        role: "assistant",
        content:
          lang?.aiChatGreeting,
        createdAt: new Date().toISOString(),
      },
    ],
    []
  );

  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  function addMessage(role, content) {
    setMessages((prev) => [
      ...prev,
      { id: createId(), role, content, createdAt: new Date().toISOString() },
    ]);
  }

  async function handleSend(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    addMessage("user", trimmed);

    setIsTyping(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      addMessage("assistant", data.reply ?? lang?.aiChatGreeting);
    } catch (error) {
      addMessage("assistant", lang?.serverConnectionError);
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="chatCard">
      <div className="chatCard__header">
        <div className="chatCard__dot" />
        <div>
          <div className="chatCard__title">{lang?.chatTitle}</div>
          <div className="chatCard__subtitle">
            {lang?.chatDisclaimer}
          </div>
        </div>
      </div>

      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
}
