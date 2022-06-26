import { useSelector,useDispatch } from "react-redux";
import { actions_creators } from "./State";
const App=()=> {
  const dispatch=useDispatch()
  let Userss=useSelector(state=>state.Users)
  let a=[{id:1},{id:2},{id:3}]
  console.log(typeof a)
  console.log(Userss)
  return (
    <div className="App">
      <h1>App</h1>
      <h3>Users List:</h3>
      {Userss.map(item=>
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>UserName: {item.username}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
          <p>Website: {item.website}</p>
          <p>Adress:{item.address.street},{item.address.suite},{item.address.city}</p>
          <p>Company:{item.company.name},{item.company.catchPhrase}</p>
          <hr></hr>
        </div>
)}
      <button onClick={()=>dispatch(actions_creators.GetUserFromServer())}>Get Users from Server</button>
    </div>
  );
}

export default App;
