import { useSelector,useDispatch } from "react-redux";
import { actions_creators } from "./State";
const App=()=> {
  const dispatch=useDispatch()
  const Users=useSelector(state=>state.Users)
  console.log(Users)
  return (
    <div className="App">
      <h1>App</h1>
      <h3>Users List:</h3>
      {Users.map((item)=>(
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>UserName: {item.username}</p>
          <p>Email: {item.email}</p>
          <p>Adress: {item.adress}</p>
          <p>Phone: {item.phone}</p>
          <p>Website: {item.website}</p>
          <p>Company: {item.company}</p>
        </div>
      ))}
      <button onClick={()=>dispatch(actions_creators.GetUserFromServer())}>Get Users from Server</button>
    </div>
  );
}

export default App;
