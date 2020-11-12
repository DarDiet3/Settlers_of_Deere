import React from "react";
import { useSelector } from "react-redux";
import * as P from "../styles/ProfileStyles";
import { Link } from "react-router-dom";
import { currentUser } from "../features/gameMetaDataSlice";
import Header from "./Header";

const Profile = () => {

    return (
        <div>
            <Header/>
            Welcome to your profile
        </div>
    )
}

export default Profile;