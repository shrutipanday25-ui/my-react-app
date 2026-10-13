
import { useState, useEffect } from "react";

function LiveSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    const timerId = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch results");
        }

        const data = await response.json();
        setResults(data.products);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.message);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
      controller.abort();
    };
  }, [searchTerm]);

  return (
    <div>
      <h1>Live Product Search</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <ul>
        {results.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default LiveSearch;
