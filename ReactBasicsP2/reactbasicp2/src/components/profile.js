////HOC'S concept
import React from "react";
import ProfileAuth from "./profile_auth";
import ProfileLayout from "./profile_layout";

const Profile=()=>{
return (
        <ProfileAuth>
            <ProfileLayout>
                <h1>Profile</h1>
            </ProfileLayout>
        </ProfileAuth>
);
}
export default Profile;
