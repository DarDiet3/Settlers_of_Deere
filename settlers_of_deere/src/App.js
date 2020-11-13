import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';

import {currentUser, setCurrentUser, gameData} from "./features/gameMetaDataSlice";
import Gameboard from "./components/GameBoard";
import SignupForm from "./components/SignUpForm"; 
import LoginForm from "./components/LoginForm";
import LandingPage from './components/LandingPage';
import Profile from "./components/Profile";


function App() {
  const activeUser = useSelector(currentUser);
  const dispatch = useDispatch();

  const HandleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem("currentUserId");
    dispatch(setCurrentUser(""));
}

  return (
    <div className="App">
      <button onClick={HandleLogout}>LogOut</button>
      {activeUser ? 
        <Switch>
          <Route exact path="/" component={Gameboard}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
        
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
