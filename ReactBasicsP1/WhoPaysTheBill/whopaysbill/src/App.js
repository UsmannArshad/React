import React, { useContext } from 'react'
import { MyContext } from './context';
import Stage1 from './components/stage1';
import Stage2 from './components/stage2';
const App=()=>{
  let context=useContext(MyContext)
  return (
    <div className="App">
      <div className='flex-item'>
      <h1>
        Who Pays the bill?
      </h1>
      </div>
      <div className='flex-item'>
      {context.state.stage===1 ? <Stage1/>:<Stage2/>}
      </div>
    </div>
  );
}

export default App;
