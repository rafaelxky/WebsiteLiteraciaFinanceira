import { useState } from "react";

export function SearchBar({ onSearch }) {

  const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(onSearch != null){
            onSearch(query);
        } else {
            console.log("Submited");
        }
    };

    return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Procurar artigos"
      />
    </form>
  );
}