import { Routes, Route, NavLink } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About page</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is My Contact Page</p>
    </div>
  );
}
function NotFound(){
  return(
    <div>
      <h1>404-Page Not Found</h1>
      <p> Sorry,this page does not exist.</p>
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      {" | "}

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      {" | "}

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*"element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;