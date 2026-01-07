import { useMemo, useState } from "react";
import MessageList from "./MessageList.jsx";
import MessageInput from "./MessageInput.jsx";

function createId() {
  return crypto?.randomUUID?.() ?? String(Date.now() + Math.random());
}

function getMockBotReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("fundo") || text.includes("emerg")) {
    return (
      "Plano rápido para fundo de emergência:\n" +
      "1) Calcula despesas essenciais mensais.\n" +
      "2) Objetivo inicial: 1 mês (depois sobe para 3–6).\n" +
      "3) Automatiza uma transferência semanal/mensal.\n" +
      "4) Guarda em conta à ordem remunerada/depósito de alta liquidez.\n" +
      "Se quiseres, diz-me as tuas despesas mensais e eu ajudo a definir um valor."
    );
  }

  if (
    text.includes("dívida") ||
    text.includes("divida") ||
    text.includes("cartão") ||
    text.includes("cartao")
  ) {
    return (
      "Para dívidas, usa uma destas estratégias:\n" +
      "• Avalanche: paga primeiro a dívida com maior juro.\n" +
      "• Bola de neve: paga primeiro a mais pequena.\n" +
      "Diz-me: valores + taxas de juro + prestação mínima e eu organizo por prioridade."
    );
  }

  return (
    "Percebi. Para te responder bem, diz-me:\n" +
    "1) Qual é o teu objetivo (poupar, investir, pagar dívida, orçamento)?\n" +
    "2) Em quanto tempo?\n" +
    "3) Quais são os números (rendimento, despesas, dívida, poupança atual)?"
  );
}

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
    await new Promise((r) => setTimeout(r, 450));

    addMessage("assistant", getMockBotReply(trimmed));
    setIsTyping(false);
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
