import React, { useReducer, useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { userProfileData, updateUser, updateProfile, deleteUser } from "../services/api_helper";
import { useHistory } from "react-router-dom";
import * as L from "../styles/LandingPageStyles";
import { currentUser, setCurrentUser } from "../features/gameMetaDataSlice";


const EditProfile = () => {
    const history = useHistory();
    const [profileData, setProfileData] = useState([]);
    const activeUser = useSelector(currentUser);

    //Get all of the user profile data
    const allUserProfileData = async (user) => {
        const profileDataAll = await userProfileData(user);
        setProfileData(profileDataAll);
        setEditUser({type:"NAME_CHANGED", payload: profileDataAll.name});
        setEditUser({type:"USERNAME_CHANGED", payload: profileDataAll.username});
        setEditUser({type:"PASSWORD_CHANGED", payload: profileDataAll.password});
        setEditProfile({type:"IMAGE_CHANGED", payload: profileDataAll.userProfile.profileImg});
        setEditProfile({type:"BIO_CHANGED", payload: profileDataAll.userProfile.bio})
    }

    useLayoutEffect(()=> {
        allUserProfileData(activeUser);
    }, [activeUser])

    function editReducer(state, action) {
        switch (action.type) {
            case "NAME_CHANGED":
                return {...state, name: action.payload};
            case "USERNAME_CHANGED":
                return {...state, username: action.payload};
            case "PASSWORD_CHANGED":
                return {...state, password: action.payload};
            default:
                return "ERROR"
        }
    }

    function editProfileReducer(state, action) {
        switch (action.type) {
            case "IMAGE_CHANGED":
                return {...state, profileImg: action.payload};
            case "BIO_CHANGED":
                return {...state, bio: action.payload};
            default:
                return "ERROR"
        }
    }
    
    const HandleEdit = (e, userData, profileData) => {
        e.preventDefault();
        console.log("starting")
        updateUser(activeUser, userData);
        updateProfile(activeUser, profileData);

        console.log("We In")
        history.push("/profile") 
    }

    const HandleDelete = (e) => {
        e.preventDefault();
        localStorage.removeItem('authToken');
        localStorage.removeItem("currentUserId");
        localStorage.removeItem('jwt');
        deleteUser(activeUser);
        setTimeout(() => {
            history.push("/")
        }, 500)
        
    }
    
    const [editUser, setEditUser] = useReducer(editReducer, {
        name: "",
        username: "",
        password: ""
    })

    const [editProfile, setEditProfile] = useReducer(editProfileReducer, {
        profileImg: "",
        bio: ""
    })

    return(
        <L.Div>
            <L.Modal>
                <h1>Edit Profile</h1>
                <form onSubmit={(e) => HandleEdit(e, editUser, editProfile)}>
                    <input
                        type="text"
                        name="name"
                        value={editUser.name}
                        onChange={e => setEditUser({type: "NAME_CHANGED", payload: e.target.value})}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="username"
                        value={editUser.username}
                        onChange={e => setEditUser({type: "USERNAME_CHANGED", payload: e.target.value})}
                        placeholder="Username"
                    />
                    <input 
                        type="password"
                        name="passowrd"
                        value={editUser.password}
                        onChange={e => setEditUser({type: "PASSWORD_CHANGED", payload: e.target.value})}
                        placeholder="Password"
                    />
                    <input 
                        type="text"
                        name="profileImg"
                        value={editProfile.profileImg}
                        onChange={e => setEditProfile({type: "IMAGE_CHANGED", payload: e.target.value})}
                        placeholder="Profile Image Link"
                    />
                    <textarea
                        name="bio"
                        value={editProfile.bio}
                        onChange={e => setEditProfile({type: "BIO_CHANGED", payload: e.target.value})}
                        placeholder="Bio"
                    />
                    <input type="submit" value="Update" />
                </form>
                <button onClick={HandleDelete}>Delete Profile</button>
            </L.Modal>
        </L.Div>
    )
}

export default EditProfile;