import React from "react";
function Check()
{
    return (<h1>Check</h1>)
}
const Check1=()=>(<h1>Check1</h1>)
class ClassComp extends React.Component{
    render()
    {
        return (
            <p>from Class Component</p>
        )
    }

}
export default Check;
export {Check1};
export {ClassComp};