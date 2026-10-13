function SearchInput({ city, setCity }) {
  return (
    <input
      type="text"
      placeholder="Enter city name..."
      value={city}
      onChange={(event) => setCity(event.target.value)}
    />
  );
}

export default SearchInput;