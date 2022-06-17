import { useState, useEffect, useRef } from "react";
function App2() {
const [inputValue, setInputValue] = useState("");
const previousInputValue = useRef("");

useEffect(() => {
    console.log({inputValue})
    previousInputValue.current = inputValue;
    console.log(previousInputValue)
}, [inputValue]);

return (
    <>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
    />
    <h2>Current Value: {inputValue}</h2>
    <h2>Previous Value: {previousInputValue.current}</h2>
    </>
);
}

export default App2

