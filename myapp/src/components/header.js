import React from "react";
import Check, { Check1,ClassComp } from "./news_list";
function ShowHeader()
{
    function CalculateDate()
    {
        const date=new Date();     //if we want to do some computation as in .jsx we cant have more than 1 statement
        return date.getFullYear();
    }
    return(
        <>
        <h1 className="headerheading" onClick={()=>console.log('i was clicked')}>Header</h1>
        <h2 className="dateheading">Date is {CalculateDate()}</h2>
        <Check/>
        <Check1/>
        <ClassComp/>
        </>
    )
}
export default ShowHeader;