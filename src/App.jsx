
import { useState, useEffect } from "react";

function DocumentTitleSync() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count is ${count}`;
    console.log("Effect ran!");
  }, [count]);

  return (
    <div>
      <h1>Side Effects & Dependency Arrays</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Name: {name}</p>
    </div>
  );
}

export default DocumentTitleSync;
