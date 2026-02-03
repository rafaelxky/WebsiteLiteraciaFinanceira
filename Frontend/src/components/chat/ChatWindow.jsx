import { useMemo, useState } from "react";
import MessageList from "./MessageList.jsx";
import MessageInput from "./MessageInput.jsx";

function createId() {
  return crypto?.randomUUID?.() ?? String(Date.now() + Math.random());
}

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

export default function ChatWindow() {
  const initialMessages = useMemo(
    () => [
      {
        id: createId(),
        role: "assistant",
        content:
          "Olá! 👋 Escreve a tua pergunta sobre literacia financeira e eu ajudo-te com passos práticos.",
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
      addMessage("assistant", data.reply ?? "Sem resposta do servidor.");
    } catch (error) {
      addMessage("assistant", "Ocorreu um erro ao ligar ao servidor.");
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
          <div className="chatCard__title">Chat de Literacia Financeira</div>
          <div className="chatCard__subtitle">
            Respostas educativas (não é aconselhamento financeiro).
          </div>
        </div>
      </div>

      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
}
