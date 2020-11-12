import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';

import {currentUser, setCurrentUser, gameData} from "./features/gameMetaDataSlice";
import Gameboard from "./components/GameBoard";
import SignupForm from "./components/SignUpForm"; 
import LoginForm from "./components/LoginForm";
import { signupUser, loginUser, VerifyUser} from "./services/api_helper";
import LandingPage from './components/LandingPage';


function App() {
  const activeUser = useSelector(currentUser);
  const dispatch = useDispatch();

  const HandleLogout = () => {
    localStorage.removeItem('authToken');
    dispatch(setCurrentUser(""));
}

  return (
    <div className="App">
      <button onClick={HandleLogout}>LogOut</button>
      {activeUser ? 

        <Gameboard/>
        :
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/login" component={LoginForm}/>
        </div>
    }
    </div>
  );
}

export default App;
