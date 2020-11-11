import React, { useReducer } from "react";
import { useDispatch} from "react-redux";
import { signupUser, loginUser, VerifyUser} from "../services/api_helper";
import { currentUser, setCurrentUser} from "../features/gameMetaDataSlice";

const LoginForm = () => {

    function loginReducer(state, action) {
        console.log(action.payload)
        switch (action.type) {
            case "NAME_CHANGED":
                return {...state, name: action.payload};
            case "EMAIL_CHAGED":
                return {...state, email: action.payload};
            case "USERNAME_CHANGED":
                return {...state, username: action.payload};
            case "PASSWORD_CHANGED":
                return {...state, password: action.payload};
            default:
                return "ERROR"
        }
    }
    
    
    const [enterUser, setEnterUser] = useReducer(loginReducer, {
        name: "",
        email: "",
        username: "",
        password: "",
    })


    const HandleSignup = async(e, signupData) => {
        e.preventDefault();
        const currentUser = await signupUser(signupData);
        useDispatch(setCurrentUser(currentUser));
        console.log(currentUser)
    }
    
    const HandleLogout = () => {
        localStorage.removeItem('authoToken');
        useDispatch(setCurrentUser(""));
    }


    return(
        <form onSubmit={(e) => HandleSignup(e, this.state)}>
            <input
                type="text"
                name="name"
                value={enterUser.name}
                onChange={e => setEnterUser({type: "NAME_CHANGED", payload: e.target.value})}
            />
            <input
                type="text"
                name="email"
                value={enterUser.email}
                onChange={e => setEnterUser({type: "EMAIL_CHANGED", payload: e.target.value})}
            />
            <input
                type="text"
                name="username"
                value={enterUser.username}
                onChange={e => setEnterUser({type: "USERNAME_CHANGED", payload: e.target.value})}
            />
            <input 
                type="password"
                name="passowrd"
                value={enterUser.password}
                onChange={e => setEnterUser({type: "PASSWORD_CHANGED", payload: e.target.value})}
            />
            <input type="submit" value="Sign Up" />
        </form>
    )
}

export default LoginForm;