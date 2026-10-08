import { Routes, Route, Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <nav>
          <Link to="/dashboard">Home</Link>
          <br />
          <Link to="/dashboard/settings">Settings</Link>
          <br />
          <Link to="/dashboard/analytics">Analytics</Link>
        </nav>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function DashboardHome() {
  return <h2>Dashboard Home</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

function Analytics() {
  return <h2>Analytics</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="settings" element={<Settings />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}

export default App;