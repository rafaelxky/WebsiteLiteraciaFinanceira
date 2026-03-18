import { useState } from "react";
import { langService } from "../../Dependencies";

export default function MessageInput({ onSend, disabled }) {
  const [text, setText] = useState("");
  const lang = langService.map;

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    onSend(trimmed);
    setText("");
  }

  function handleKeyDown(e) {
    
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea
        className="composer__input"
        placeholder={lang?.chatMessagePlaceholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={2}
      />
      <button className="btn composer__btn" type="submit" disabled={disabled || !text.trim()}>
        {lang?.send}
      </button>
    </form>
  );
}
