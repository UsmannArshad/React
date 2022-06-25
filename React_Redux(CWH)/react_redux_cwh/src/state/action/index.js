export const AddAmount=(amount)=>{
    return{
        type:'AddAmount',
        payload:amount
    }
}
export const SubtractAmount=(amount)=>{
    return{
        type:'SubtractAmount',
        payload:amount
    }
}
export const AddMovie=(id,moviename,price)=>{
    return{
        type:'AddMovie',
        payload:{id:id,name:moviename,price:price}
    }
}
export const DeleteMovie=(id)=>{
    return{
        type:'DeleteMovie',
        payload:id
    }
}