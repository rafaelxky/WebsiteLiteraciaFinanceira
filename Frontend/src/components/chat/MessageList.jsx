import MessageBubble from "./MessageBubble.jsx";

export default function MessageList({ messages, isTyping }) {
  return (
    <div className="messageList" role="log" aria-live="polite">
      {messages.map((m) => (
        <MessageBubble key={m.id} role={m.role} content={m.content} />
      ))}

      {isTyping && (
        <div className="typing" aria-label="A escrever...">
          <span className="typing__dot" />
          <span className="typing__dot" />
          <span className="typing__dot" />
        </div>
      )}
    </div>
  );
}
