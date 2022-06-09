import React from "react";
function Check()
{
    return (<h1>Check</h1>)
}
const Check1=()=>(<h1 style={styles.header}>Check1</h1>)
class ClassComp extends React.Component{
    render()
    {
        return (
            <p style={styles.paragraph}>from Class Component</p>
        )
    }

}
let styles={
    header:{
        color:"brown"
    },
    paragraph:{
        color:"yellow"

    }

}
export default Check;
export {Check1};
export {ClassComp};