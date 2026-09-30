import { useEffect, useRef, useState } from "react";

function AccessForm() {
  const inputRef = useRef(null);
  const topRef = useRef(null);
  const phoneRef = useRef(null);

  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFirstNameChange = (e) => {
    const value = e.target.value.slice(0, 10);

    setFirstName(value);

    if (value.length === 10) {
      phoneRef.current.focus();
    }
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        minHeight: "2000px",
        padding: "20px",
      }}
    >
      <h1 ref={topRef}>Page Top</h1>

      <h2>Access Form</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="First Name"
        value={firstName}
        maxLength={10}
        onChange={handleFirstNameChange}
      />

      <br />
      <br />

      <input
        ref={phoneRef}
        type="tel"
        placeholder="Phone Number"
      />

      <div style={{ marginTop: "1700px" }}>
        <button onClick={scrollToTop}>
          Scroll to Top
        </button>
      </div>
    </div>
  );
}

function App() {
  return <AccessForm />;
}

export default App;