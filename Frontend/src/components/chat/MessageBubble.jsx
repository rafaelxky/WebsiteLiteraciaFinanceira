function formatContent(content) {
  return String(content)
    .split("\n")
    .map((line, idx) => (
      <p key={idx} className="bubble__line">
        {line}
      </p>
    ));
}

export default function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`bubbleRow ${isUser ? "bubbleRow--user" : "bubbleRow--assistant"}`}>
      <div className={`bubble ${isUser ? "bubble--user" : "bubble--assistant"}`}>
        {formatContent(content)}
      </div>
    </div>
  );
}
