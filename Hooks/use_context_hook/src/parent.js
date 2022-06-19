import React from "react";
import { MyProvider } from "./context/context";
import Child from "./child";
const App=()=>{
  return(
    <MyProvider>
      <Child/>
    </MyProvider>
  )
}
export default App