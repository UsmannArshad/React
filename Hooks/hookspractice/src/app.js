import REACT,{useState} from 'react'
const App=({initialcount})=>{
    const [count,setCount]=useState(initialcount)
    const Decrement=()=>{
        setCount(count-1)
    }
    return(
        <>
        <h3>Count:{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>ADD</button>
        <button onClick={Decrement}>DEC</button>
        <button onClick={()=>{setCount(initialcount)}}>Reset</button>
        </>
    )
}
export default App;