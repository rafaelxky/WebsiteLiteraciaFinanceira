import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(onSearch != null)
            onSearch(query);
    };

    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Look for articles"
      />
    </form>
  );
}