import REACT,{useState} from 'react'
const App=({initialcount})=>{
    const [count,setCount]=useState(initialcount)
    const [state,setState]=useState({
        name:'Usman',
        surname:'Arshad'
    })
    const Decrement=()=>{
        setCount(count-1)
    }
    const ChangeData=()=>{
        setState({
            name:'Abeer',
            surname:'Shakeel'
        })
    }
    const ChangeData1=()=>{
        setState({
            name:'Abeer',     //we can see if we change only name,surname didnt copied as it was done in class component 
        })
    }
    return(
        <>
        <h3>Count:{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>ADD</button>
        <button onClick={Decrement}>DEC</button>
        <button onClick={()=>{setCount(initialcount)}}>Reset</button>
        <h2>{state.name}</h2>
        <h2>{state.surname}</h2>
        <button onClick={ChangeData}>Change(name and Surname)</button>
        <button onClick={ChangeData1}>Change(Only name)</button>
        </>
    )
}
export default App;