import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

import {currentUser, setCurrentUser, gameData} from "./features/gameMetaDataSlice";
import Gameboard from "./components/GameBoard";
import SignupForm from "./components/SignUpForm"; 
import Lobby from "./components/Lobby";
import LoginForm from "./components/LoginForm";
import LandingPage from './components/LandingPage';
import Profile from "./components/Profile";
import * as P from "./styles/ProfileStyles";


function App() {
  const activeUser = useSelector(currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const HandleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem("currentUserId");
    dispatch(setCurrentUser(""));
    setTimeout(() => {
      history.push("/")
  }, 500)
}

  return (
    <P.BodyContainer className="App">
      {/* <button onClick={HandleLogout}>LogOut</button> */}
      {activeUser ? 
        <Switch>
          <Route exact path="/" component={Lobby}/>
          <Route path="/game" component={Gameboard}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
        
        :
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/login" component={LoginForm}/>
        </div>
    }
    </P.BodyContainer>
  );
}

export default App;
