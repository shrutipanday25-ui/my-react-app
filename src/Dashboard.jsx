import AdminBadge from "./AdminBadge";

function Dashboard({ isLoggedIn, isAdmin, hasError }) {
  if (hasError) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back</h1>
      ) : (
        <h1>Please Log in</h1>
      )}

      {isAdmin && <AdminBadge superAdmin={true} />}
    </div>
  );
}

export default Dashboard;