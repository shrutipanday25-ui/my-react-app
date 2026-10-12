
import { useState } from "react";
import "./App.css";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      className="search-input"
    />
  );
}

function DataList({ data, searchQuery }) {
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

function Stats({ filteredData, totalItems }) {
  return (
    <p className="stats">
      Showing {filteredData.length} of {totalItems} total items
    </p>
  );
}

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    { id: 1, name: "Shruti Pandey", email: "shruti@example.com" },
    { id: 2, name: "Anjali Verma", email: "anjali@example.com" },
    { id: 3, name: "Riya Sharma", email: "riya@example.com" },
    { id: 4, name: "Priya Singh", email: "priya@example.com" },
    { id: 5, name: "Neha Kumari", email: "neha@example.com" },
  ];

  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>Interactive Dashboard</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Stats
        filteredData={filteredData}
        totalItems={users.length}
      />

      <DataList data={users} searchQuery={searchQuery} />
    </div>
  );
}

function App() {
  return <Dashboard />;
}

export default App;