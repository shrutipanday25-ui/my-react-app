function Child({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description.toUpperCase()}</p>
    </div>
  );
}

export default Child;