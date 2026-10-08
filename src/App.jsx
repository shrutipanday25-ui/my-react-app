function Child({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description.toUpperCase()}</p>
    </div>
  );
}

function Parent() {
  return (
    <Child
      title="Hello World"
      description="This is a description"
    />
  );
}

function App() {
  return <Parent />;
}

export default App;