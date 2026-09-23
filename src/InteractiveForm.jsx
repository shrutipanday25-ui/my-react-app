function InteractiveForm() {
  function handleClick() {
    console.log("Button was clicked!");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  function handleDelete(id) {
    console.log("Deleting item with ID:", id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Type something"
        onChange={handleChange}
      />

      <br />
      <br />

      <button type="submit">Submit</button>

      <br />
      <br />

      <button type="button" onClick={() => handleDelete(42)}>
        Delete Item
      </button>
    </form>
  );
}

export default InteractiveForm;