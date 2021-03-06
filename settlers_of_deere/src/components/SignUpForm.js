import React, { useReducer } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { signupUser, loginUser, VerifyUser} from "../services/api_helper";
import { currentUser, setCurrentUser} from "../features/gameMetaDataSlice";
import * as L from "../styles/LandingPageStyles";

const SignupForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    function loginReducer(state, action) {
        console.log(action.payload)
        switch (action.type) {
            case "NAME_CHANGED":
                return {...state, name: action.payload};
            case "EMAIL_CHANGED":
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
        console.log(currentUser)
        dispatch(setCurrentUser(currentUser));
        history.push("/") //TODO: Redirect to profile
    }
    
    const HandleLogout = () => {
        localStorage.removeItem('authoToken');
        useDispatch(setCurrentUser(""));
    }


    return(
        <L.Div>
            <L.Modal>
                <h1>Welcome to the team!</h1>
                <form onSubmit={(e) => HandleSignup(e, enterUser)}>
                    <input
                        type="text"
                        name="name"
                        value={enterUser.name}
                        onChange={e => setEnterUser({type: "NAME_CHANGED", payload: e.target.value})}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="email"
                        value={enterUser.email}
                        onChange={e => setEnterUser({type: "EMAIL_CHANGED", payload: e.target.value})}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="username"
                        value={enterUser.username}
                        onChange={e => setEnterUser({type: "USERNAME_CHANGED", payload: e.target.value})}
                        placeholder="Username"
                    />
                    <input 
                        type="password"
                        name="passowrd"
                        value={enterUser.password}
                        onChange={e => setEnterUser({type: "PASSWORD_CHANGED", payload: e.target.value})}
                        placeholder="Password"
                    />
                    <input type="submit" value="Sign Up" />
                </form>
            </L.Modal>
        </L.Div>
        
    )
}

export default SignupForm;