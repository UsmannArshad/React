////HOC's concept
import React from "react";
const style={
    background:'lightgrey'
}
const ProfileLayout=(props)=>{
return (
        <div style={style}>
            {props.children}
        </div>
);
}
export default ProfileLayout;
