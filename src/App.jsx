import Dashboard from "./Dashboard";

function App(){
  
    return(
<div>
  <h1> Dashboard</h1>

  <Dashboard
  isLoogedIn={true}
  isAdmin={true}
  hasError={false}
  />
</div>
    )

}
export default App;