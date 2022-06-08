import React from "react";
import Check,{Check1} from "./news_list";
function ShowHeader()
{
    function CalculateDate()
    {
        const date=new Date();     //if we want to do some computation as in .jsx we cant have more than 1 statement
        return date.getFullYear();
    }
    return(
        <>
        <h1>Header</h1>
        <h2>Date is {CalculateDate()}</h2>
        <h3><Check/></h3>
        <h4><Check1/></h4>
        </>
    )
}
export default ShowHeader;