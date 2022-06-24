////HOC's concept
import React from "react";
const pwd='admin123'
const ProfileAuth=(props)=>{
return (
    <>
    {pwd==='admin123' ? props.children:<h1>Un-Authorized</h1>}
    </>
)
}
export default ProfileAuth;
