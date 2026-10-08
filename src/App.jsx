import {Routes,Route,Link,useParams} from "react-router-dom";
const users = [
  {id: 1, name:"Alice"},
  {id: 2, name: "Bob"}
];

function Directory(){
  return(
    <div>
      <h1> User Directory</h1>

      {users.map((user)=>(
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
          {user.name}
          </Link>
          </div>
      ))}
      </div>
  );
}

      function UserProfile() {
  const { id } = useParams();

  const user = users.find((user) => user.id === Number(id));

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      <p>User Name: {user.name}</p>
    </div>
  );
}
function App(){
  return (
    <Routes>
      <Route path="/" element={<Directory/>}/>
      <Route path="/users/:id"element={<UserProfile/>}/>
    </Routes>
  );
}
  
export default App;

